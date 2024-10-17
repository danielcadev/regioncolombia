// components/ProjectForm.tsx
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useProjectForm } from '@/hooks/useProjectForm';
import { RichTextEditor } from '@/components/admin/content/RichTextEditor';
import { ProyectoComunitario, ExtendedUser } from '@/types/blog';

interface ProjectFormProps {
  onSubmit: (data: FormData) => Promise<ProyectoComunitario>;
  user: ExtendedUser;
}

export function ProjectForm({ onSubmit, user }: ProjectFormProps) {
  const router = useRouter();

  const { form, handleSubmit, isLoading, error, isEditing } = useProjectForm(
    onSubmit,
    user,
    (url) => router.push(url)
  );

  const renderImagePreview = (imageName: string, imageUrl: string | undefined) => {
    if (!isEditing || !imageUrl) return null;
    
    return (
      <div className="mt-2">
        <div className="relative w-32 h-32">
          <Image
            src={imageUrl}
            alt={`Current ${imageName}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    );
  };

  const handleFileChange = (onChange: (value: File | null) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

  const renderRichTextEditor = (name: 'content1' | 'content2' | 'content3') => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{`Contenido ${name.slice(-1)}`}</FormLabel>
          <FormControl>
            <RichTextEditor content={field.value} onChange={field.onChange} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el título del proyecto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input placeholder="Slug" {...field} readOnly={isEditing} />
              </FormControl>
              <FormDescription>
                {isEditing ? "Este campo no se puede editar una vez creado el proyecto." : "Este campo se genera automáticamente a partir del título."}
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zona</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese la zona (ej. Region-de-Uraba-Antioqueno)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>Autor</FormLabel>
          <FormControl>
            <Input value={user.name || ''} disabled />
          </FormControl>
          <FormDescription>Este campo se llena automáticamente con el usuario actual.</FormDescription>
        </FormItem>
        <FormField
          control={form.control}
          name="mainImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen Principal</FormLabel>
              {renderImagePreview('mainImage', typeof field.value === 'string' ? field.value : user.project?.mainImage)}
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange(field.onChange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {renderRichTextEditor('content1')}
        
        <FormField
          control={form.control}
          name="image1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen 1</FormLabel>
              {renderImagePreview('image1', typeof field.value === 'string' ? field.value : user.project?.image1)}
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange(field.onChange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {renderRichTextEditor('content2')}
        
        <FormField
          control={form.control}
          name="image2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen 2</FormLabel>
              {renderImagePreview('image2', typeof field.value === 'string' ? field.value : user.project?.image2)}
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange(field.onChange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {renderRichTextEditor('content3')}
        
        <Button type="submit" disabled={isLoading}>
          {isEditing ? 'Actualizar Proyecto' : 'Crear Proyecto'}
        </Button>
      </form>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </Form>
  );
}