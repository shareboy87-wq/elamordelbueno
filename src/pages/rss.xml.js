import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITIO } from '../consts';

export async function GET(context) {
  const articulos = (await getCollection('articulos', ({ data }) => !data.borrador)).sort(
    (a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf()
  );

  return rss({
    title: SITIO.nombre,
    description: SITIO.descripcion,
    site: context.site,
    customData: '<language>es-mx</language>',
    items: articulos.map((a) => ({
      title: a.data.titulo,
      description: a.data.bajada,
      pubDate: a.data.fecha,
      link: `/articulo/${a.id}/`,
    })),
  });
}
