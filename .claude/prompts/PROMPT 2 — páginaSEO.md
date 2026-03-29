Necesito crear la página /sobre-nosotros para Alt4ir con un fuerte enfoque en SEO local para Albacete y Castilla-La Mancha.

## Contexto del proyecto
Lee AGENTS.md para las reglas del stack. Resumen:
- Next.js 16 App Router, React 19, TailwindCSS v4 (sin tailwind.config.js), shadcn v4, TypeScript estricto
- Colores: violet-600 light / violet-400 dark. Tema en globals.css con CSS custom properties
- Iconos: lucide-react. Componentes UI: shadcn (npx shadcn add <componente>)
- Layout existente: app/layout.tsx con fuentes Geist
- Importaciones absolutas @/

## Qué crear

### 1. `app/sobre-nosotros/page.tsx`

**Metadatos SEO (export const metadata)**:
```typescript
export const metadata: Metadata = {
  title: "Sobre Nosotros — Alt4ir | Agencia de IA en Albacete",
  description: "Alt4ir es una agencia de inteligencia artificial y automatización en Albacete, Castilla-La Mancha. Desarrollamos aplicaciones con IA, automatizamos procesos y creamos agentes inteligentes para empresas.",
  keywords: ["agencia IA Albacete", "automatización Albacete", "inteligencia artificial Castilla-La Mancha", "desarrollo IA", "Alt4ir", "agentes inteligentes Albacete"],
  openGraph: {
    title: "Sobre Nosotros — Alt4ir | Agencia de IA en Albacete",
    description: "Agencia de inteligencia artificial y automatización en Albacete. Desarrollo de apps con IA, automatización de procesos y agentes inteligentes.",
    type: "website",
    locale: "es_ES",
  },
}
```

**Estructura de secciones dentro de la página**:

**Sección 1 — Hero / Introducción**
- Heading h1: "La agencia de IA que impulsa negocios en Albacete y Castilla-La Mancha"
- Subtítulo con texto descriptivo que mencione: Alt4ir, Albacete, inteligencia artificial, automatización, empresas locales
- Usar max-w-4xl mx-auto text-center para el hero

**Sección 2 — Nuestra misión**
- Heading h2: "Nuestra misión"
- 2-3 párrafos explicando qué hace Alt4ir, mencionando naturalmente:
  - "servicios de IA en Albacete"
  - "automatización de procesos para pymes en Castilla-La Mancha"
  - "agencia de inteligencia artificial"
- Layout: texto a un lado, un icono decorativo o gráfico abstracto al otro (usa lucide-react: Brain, Cpu, Workflow, Zap)

**Sección 3 — Qué nos diferencia**
- Grid de 3 cards (shadcn Card) con:
  1. "Especialización en IA" — icono Brain — texto sobre expertise en IA aplicada
  2. "Enfoque local" — icono MapPin — texto mencionando Albacete y empresas de la región
  3. "Resultados medibles" — icono TrendingUp — texto sobre ROI y métricas
- Cards con border border-border bg-card hover:shadow-lg transition-shadow

**Sección 4 — Nuestro equipo**
- Heading h2: "El equipo detrás de Alt4ir"
- Grid responsive de miembros del equipo (2 cols en md, 1 en mobile)
- Cada miembro: avatar placeholder (div circular con iniciales sobre bg-violet-600/10), nombre, rol, breve bio
- Equipo placeholder (ajustar después):
  - "Fundador & CEO" — especializado en IA y desarrollo de producto
  - "Lead Developer" — experto en automatización y agentes inteligentes
- Esto es placeholder, pero que quede bien maquetado para sustituir datos reales luego

**Sección 5 — Dónde estamos**
- Heading h2: "Con base en Albacete, impacto global"
- Mencionar: dirección genérica en Albacete (Castilla-La Mancha, España), email contacto@alt4ir.com
- Incluir un CTA: Button de shadcn con "Agendar llamada" que enlace a /#contacto
- Icono MapPin junto a la dirección

### 2. Schema JSON-LD para LocalBusiness

Crear un componente `components/seo/LocalBusinessSchema.tsx` (Server Component):
```typescript
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Alt4ir AI Solutions",
    "description": "Agencia de inteligencia artificial y automatización en Albacete",
    "url": "https://alt4ir.com",
    "telephone": "+34 XXX XXX XXX",
    "email": "contacto@alt4ir.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Albacete",
      "addressRegion": "Castilla-La Mancha",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.9942,
      "longitude": -1.8585
    },
    "areaServed": [
      { "@type": "City", "name": "Albacete" },
      { "@type": "State", "name": "Castilla-La Mancha" }
    ],
    "serviceType": ["Inteligencia Artificial", "Automatización de procesos", "Desarrollo de aplicaciones con IA", "Agentes inteligentes"],
    "sameAs": []
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```
- Importar y renderizar este componente dentro de `app/sobre-nosotros/page.tsx` al principio del return

### 3. Actualizar `components/layout/Footer.tsx`
- Cambiar los hrefs del bloque "Empresa":
  - { href: "/sobre-nosotros", label: "Sobre nosotros" }
  - { href: "/sobre-nosotros#equipo", label: "Equipo" }
  - Eliminar "Trabaja con nosotros" si no hay página para ello, o dejarlo apuntando a "/sobre-nosotros" temporalmente
  - { href: "/blog", label: "Blog" } — dejar el href aunque la página no exista aún (se creará en prompt 3)

### 4. Actualizar `components/layout/Navbar.tsx`
Añadir un menú desplegable "+ Info" en el navbar (tanto desktop como mobile) para no sobrecargar la barra:

**Desktop**: Añadir después de los navLinks actuales un DropdownMenu de shadcn (npx shadcn add dropdown-menu si no existe):

Info ▾
├── Sobre nosotros → /sobre-nosotros
├── Blog → /blog
└── Legal → /legal/privacidad

- Ejecuta `npx shadcn add dropdown-menu` antes de usarlo
- Importar DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger desde @/components/ui/dropdown-menu
- El trigger debe ser un botón con estilo similar a los otros nav links: text-sm text-muted-foreground hover:text-foreground
- Incluir un ChevronDown icon de lucide-react de 14px junto al texto
- Los items del dropdown deben usar Link de next/link

**Mobile (Sheet)**: Dentro del Sheet existente, añadir una sección separada con un label "Más" y los mismos links listados verticalmente, con la misma estética que los links actuales del mobile menu.

## Estilo visual
- Coherente con la landing: max-w-6xl mx-auto px-4, secciones con py-20 md:py-28
- Headings h1: text-4xl md:text-5xl font-bold tracking-tight
- Headings h2: text-2xl md:text-3xl font-bold tracking-tight mb-6
- Acento: violet-600/violet-400 para elementos destacados
- Cards: usa el componente Card de shadcn
- Responsive mobile-first
- Dark mode support con dark: variants

## Calidad
- Cero errores TypeScript
- npm run build limpio al final
- No uses "any"
- "use client" SOLO en el Navbar (que ya lo tiene) y en componentes que necesiten interactividad real