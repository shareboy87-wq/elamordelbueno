import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: z.object({
    titulo: z.string(),
    bajada: z.string(),
    seccion: z.enum(['cartas', 'consejos', 'historias', 'senales']),
    fecha: z.coerce.date(),
    portada: z.string().optional(),
    alt: z.string().optional(),
    destacado: z.boolean().default(false),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { articulos };
