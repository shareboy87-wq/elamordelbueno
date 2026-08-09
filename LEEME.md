# El Amor del Bueno

Sitio de artículos con Astro. HTML estático: carga en menos de un segundo,
que es justo lo que premian Google y AdSense.

**Dominio:** elamordelbueno.com

---

## 1. Probarlo en tu computadora

```bash
npm install
npm run dev
```

Ábrelo en `http://localhost:4321`

Para escribir desde el panel, en **otra terminal**:

```bash
npx decap-server
```

Y entra a `http://localhost:4321/admin`

---

## 2. Subirlo a GitHub

```bash
git init
git add .
git commit -m "primera version"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/elamordelbueno.git
git push -u origin main
```

Luego cambia `repo:` en `public/admin/config.yml` por tu usuario/repo.

---

## 3. Cloudflare Pages

1. Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Elige el repositorio
3. Build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Save and Deploy

**Conectar el dominio:** en el proyecto → **Custom domains** → agrega
`elamordelbueno.com` y `www.elamordelbueno.com`. Como el dominio está en
Cloudflare, el DNS se configura solo.

De ahí en adelante, **cada push actualiza el sitio en ~1 minuto**.

---

## 4. Escribir un artículo

Los artículos viven en `src/content/articulos/` como `.md`.
El nombre del archivo es la URL: `mi-articulo.md` → `/articulo/mi-articulo`

```yaml
---
titulo: "El título que se ve grande"
bajada: "Una o dos líneas. Sale en Google y al compartir."
seccion: "cartas"        # cartas · consejos · historias · senales
fecha: 2026-08-10
portada: "/imagenes/mi-foto.jpg"
alt: "Descripción de la imagen"
destacado: false         # solo uno en true: el que sale arriba
borrador: false          # en true no se publica
---
```

Las imágenes van en `public/imagenes/`.

---

## 5. AdSense

**Antes de aplicar:**

- 20-30 artículos propios, con sustancia
- Privacidad, Acerca de y Contacto (ya vienen; llena tu presentación en Acerca de)
- Que el dominio lleve unas semanas en línea con tráfico real

**Cuando te aprueben:**

1. `src/consts.ts` → `adsense: 'ca-pub-XXXXXXXXXXXXXXXX'`
2. Crea las unidades en el panel de AdSense y usa su número:
   ```astro
   <Anuncio ranura="1234567890" />
   ```

Mientras `adsense` esté vacío, se ve un recuadro gris de "Espacio de anuncio".

**Dos avisos:** los requisitos de AdSense cambian seguido — revisa las políticas
vigentes antes de aplicar. Y los textos 100% de IA sin editar los detectan y
rechazan: usa el workflow para el borrador y métele mano encima.

---

## 6. Lo que ya viene resuelto

- Sitemap y RSS automáticos
- Open Graph (se ve bien al compartir en Facebook y WhatsApp)
- Schema.org Article (Google entiende que son artículos)
- Página 404
- Tiempo de lectura calculado solo
- Diseño adaptado a celular
- Enfoque visible con teclado y `prefers-reduced-motion`
