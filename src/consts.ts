export const SITIO = {
  nombre: 'Amor del Bueno',
  lema: 'Del que no se anda con rodeos',
  descripcion:
    'Cartas, consejos e historias sobre querer bien: relaciones, desamor y todo lo que nadie te dijo a tiempo.',
  autor: 'Amor del Bueno',
  correo: 'hola@elamordelbueno.com',
  // Pega aquí tu ID de AdSense cuando te aprueben: 'ca-pub-0000000000000000'
  adsense: '',
};

export const SECCIONES = [
  { id: 'cartas',    nombre: 'Cartas',    resumen: 'Lo que se dice cuando ya no hay prisa' },
  { id: 'consejos',  nombre: 'Consejos',  resumen: 'Sin frases de taza, prometido' },
  { id: 'historias', nombre: 'Historias', resumen: 'Casos reales, nombres cambiados' },
  { id: 'senales',   nombre: 'Señales',   resumen: 'Lo que se nota antes de que duela' },
] as const;
