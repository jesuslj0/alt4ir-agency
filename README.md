# Alt4ir Agency

Landing page de **Alt4ir**, agencia especializada en desarrollo de aplicaciones con IA, automatización de procesos de negocio e integración de agentes conversacionales inteligentes. Construida con Next.js 16, TailwindCSS 4 y shadcn.

---

## Stack

- **Next.js 16** — App Router, Server Components
- **React 19**
- **TailwindCSS 4** — configuración CSS-first, sin `tailwind.config.js`
- **shadcn 4** — componentes como paquete npm
- **TypeScript 5**
- **Geist** — tipografía

## Requisitos

- Node.js 20+
- npm 10+

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Comandos

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con Turbopack |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | Lint con ESLint |

## Agregar componentes UI

Este proyecto usa shadcn v4 (modelo de paquete). Para añadir un componente:

```bash
npx shadcn add <componente>
```

Los componentes se generan en `components/ui/`.

## Estructura del proyecto

```
app/
  layout.tsx        # Layout raíz, metadatos, fuentes
  page.tsx          # Landing page
  globals.css       # Tema global (TailwindCSS v4 + shadcn)

components/
  ui/               # Componentes shadcn (CLI)
  sections/         # Secciones de la landing (Hero, Services, CTA…)

lib/
  utils.ts          # Utilidades (cn, etc.)

public/             # Assets estáticos
```

## Deploy

El proyecto está listo para desplegarse en [Vercel](https://vercel.com). Conecta el repositorio y despliega con un clic.

Para otros proveedores, genera el build estático o de servidor con `npm run build`.

---

**Alt4ir** · Agencia de IA y Desarrollo · [alt4ir.com](https://alt4ir.com)
