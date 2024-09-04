import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { ProyectoComunitario } from '@/types/blog';
import { extractTextFromRichText } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPinIcon } from "lucide-react";

interface ProyectoComunitarioDetailsProps {
  proyecto: ProyectoComunitario;
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
    if (!imageData || !imageData.attributes) {
      console.log('Datos de imagen faltantes o incompletos:', imageData);
      return null;
    }
  
    const imageAttributes = imageData.attributes;
  
    if (!imageAttributes.url) {
      console.log('URL de imagen faltante:', imageAttributes);
      return null;
    }
  
    const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageAttributes.url}`;
    return (
      <div className="relative w-full h-[400px]">
        <Image
          src={imageUrl}
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
          <CardTitle className="text-3xl font-bold">{proyecto.attributes.Title}</CardTitle>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <MapPinIcon className="mr-2 h-4 w-4" />
              <span>{proyecto.attributes.zona || 'No especificada'}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {proyecto.attributes.MainImage && (
            <AdaptiveImage
              imageData={proyecto.attributes.MainImage}
              alt={proyecto.attributes.Title}
              className="mb-6"
            />
          )}
          <div className="prose max-w-none mb-8">
            <ReactMarkdown>{extractTextFromRichText(proyecto.attributes.Description)}</ReactMarkdown>
          </div>
        </CardContent>
      </Card>

      {proyecto.attributes.ContentSection1 && (
        <Card className="mb-8">
          <CardContent className="prose max-w-none pt-6">
            <ReactMarkdown>{extractTextFromRichText(proyecto.attributes.ContentSection1)}</ReactMarkdown>
          </CardContent>
        </Card>
      )}

      {proyecto.attributes.Image1 && (
        <Card className="mb-8">
          <CardContent className="pt-6">
            <AdaptiveImage
              imageData={proyecto.attributes.Image1}
              alt="Imagen complementaria 1"
            />
          </CardContent>
        </Card>
      )}

      {proyecto.attributes.ContentSection2 && (
        <Card className="mb-8">
          <CardContent className="prose max-w-none pt-6">
            <ReactMarkdown>{extractTextFromRichText(proyecto.attributes.ContentSection2)}</ReactMarkdown>
          </CardContent>
        </Card>
      )}

      {proyecto.attributes.Image2 && (
        <Card className="mb-8">
          <CardContent className="pt-6">
            <AdaptiveImage
              imageData={proyecto.attributes.Image2}
              alt="Imagen complementaria 2"
            />
          </CardContent>
        </Card>
      )}

      {proyecto.attributes.ContentSection3 && (
        <Card className="mb-8">
          <CardContent className="prose max-w-none pt-6">
            <ReactMarkdown>{extractTextFromRichText(proyecto.attributes.ContentSection3)}</ReactMarkdown>
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
            <p className="text-sm text-gray-500">{proyecto.attributes.Author?.data?.attributes?.username || 'Desconocido'}</p>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}