/** Minutos de lectura a partir del cuerpo del articulo (~200 palabras/min). */
export function tiempoLectura(texto: string): number {
  const palabras = texto.trim().split(/\s+/).length;
  return Math.max(1, Math.round(palabras / 200));
}

/** 12 de marzo de 2026 */
export function formatoFecha(fecha: Date): string {
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(fecha);
}

/** 2026-03-12 (para <time datetime>) */
export function fechaISO(fecha: Date): string {
  return fecha.toISOString().split('T')[0];
}
