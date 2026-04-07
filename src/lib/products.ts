export type Product = {
  slug: string;
  name: string;
  image: string;
  category: string;
  shortDescription: string; // Spanish
  highlights: string[]; // Can be English
  description: string; // Spanish
  specs: Record<string, string>; // Spanish
};

export const products: Product[] = [
  {
    slug: 'cq-18t',
    name: 'CQ-18T',
    category: 'Digital Mixer',
    image: '/images/products/CQ-18T.jpg',
    shortDescription: 'Mezcladora digital compacta con control inalámbrico y grabación multipista.',
    highlights: [
      '18 channels',
      'Built-in WiFi',
      'Multitrack recording',
      'Touchscreen control'
    ],
    description: 'Diseñada para ingenieros que necesitan rapidez y precisión, la CQ-18T ofrece un flujo de trabajo ágil con procesamiento potente y control inalámbrico. Es ideal tanto para sonido en vivo como para producción, brindando flexibilidad sin comprometer la calidad de audio.',
    specs: {
      'Canales': '18',
      'Entradas': '8 XLR + 8 combo',
      'Salidas': '6 auxiliares TRS + LR XLR',
      'Grabación': 'USB / SD / USB-B',
      'Control': 'Pantalla táctil + WiFi'
    }
  },
  {
    slug: 'cq-12t',
    name: 'CQ-12T',
    category: 'Digital Mixer',
    image: '/images/products/CQ-12T.jpg',
    shortDescription: 'Mezcladora compacta con control intuitivo y conectividad Bluetooth.',
    highlights: [
      '12 channels',
      'Bluetooth',
      'Touchscreen',
      'Portable design'
    ],
    description: 'Pensada para configuraciones más pequeñas, la CQ-12T ofrece una experiencia de mezcla clara e intuitiva. Es perfecta para ingenieros móviles, espacios reducidos y creadores de contenido que buscan control sin complicaciones.',
    specs: {
      'Canales': '12',
      'Entradas': '5 XLR + 5 combo',
      'Salidas': '6 auxiliares TRS',
      'Conectividad': 'Bluetooth',
      'Grabación': 'USB / SD'
    }
  },
  {
    slug: 'cve-15',
    name: 'CVE-15',
    category: 'Speaker',
    image: '/images/products/CVE15.jpg',
    shortDescription: 'Bocina de 15” con gran potencia y respuesta clara en todo el rango.',
    highlights: [
      '1000W power',
      '15” woofer',
      '128 dB SPL',
      'Bluetooth'
    ],
    description: 'Diseñada para ofrecer impacto y claridad, la CVE-15 combina graves firmes con agudos definidos. Es una solución versátil para eventos en vivo, DJs y sistemas de sonido profesionales.',
    specs: {
      'Potencia': '1000W',
      'Frecuencia': '45 Hz – 18 kHz',
      'SPL': '128 dB',
      'Conectividad': 'Bluetooth'
    }
  },
  {
    slug: 'cve-18s',
    name: 'CVE-18S',
    category: 'Subwoofer',
    image: '/images/products/CVE-18S.jpg',
    shortDescription: 'Subwoofer de 18” diseñado para graves profundos y contundentes.',
    highlights: [
      '18” woofer',
      'Deep bass (28 Hz)',
      '1000W power'
    ],
    description: 'Diseñado para bajas frecuencias de alto impacto, el CVE-18S entrega graves profundos que transforman el sonido en una experiencia física. Ideal para reforzar cualquier sistema profesional.',
    specs: {
      'Potencia': '1000W',
      'Frecuencia': 'desde 28 Hz',
      'Tipo': 'Subwoofer activo'
    }
  },
  {
    slug: 'shure-sm58',
    name: 'SHURE SM58',
    category: 'Microphone',
    image: '/images/products/shure-sm58.jpg',
    shortDescription: 'Micrófono vocal estándar de la industria.',
    highlights: [
      'Cardioid pattern',
      'Durable build',
      'Clear vocal response'
    ],
    description: 'Reconocido a nivel mundial, el SM58 es un estándar en presentaciones en vivo. Ofrece claridad vocal consistente, durabilidad y un rendimiento confiable en cualquier escenario.',
    specs: {
      'Patrón': 'Cardioide',
      'Frecuencia': '50 Hz – 15 kHz',
      'Construcción': 'Rejilla de acero'
    }
  },
  {
    slug: 'qsc-k12-2',
    name: 'QSC K12.2',
    category: 'Speaker',
    image: '/images/products/QSC-K12.2.jpg',
    shortDescription: 'Bocina profesional de 12” con alta potencia y definición.',
    highlights: [
      '2000W peak',
      '132 dB SPL',
      'Professional grade'
    ],
    description: 'Diseñada para entornos exigentes, la K12.2 ofrece gran claridad, potencia y margen dinámico. Es una opción confiable para profesionales que requieren rendimiento constante.',
    specs: {
      'Potencia': '2000W pico',
      'SPL': '132 dB',
      'Tamaño': '12”'
    }
  },
  {
    slug: 'es-503',
    name: 'ES-503',
    category: 'Column System',
    image: '/images/products/es503.jpg',
    shortDescription: 'Sistema de audio tipo columna, compacto y potente.',
    highlights: [
      '1000W peak',
      'Bluetooth',
      'Portable system'
    ],
    description: 'Un sistema completo diseñado para portabilidad y rendimiento. Ideal para eventos pequeños, presentaciones y música en vivo donde se requiere cobertura uniforme.',
    specs: {
      'Potencia': '1000W',
      'SPL': '121 dB',
      'LF': '12”',
      'HF': '8x3”'
    }
  },
  {
    slug: 'pga-drumkit7',
    name: 'PGA Drum Kit 7',
    category: 'Microphone Kit',
    image: '/images/products/PGA_drumkit7.jpg',
    shortDescription: 'Kit completo de micrófonos para batería.',
    highlights: [
      '7 microphones',
      'Includes cables',
      'Optimized for drums'
    ],
    description: 'Incluye todo lo necesario para capturar una batería completa con claridad y balance. Ideal tanto para uso en vivo como en estudio.',
    specs: {
      'Micrófonos': '7',
      'Incluye': 'cables y soportes',
      'Uso': 'batería completa'
    }
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}
