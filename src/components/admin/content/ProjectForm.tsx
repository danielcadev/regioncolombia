import React from 'react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useProjectForm } from '@/hooks/useProjectForm';

interface ProjectFormProps {
  onSubmit: (data: FormData) => Promise<void>;
}

export function ProjectForm({ onSubmit }: ProjectFormProps) {
  const { form, handleSubmit, users, isLoading, error } = useProjectForm(onSubmit);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter project title" {...field} />
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
                <Input placeholder="Slug" {...field} readOnly />
              </FormControl>
              <FormDescription>
                This field is auto-generated from the title.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zone</FormLabel>
              <FormControl>
                <Input placeholder="Enter zone (e.g. Region-de-Uraba-Antioqueno)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="authorName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an author" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {isLoading ? (
                    <SelectItem value="loading">Loading users...</SelectItem>
                  ) : error ? (
                    <SelectItem value="error">Error: {error}</SelectItem>
                  ) : users.length === 0 ? (
                    <SelectItem value="no-users">No users available</SelectItem>
                  ) : (
                    users.map((user) => (
                      <SelectItem key={user.id} value={user.name}>
                        {user.name} ({user.email})
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mainImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Main Image</FormLabel>
              <FormControl>
                <Input 
                  type="file" 
                  accept="image/*" 
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {[1, 2, 3].map((num) => (
          <React.Fragment key={num}>
            <FormField
              control={form.control}
              name={`content${num}` as "content1" | "content2" | "content3"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content {num}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={`Enter content ${num}`} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {num < 3 && (
              <FormField
                control={form.control}
                name={`image${num}` as "image1" | "image2"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image {num}</FormLabel>
                    <FormControl>
                      <Input 
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </React.Fragment>
        ))}
        <Button type="submit">Create Project</Button>
      </form>
    </Form>
  );
}