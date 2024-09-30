import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { uploadFileToS3 } from '@/lib/s3';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const zona = searchParams.get('zona');

  if (!zona) {
    return NextResponse.json({ error: 'Zona parameter is required' }, { status: 400 });
  }

  try {
    const projects = await prisma.proyectoComunitario.findMany({
      where: {
        zona: zona
      },
      include: {
        author: {
          select: {
            name: true
          }
        }
      }
    });

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
    const requiredFields = ['title', 'slug', 'zone', 'authorName', 'content1', 'content2', 'content3'];
    for (const field of requiredFields) {
      if (!projectData[field]) {
        console.log(`Missing required field: ${field}`);
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Buscar el usuario por nombre
    const user = await prisma.user.findFirst({
      where: { name: projectData.authorName as string },
    });

    if (!user) {
      console.log(`Author not found for name: ${projectData.authorName}`);
      return NextResponse.json({ error: `Author not found for name: ${projectData.authorName}` }, { status: 400 });
    }

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
        slug: projectData.slug as string,
        zona: projectData.zone as string,
        content1: projectData.content1 as string,
        content2: projectData.content2 as string,
        content3: projectData.content3 as string,
        mainImage: uploadedImages.mainImage,
        image1: uploadedImages.image1,
        image2: uploadedImages.image2,
        author: {
          connect: { id: user.id }
        }
      },
    });

    console.log('Project created successfully:', newProject);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: `Error creating project: ${error}` }, { status: 500 });
  }
}