// src/app/api/projects/[id]/route.ts

import { NextResponse } from 'next/server';
import { prisma} from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const project = await prisma.proyectoComunitario.findUnique({
      where: { id: params.id },
    });

    if (!project) {
      return NextResponse.json({ error: 'Proyecto no encontrado' }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error('Error al obtener el proyecto:', error);
    return NextResponse.json({ error: 'Error al obtener el proyecto' }, { status: 500 });
  }
}