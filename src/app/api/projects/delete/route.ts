import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { deleteImageIfExists } from '@/lib/s3';
import { auth } from '@/lib/auth';

const prisma = new PrismaClient();

export async function DELETE(request: Request) {
  const session = await auth();
 
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
  }

  try {
    const project = await prisma.proyectoComunitario.findUnique({
      where: { id },
      include: { author: true },
    });

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // Check if the user is the author or an admin
    const isAuthorized =
      project.authorId === session.user.id ||
      session.user.role === 'ADMIN';

    if (!isAuthorized) {
      return NextResponse.json({ error: 'You are not authorized to delete this project' }, { status: 403 });
    }

    // Delete images and project
    await deleteImageIfExists(project.mainImage);
    await deleteImageIfExists(project.image1);
    await deleteImageIfExists(project.image2);

    await prisma.proyectoComunitario.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Project and associated images deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json({ error: 'Error deleting project' }, { status: 500 });
  }
}