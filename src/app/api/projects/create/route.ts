import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { uploadFileToS3 } from '@/lib/s3';
import { createUrl } from '@/lib/utils';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const zone = searchParams.get('zone');  // Cambiado de 'zona' a 'zone'

  if (!zone) {
    return NextResponse.json({ error: 'Zone parameter is required' }, { status: 400 });
  }

  try {
    const projects = await prisma.proyectoComunitario.findMany({
      where: {
        zona: zone  // Mantenemos 'zona' aquí si ese es el nombre del campo en tu base de datos
      },
      include: {
        author: {
          select: {
            name: true
          }
        }
      }
    });

    if (projects.length === 0) {
      return NextResponse.json({ message: 'No projects found for this zone' }, { status: 200 });
    }

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Error fetching projects' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const projectData = Object.fromEntries(formData);
    console.log('Received project data:', projectData);

    // Asegúrate de que todos los campos requeridos estén presentes
    const requiredFields = ['title', 'zone', 'authorId', 'content1', 'content2', 'content3'];
    for (const field of requiredFields) {
      if (!projectData[field]) {
        console.log(`Missing required field: ${field}`);
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Verificar que el usuario existe
    const user = await prisma.user.findUnique({
      where: { id: projectData.authorId as string },
    });
    if (!user) {
      console.log(`Author not found for id: ${projectData.authorId}`);
      return NextResponse.json({ error: `Author not found for id: ${projectData.authorId}` }, { status: 400 });
    }

    // Función para generar un slug único
    async function generateUniqueSlug(baseSlug: string): Promise<string> {
      let slug = baseSlug;
      let counter = 1;
      while (true) {
        const existingProject = await prisma.proyectoComunitario.findUnique({
          where: { slug },
        });
        if (!existingProject) {
          return slug;
        }
        slug = `${baseSlug}-${counter}`;
        counter++;
      }
    }

    // Generar un slug único
    const baseSlug = createUrl(projectData.title as string);
    const uniqueSlug = await generateUniqueSlug(baseSlug);

    // Manejar la carga de archivos
    const imageFields = ['mainImage', 'image1', 'image2'];
    const uploadedImages: { [key: string]: string } = {};
    for (const field of imageFields) {
      const file = formData.get(field) as File | null;
      if (file && file instanceof File) {
        const imageUrl = await uploadFileToS3(file, `projects/${field}-${Date.now()}`);
        uploadedImages[field] = imageUrl;
      } else {
        console.log(`Missing required image: ${field}`);
        return NextResponse.json({ error: `Missing required image: ${field}` }, { status: 400 });
      }
    }

    // Crear el proyecto en la base de datos
    const newProject = await prisma.proyectoComunitario.create({
      data: {
        title: projectData.title as string,
        slug: uniqueSlug,
        zona: projectData.zone as string,
        content1: projectData.content1 as string,
        content2: projectData.content2 as string,
        content3: projectData.content3 as string,
        mainImage: uploadedImages.mainImage,
        image1: uploadedImages.image1,
        image2: uploadedImages.image2,
        authorId: projectData.authorId as string
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    console.log('Project created successfully:', newProject);

    // Devolver todos los campos del proyecto
    return NextResponse.json({
      id: newProject.id,
      title: newProject.title,
      slug: newProject.slug,
      zone: newProject.zona,
      content1: newProject.content1,
      content2: newProject.content2,
      content3: newProject.content3,
      mainImage: newProject.mainImage,
      image1: newProject.image1,
      image2: newProject.image2,
      authorId: newProject.authorId,
      author: newProject.author,
      createdAt: newProject.createdAt,
      updatedAt: newProject.updatedAt
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: `Error creating project: ${error}` }, { status: 500 });
  }
}