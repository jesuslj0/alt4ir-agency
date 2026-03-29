Necesito crear la sección de blog de Alt4ir con estructura optimizada para SEO, enfocada en posicionar "Alt4ir" como marca y capturar búsquedas de IA y automatización en Albacete.

## Contexto del proyecto
Lee AGENTS.md. Stack: Next.js 16 App Router, React 19, TailwindCSS v4 (sin tailwind.config.js), shadcn v4, TypeScript estricto. Colores: violet-600/400. Iconos: lucide-react.

## Qué crear

### 1. Datos del blog: `lib/blog.ts`
Crear un archivo con los datos de los posts (sin CMS por ahora, hardcoded):
```typescript
export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string // formato ISO "2026-03-29"
  readingTime: string // "5 min de lectura"
  tags: string[]
  content: string // contenido en texto plano o HTML string
}

export const blogPosts: BlogPost[] = [
  // se rellenará con el primer artículo
]
```

Incluir una función helper:
```typescript
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
```

### 2. Página listado: `app/blog/page.tsx`

**Metadatos**:
- title: "Blog — Alt4ir | IA y Automatización en Albacete"
- description: "Artículos sobre inteligencia artificial, automatización de procesos y transformación digital para empresas en Albacete y Castilla-La Mancha."

**Layout**:
- Importar Navbar y Footer
- Hero del blog: heading h1 "Blog de Alt4ir", subtítulo sobre IA y automatización en la región
- Grid de cards de artículos (1 col mobile, 2 cols md, 3 cols lg)
- Cada card: título (Link al post), descripción truncada, fecha formateada en español, tags como badges, "Leer más →"
- Cards con componente Card de shadcn, hover:shadow-lg transition-shadow
- Si no hay posts, mostrar un mensaje "Próximamente publicaremos contenido aquí."

### 3. Página de artículo dinámico: `app/blog/[slug]/page.tsx`

**Metadatos dinámicos con generateMetadata**:
```typescript
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Artículo no encontrado" }
  return {
    title: `${post.title} — Alt4ir Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "es_ES",
      publishedTime: post.date,
    }
  }
}
```

**generateStaticParams** para pre-renderizar:
```typescript
export function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}
```

**Layout del artículo**:
- Navbar + Footer
- Contenedor: max-w-3xl mx-auto px-4 py-20 md:py-28
- Breadcrumb arriba: Blog > Título del artículo (usar Links)
- Heading h1 con el título
- Meta info: fecha formateada, reading time, tags como badges
- Separador (Separator de shadcn)
- Contenido del artículo renderizado (dangerouslySetInnerHTML con el campo content)
- CTA al final: banner "¿Quieres automatizar tu negocio?" con Button hacia /#contacto
- Si el slug no existe: notFound() de next/navigation

**Schema Article JSON-LD**:
- Crear e inyectar schema @type: BlogPosting con headline, datePublished, author (Alt4ir), description

### 4. Primer artículo (incluir en lib/blog.ts)

**Slug**: "automatizacion-ia-empresas-albacete"
**Title**: "Cómo la automatización con IA puede transformar tu empresa en Albacete"
**Description**: "Descubre cómo las pymes y empresas de Albacete pueden aprovechar la inteligencia artificial para automatizar procesos, reducir costes y escalar operaciones."
**Tags**: ["IA", "Automatización", "Albacete", "Pymes"]
**Reading time**: "6 min de lectura"
**Date**: "2026-03-29"

**Contenido del artículo** (en HTML string dentro de content):
Escribe un artículo real de ~800 palabras estructurado así:
- Introducción: el contexto de la IA para empresas en Albacete y Castilla-La Mancha
- H2: "¿Qué es la automatización con IA?" — explicación accesible
- H2: "Beneficios para empresas en Albacete" — 4-5 beneficios concretos (reducción de costes, eficiencia, escalabilidad, ventaja competitiva, atención al cliente)
- H2: "Casos de uso reales" — 3 ejemplos de automatización aplicables a pymes locales (atención al cliente con chatbot, automatización de facturación, análisis de datos de ventas)
- H2: "¿Por qué elegir Alt4ir?" — párrafo de cierre mencionando cercanía, expertise local, conocimiento del tejido empresarial de la región
- CTA final en texto: invitación a contactar

El contenido HTML del artículo debe usar estas clases para coherencia visual:
- h2: class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground"
- p: class="text-muted-foreground leading-relaxed mb-4"
- ul/ol: class="list-disc pl-6 space-y-2 text-muted-foreground mb-4"
- strong: class="text-foreground font-medium"

### 5. Verificar que Navbar y Footer ya apuntan a /blog
- El footer en la sección "Empresa" ya debe tener { href: "/blog", label: "Blog" } (hecho en prompt 2)
- El Navbar dropdown "+ Info" ya debe incluir Blog (hecho en prompt 2)
- Si no están, añádelos

## Calidad
- Cero errores TypeScript
- npm run build limpio
- No uses "any"
- generateStaticParams implementado correctamente
- En Next.js 16, params en page.tsx es una Promise — usar await params
- Server Components para todo excepto lo que necesite interactividad