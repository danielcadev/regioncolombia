import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: NextRequest) {
  console.log('Recibida solicitud PUT');
  try {
    const formData = await request.formData();
    console.log('Datos del formulario:', Object.fromEntries(formData));
    
    const id = formData.get('id') as string;
    if (!id) {
      return NextResponse.json({ message: 'Falta el ID del proyecto' }, { status: 400 });
    }

    const zone = formData.get('zone') as string;
    if (!zone) {
      return NextResponse.json({ message: 'Falta el campo zone' }, { status: 400 });
    }

    const updatedProject = await prisma.proyectoComunitario.update({
      where: { id },
      data: {
        title: formData.get('title') as string,
        slug: formData.get('slug') as string,
        zona: zone,
        content1: formData.get('content1') as string,
        content2: formData.get('content2') as string || null,
        content3: formData.get('content3') as string || null,
      },
      include: {
        author: true,
      },
    });

    // Asegurarse de que el objeto devuelto cumpla con la interfaz ProyectoComunitario
    const proyectoComunitario = {
      ...updatedProject,
      zone: updatedProject.zona, // Asegúrate de que 'zone' esté presente
      author: {
        id: updatedProject.author.id,
        name: updatedProject.author.name || '',
        email: updatedProject.author.email || '',
      },
    };

    return NextResponse.json(proyectoComunitario);
  } catch (error: unknown) {
    console.error('Error en la ruta PUT:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { message: 'Error al actualizar el proyecto', error: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: 'Error desconocido al actualizar el proyecto' },
        { status: 500 }
      );
    }
  }
}
