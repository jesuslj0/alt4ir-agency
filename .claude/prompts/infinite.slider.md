# Prompt — Sustituir LogoBar por slider infinito de clientes

## Contexto del proyecto

Stack: **Next.js 16 App Router · React 19 · TailwindCSS 4 · shadcn v4 · TypeScript 5**

- Sin `tailwind.config.js` — tema en `app/globals.css`
- Importaciones absolutas con `@/`
- `framer-motion` ya está instalado (usado en PulseBeams)
- Convención: `"use client"` solo cuando sea estrictamente necesario

---

## Paso 0 — Instalar dependencia nueva

```bash
npm install react-use-measure
```

---

## Paso 1 — Crear `components/ui/infinite-slider.tsx`

Crear el archivo con el siguiente código exacto:

```tsx
'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls: ReturnType<typeof animate> | undefined;
    const size = direction === 'horizontal' ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return () => controls?.stop();
  }, [key, translation, currentDuration, width, height, gap, isTransitioning, direction, reverse]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className='flex w-max'
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
```

---

## Paso 2 — Reemplazar `components/sections/LogoBar.tsx`

Eliminar el contenido actual de `LogoBar.tsx` y reemplazarlo con el siguiente código.

**Importante:** los clientes son negocios locales sin logos SVG públicos, por lo que se usan **pills de texto estilizados** en lugar de imágenes — aspecto más limpio y profesional para este tipo de clientes.

```tsx
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const clients = [
  { name: "Talleres Collado", sector: "Automoción" },
  { name: "Clínicas Dentales", sector: "Salud" },
  { name: "Clínicas de Fisioterapia", sector: "Salud" },
  { name: "Empresas Deportivas", sector: "Deporte" },
  { name: "Peluquerías", sector: "Belleza" },
  { name: "Talleres Collado", sector: "Automoción" },
  { name: "Clínicas Dentales", sector: "Salud" },
  { name: "Clínicas de Fisioterapia", sector: "Salud" },
  { name: "Empresas Deportivas", sector: "Deporte" },
  { name: "Peluquerías", sector: "Belleza" },
];

export default function LogoBar() {
  return (
    <section className="py-12 border-y border-border/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <p className="text-center text-sm text-muted-foreground tracking-wide uppercase">
          Sectores que confían en nosotros
        </p>
      </div>

      {/* Máscara de fade en los bordes */}
      <div className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <InfiniteSlider gap={24} duration={35} durationOnHover={80} reverse={false}>
          {clients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-5 py-2.5 whitespace-nowrap select-none"
            >
              <span className="text-sm font-semibold text-foreground/80">
                {client.name}
              </span>
              <span className="text-xs text-muted-foreground/60">
                · {client.sector}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
```

---

## Paso 3 — `app/page.tsx` no necesita cambios

El import `LogoBar` y su posición en el JSX se mantienen igual — solo cambia el contenido del archivo `LogoBar.tsx`.

---

## Reglas importantes

- **No tocar** `app/page.tsx`
- **No instalar** ninguna dependencia adicional salvo `react-use-measure`
- El componente `InfiniteSlider` va en `components/ui/` (dependencia reutilizable)
- El componente `LogoBar` va en `components/sections/` (sección de la landing)
- `framer-motion` ya está instalado — no reinstalar

---

## Checklist antes de terminar

- [ ] `react-use-measure` instalado
- [ ] `components/ui/infinite-slider.tsx` creado con el código exacto
- [ ] `components/sections/LogoBar.tsx` reemplazado completamente
- [ ] Slider visible y animado bajo el Hero
- [ ] Fade en bordes izquierdo y derecho funcionando
- [ ] Al hacer hover el slider ralentiza (durationOnHover)
- [ ] Sin TypeScript errors · sin `any`
- [ ] `npm run build` sin errores