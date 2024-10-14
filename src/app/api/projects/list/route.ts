import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Inicialización simple de PrismaClient
const prisma = new PrismaClient();

export async function GET() {
  console.log('API de proyectos llamada');
  console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Configurada' : 'No configurada');

  try {
    console.log('Iniciando consulta a la base de datos');
    
    // Prueba de conexión
    const testConnection = await prisma.$queryRaw`SELECT 1 as result`;
    console.log('Prueba de conexión exitosa:', testConnection);

    const projects = await prisma.proyectoComunitario.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        zona: true,
        author: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    console.log('Consulta exitosa. Número de proyectos recuperados:', projects.length);
    if (projects.length > 0) {
      console.log('Primer proyecto:', JSON.stringify(projects[0]));
    } else {
      console.log('No se encontraron proyectos');
    }

    return NextResponse.json(projects);
  } catch (error: unknown) {
    console.error('Error al obtener proyectos:', error);
    
    if (error instanceof Error) {
      console.error('Stack trace:', error.stack);
      return NextResponse.json(
        { error: 'Error fetching projects', details: error.message },
        { status: 500 }
      );
    } else {
      console.error('Error desconocido:', error);
      return NextResponse.json(
        { error: 'An unknown error occurred' },
        { status: 500 }
      );
    }
  } finally {
    // Desconectar el cliente de Prisma
    await prisma.$disconnect();
  }
}