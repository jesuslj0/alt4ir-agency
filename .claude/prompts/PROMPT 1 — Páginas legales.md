Necesito crear las 3 páginas legales del sitio Alt4ir. Actualmente el footer las enlaza pero devuelven 404.

## Contexto del proyecto
Lee AGENTS.md para conocer las reglas del stack. Resumen rápido:
- Next.js 16 App Router, React 19, TailwindCSS v4 (NO tailwind.config.js), shadcn v4, TypeScript estricto
- Importaciones absolutas con @/
- NO usar @radix-ui/* individuales, usar "radix-ui" monorepo
- NO crear tailwind.config.js
- Tema y colores definidos en app/globals.css con CSS custom properties
- Acento principal: violet-600 (light) / violet-400 (dark)

## Qué crear

### 1. Layout compartido para legal: `app/legal/layout.tsx`
- Server Component (sin "use client")
- Contenedor: max-w-3xl mx-auto px-4 py-20 md:py-28
- Renderiza {children} dentro de una estructura limpia con tipografía tipo "prose":
  - Headings con text-foreground font-bold
  - Párrafos con text-muted-foreground leading-relaxed
  - Listas con markers y spacing coherente
- Incluir un enlace "← Volver al inicio" arriba que lleve a "/" usando Link de next/link
- Importar Navbar y Footer desde @/components/layout/ y renderizarlos (Navbar arriba, Footer abajo)

### 2. Tres páginas con sus metadatos:

**`app/legal/privacidad/page.tsx`**
- export const metadata con title "Política de Privacidad — Alt4ir AI Solutions" y description enfocada en RGPD
- Contenido real (no lorem ipsum) de política de privacidad para una agencia de IA en España:
  - Responsable del tratamiento: Alt4ir AI Solutions, Albacete, España
  - Datos que se recogen (formulario de contacto: nombre, email, teléfono, mensaje)
  - Finalidad del tratamiento
  - Base legal (consentimiento + interés legítimo)
  - Plazo de conservación
  - Derechos ARCO-POL (acceso, rectificación, cancelación, oposición, portabilidad, olvido, limitación)
  - Información sobre cookies (enlace a /legal/cookies)
  - Contacto para ejercer derechos: privacidad@alt4ir.com

**`app/legal/terminos/page.tsx`**
- export const metadata con title "Términos y Condiciones — Alt4ir AI Solutions"
- Contenido real de términos para una agencia que ofrece servicios de IA, automatización y desarrollo:
  - Identificación de la empresa
  - Objeto de los servicios
  - Condiciones de contratación
  - Propiedad intelectual
  - Limitación de responsabilidad
  - Legislación aplicable (España)
  - Fuero: juzgados de Albacete

**`app/legal/cookies/page.tsx`**
- export const metadata con title "Política de Cookies — Alt4ir AI Solutions"
- Contenido real:
  - Qué son las cookies
  - Tipos utilizados (técnicas, analíticas)
  - Cómo desactivarlas en cada navegador
  - Cookies de terceros (si usáis analytics)
  - Actualización de la política

### 3. Actualizar el footer: `components/layout/Footer.tsx`
- Cambiar los hrefs del bloque "Legal" para que apunten a las rutas reales:
  - { href: "/legal/privacidad", label: "Privacidad" }
  - { href: "/legal/terminos", label: "Términos" }
  - { href: "/legal/cookies", label: "Cookies" }

## Estilo visual
- Mismo look & feel que el resto del sitio: fondo bg-background, texto text-foreground/text-muted-foreground
- Headings h1 con text-3xl md:text-4xl font-bold mb-6
- Headings h2 con text-xl md:text-2xl font-semibold mt-12 mb-4
- Párrafos con text-muted-foreground leading-relaxed mb-4
- Listas con list-disc pl-6 space-y-2 text-muted-foreground
- Fecha de última actualización al final de cada página

## Calidad
- Cero errores TypeScript
- Ejecuta npm run build al terminar y corrige cualquier error
- No uses "any"
- Las páginas deben ser Server Components (sin "use client")