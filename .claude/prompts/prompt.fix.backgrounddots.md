## Tarea: Reparar background de partículas y añadir transición entre secciones

### Contexto
La landing de Alt4ir usa un background de partículas dinámico (probablemente de 21st.dev / @tsparticles o similar). Actualmente SOLO se renderiza en la zona del LogoBar (parte inferior del viewport inicial). El hero queda completamente sin partículas. Necesito dos cosas:

### 1. Partículas visibles desde el hero (PRIORIDAD)

El componente de partículas debe cubrir TODO el viewport desde el inicio, especialmente el hero. Opciones de implementación (elige la más limpia):

**Opción A (preferida):** Mover el componente de partículas a `app/page.tsx` o `app/layout.tsx` como un `<div>` con `position: fixed`, `inset: 0`, `z-index: -1` (o z-0 con pointer-events-none), para que actúe como fondo GLOBAL de toda la página.

**Opción B:** Si el componente de partículas está dentro de una sección específica (como LogoBar), sacarlo de ahí y colocarlo como wrapper o hermano directo en `page.tsx`, con posición absoluta/fixed cubriendo el viewport completo.

Revisa dónde está montado actualmente el componente de partículas (busca imports de particles, dots, tsparticles, 21st, o cualquier componente `"use client"` con canvas/animación de puntos). Una vez localizado:

- Muévelo para que sea un fondo global con `fixed inset-0 -z-10 pointer-events-none`
- Asegúrate de que las partículas se ven detrás del hero, navbar y todas las secciones
- El fondo oscuro del hero (`dark:from-violet-950/20`) debe seguir visible pero las partículas deben verse a través/debajo
- No rompas el gradiente existente del hero — las partículas van DEBAJO de todo

### 2. Transición animada entre hero y siguiente sección

Al hacer scroll desde el hero hacia LogoBar/Stats, quiero una transición visual que "dé paso" a la siguiente sección. Implementación:

- Añade un separador visual entre Hero y LogoBar — puede ser un gradient fade, una línea con glow violeta, o un efecto de "cortina" sutil
- Usa CSS puro o tw-animate-css (ya instalado) — NO instales framer-motion, GSAP ni librerías adicionales de animación
- Opción recomendada: un `<div>` decorativo entre Hero y LogoBar con un gradiente de `transparent` → `background` → `transparent` con algo de blur o glow violeta, tipo separador elegante
- Si quieres algo más dinámico: usa `IntersectionObserver` en un componente `"use client"` pequeño que aplique una clase CSS de fade-in/slide-up cuando las secciones entren al viewport

### Reglas del proyecto (CRÍTICO — lee AGENTS.md)
- Next.js 16 App Router, React 19, TailwindCSS v4 (NO tailwind.config.js), shadcn v4
- NO instales librerías de animación nuevas — usa tw-animate-css o CSS nativo
- `"use client"` solo donde sea estrictamente necesario
- Clases con `cn()` de `@/lib/utils`
- TypeScript estricto, sin `any`
- Después de los cambios, ejecuta `npm run build` para verificar que no hay errores