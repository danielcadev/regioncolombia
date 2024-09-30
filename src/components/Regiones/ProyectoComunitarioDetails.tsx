import React from 'react';
import { ProyectoComunitario } from '@/types/blog';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPinIcon, CalendarIcon } from "lucide-react";

interface ProyectoComunitarioDetailsProps {
  proyecto: ProyectoComunitario;
}

export default function ProyectoComunitarioDetails({ proyecto }: ProyectoComunitarioDetailsProps) {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-8 overflow-hidden">
        <CardHeader className="relative">
          {proyecto.mainImage && (
            <img 
              src={proyecto.mainImage} 
              alt={proyecto.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="relative z-10 bg-black bg-opacity-50 p-6">
            <CardTitle className="text-4xl font-bold text-white mb-4">{proyecto.title}</CardTitle>
            <div className="flex items-center space-x-4 text-sm text-gray-200">
              <div className="flex items-center">
                <MapPinIcon className="mr-2 h-4 w-4" />
                <span>{proyecto.zona || 'No especificada'}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>{new Date(proyecto.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="prose max-w-none mt-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contenido Principal</h2>
            <p>{proyecto.content1}</p>
          </div>
          
          {proyecto.image1 && (
            <img src={proyecto.image1} alt="Imagen 1" className="w-full h-auto mb-8 rounded-lg" />
          )}
          
          {proyecto.content2 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contenido Adicional</h2>
              <p>{proyecto.content2}</p>
            </div>
          )}
          
          {proyecto.image2 && (
            <img src={proyecto.image2} alt="Imagen 2" className="w-full h-auto mb-8 rounded-lg" />
          )}
          
          {proyecto.content3 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Más Información</h2>
              <p>{proyecto.content3}</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="flex items-center space-x-4 pt-6">
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="Autor" />
            <AvatarFallback>{proyecto.authorName?.charAt(0) || 'A'}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Autor</p>
            <p className="text-sm text-gray-500">{proyecto.authorName || 'Desconocido'}</p>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}