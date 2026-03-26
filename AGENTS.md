# Alt4ir Agency — Guía para agentes

Landing page para **Alt4ir**, agencia de IA, desarrollo de aplicaciones y automatización.

---

## Stack

| Capa        | Tecnología           | Versión |
|-------------|----------------------|---------|
| Framework   | Next.js (App Router) | 16.x    |
| UI          | React                | 19.x    |
| Estilos     | TailwindCSS          | 4.x     |
| Componentes | shadcn               | 4.x     |
| Primitivos  | radix-ui (monorepo)  | 1.x     |
| Animaciones | tw-animate-css       | —       |
| Iconos      | lucide-react         | —       |
| Tipografía  | Geist / Geist Mono   | —       |
| Lenguaje    | TypeScript           | 5.x     |

---

## Reglas críticas por tecnología

### TailwindCSS v4

TailwindCSS v4 es radicalmente distinto de v3. **No existe `tailwind.config.js`.**

- La configuración del tema vive en `app/globals.css` dentro del bloque `@theme inline { }`.
- Las utilidades se derivan de las CSS custom properties definidas en `:root` y `.dark`.
- Se importa así: `@import "tailwindcss"` — **no** `@tailwind base/components/utilities`.
- Para agregar tokens (colores, radios, fuentes), defínelos en `:root` y referéncialos en `@theme`.
- El modo oscuro usa `@custom-variant dark (&:is(.dark *))` — ya configurado.
- No crees `tailwind.config.js` — romperá la build.

### shadcn v4

shadcn v4 usa un modelo de paquete npm, **no** el modelo copy-paste de versiones anteriores.

- Paquete: `shadcn` (no `shadcn-ui`).
- Estilos base: `@import "shadcn/tailwind.css"` en `globals.css` — ya configurado.
- Componentes en `components/ui/`, importar como `@/components/ui/<nombre>`.
- Para agregar componentes: `npx shadcn add <componente>`. No copies archivos manualmente.
- Usa `radix-ui` (paquete monorepo unificado), **no** paquetes `@radix-ui/*` individuales.

### radix-ui v1 (monorepo unificado)

- Importa desde el paquete único: `import { Dialog, DialogContent } from "radix-ui"`.
- **No** uses `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, ni ningún sub-paquete.
- Consulta `node_modules/radix-ui/` para verificar exports disponibles.

### Next.js 16 App Router

- Todo el código vive en `app/`.
- Server Components por defecto — añade `"use client"` solo para interactividad real.
- Metadatos: `export const metadata: Metadata = { ... }` desde `layout.tsx` o `page.tsx`.
- API Routes: `app/api/<ruta>/route.ts` con exports `GET`, `POST`, etc.
- Verifica cualquier API de Next.js en `node_modules/next/dist/docs/` antes de usarla.

### React 19

- Hook `use()` para leer promesas y contextos.
- Formularios con `action={...}`, `useActionState`, `useFormStatus`.
- `useTransition` admite funciones async directamente.

---

## Estructura de archivos

```
app/
  layout.tsx          # RootLayout, metadatos globales, fuentes
  page.tsx            # Landing page principal
  globals.css         # TailwindCSS v4 + variables del tema + shadcn base

components/
  ui/                 # Componentes shadcn (generados por CLI, no editar manualmente)
  sections/           # Secciones de la landing (Hero, Services, CTA, etc.)

lib/
  utils.ts            # cn() y utilidades compartidas

public/               # Assets estáticos
```

---

## Convenciones de código

- TypeScript estricto — no uses `any`.
- `"use client"` solo cuando sea estrictamente necesario.
- Importaciones absolutas con `@/` (configurado en `tsconfig.json`).
- Clases CSS con `cn()` de `@/lib/utils` (combina `clsx` + `tailwind-merge`).
- Secciones de la landing en `components/sections/`, no en `components/ui/`.
- Sin CSS Modules ni styled-components — todo con TailwindCSS.
- Sin librerías de animación adicionales — usar `tw-animate-css` (ya incluido).

---

## Contexto del proyecto

**Alt4ir** es una agencia especializada en:
- Desarrollo de aplicaciones con IA
- Automatización de procesos de negocio
- Integración de agentes inteligentes

Audiencia objetivo: founders, CTOs y equipos de operaciones que buscan delegar desarrollo e IA.
Tono de la landing: técnico, moderno, confiable.

---

## Comandos útiles

```bash
npm run dev                    # Servidor de desarrollo (Turbopack)
npm run build                  # Build de producción
npm run lint                   # ESLint
npx shadcn add <componente>    # Agregar componente shadcn
```
