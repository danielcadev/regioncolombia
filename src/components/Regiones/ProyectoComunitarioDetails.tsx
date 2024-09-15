import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { ProyectosComunitario } from '@/payload-types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPinIcon } from "lucide-react";

interface ProyectoComunitarioDetailsProps {
  proyecto: ProyectosComunitario;
}

const AdaptiveImage = ({
  imageData,
  alt,
  className
}: {
  imageData: any,
  alt: string,
  className?: string
}) => {
  if (!imageData || !imageData.url) {
    console.log('Datos de imagen faltantes o incompletos:', imageData);
    return null;
  }

  return (
    <div className="relative w-full h-[400px]">
      <Image
        src={imageData.url}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={`rounded-lg ${className}`}
      />
    </div>
  );
};

export default function ProyectoComunitarioDetails({ proyecto }: ProyectoComunitarioDetailsProps) {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{proyecto.title}</CardTitle>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <MapPinIcon className="mr-2 h-4 w-4" />
              <span>{proyecto.Zone || 'No especificada'}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {proyecto.mainImage && (
            <AdaptiveImage
              imageData={proyecto.mainImage}
              alt={proyecto.title}
              className="mb-6"
            />
          )}
        </CardContent>
      </Card>
      
      {proyecto.content1 && (
        <Card className="mb-8">
          <CardContent className="prose max-w-none pt-6">
            <ReactMarkdown>{proyecto.content1}</ReactMarkdown>
          </CardContent>
        </Card>
      )}
      
      {proyecto.image1 && (
        <Card className="mb-8">
          <CardContent className="pt-6">
            <AdaptiveImage
              imageData={proyecto.image1}
              alt="Imagen complementaria 1"
            />
          </CardContent>
        </Card>
      )}
      
      {proyecto.content2 && (
        <Card className="mb-8">
          <CardContent className="prose max-w-none pt-6">
            <ReactMarkdown>{proyecto.content2}</ReactMarkdown>
          </CardContent>
        </Card>
      )}
      
      {proyecto.image2 && (
        <Card className="mb-8">
          <CardContent className="pt-6">
            <AdaptiveImage
              imageData={proyecto.image2}
              alt="Imagen complementaria 2"
            />
          </CardContent>
        </Card>
      )}
      
      {proyecto.content3 && (
        <Card className="mb-8">
          <CardContent className="prose max-w-none pt-6">
            <ReactMarkdown>{proyecto.content3}</ReactMarkdown>
          </CardContent>
        </Card>
      )}
      
      <Card>
        <CardContent className="flex items-center space-x-4 pt-6">
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="Autor" />
            <AvatarFallback>AU</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Autor</p>
            <p className="text-sm text-gray-500">{proyecto.author || 'Desconocido'}</p>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}