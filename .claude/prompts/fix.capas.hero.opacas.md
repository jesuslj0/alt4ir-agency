## Tarea: Unificar la intensidad de las partículas en toda la página y eliminar el efecto de "capas" inconsistente

### El problema actual
Las partículas del background se ven con diferente intensidad según la zona:
- En el HERO se ven muy tenues/apagadas porque hay capas de gradiente encima que las tapan
- Cuando scrolleas y sales de la zona del hero, las partículas se ven más intensas por un momento
- Luego desaparecen porque el componente de partículas no cubre toda la página o las secciones siguientes tienen fondos opacos

Esto genera una sensación inconsistente y extraña.

### Solución en 3 pasos:

#### Paso 1: Hacer las capas del Hero transparentes a las partículas

En `components/sections/Hero.tsx`, el hero tiene dos divs con `-z-10` que bloquean las partículas:
```tsx
{/* ACTUAL — estas capas tapan las partículas */}
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-50/60 via-background to-background dark:from-violet-950/20 dark:via-background" />
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[400px] rounded-full bg-violet-400/10 dark:bg-violet-600/10 blur-3xl" />
```

Cámbialas para que NO cubran las partículas:

1. El gradiente del hero: elimina `via-background to-background` y `dark:via-background` — estos crean una capa opaca que mata las partículas. Sustitúyelo por un gradiente que termine en `transparent`:
   - Light: `from-violet-50/30 to-transparent`
   - Dark: `from-violet-950/10 to-transparent`
   
2. El blob de blur: reduce su opacidad o elimínalo. Si lo mantienes, usa `bg-violet-600/5` en dark (la mitad de lo actual).

3. IMPORTANTE: El z-index del gradiente del hero debe estar POR ENCIMA de las partículas pero mantener transparencia. Las partículas deben estar en `-z-20` o inferior, y el gradiente del hero en `-z-10`. Verifica que el componente de partículas tiene un z-index menor que el gradiente.

#### Paso 2: Partículas cubriendo TODA la página con intensidad uniforme

Verifica que el componente de partículas (busca el archivo — puede ser un canvas, particles, dots-background, o similar de 21st.dev) está posicionado con:
- `position: fixed` (NO absolute) — para que cubra todo el viewport durante el scroll
- `inset: 0`
- `z-index` más bajo que todo lo demás (usa `-z-30` o `z-[-1]`)
- `pointer-events: none`

Si actualmente usa `position: absolute`, cámbialo a `fixed`.

#### Paso 3: Las secciones NO deben tener fondos opacos que tapen las partículas

Revisa estas secciones y asegúrate de que sus fondos permitan ver las partículas a través:
- `LogoBar.tsx`: Si tiene `border-y border-border/50`, está bien, pero si tiene un `bg-*` opaco, hazlo semi-transparente o elimínalo
- `Stats.tsx`: Mismo tratamiento
- `Features.tsx`, `Testimonials.tsx` (tiene `bg-muted/30` — cámbialo a `bg-muted/10` o `bg-transparent`)
- Cualquier sección con `bg-card`, `bg-muted`, `bg-background` opacos: hazlos semi-transparentes (`bg-card/80`, `bg-muted/15`, etc.) para que las partículas se vean sutilmente detrás

El objetivo es que las partículas se vean con intensidad UNIFORME y sutil en toda la página, sin saltos de visibilidad. No hace falta que se vean muy intensas — solo consistentes.

### Reglas del proyecto (CRÍTICO)
- Lee AGENTS.md antes de empezar
- Next.js 16, TailwindCSS v4 (sin tailwind.config.js), shadcn v4
- NO instales librerías nuevas
- `"use client"` solo donde sea necesario
- Ejecuta `npm run build` al terminar para verificar