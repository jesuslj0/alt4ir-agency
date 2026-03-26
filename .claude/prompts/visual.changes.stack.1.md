# Prompt — Integración de 3 componentes visuales en Alt4ir Landing

## Contexto del proyecto

Stack: **Next.js 16 App Router · React 19 · TailwindCSS 4 · shadcn v4 · TypeScript 5**

- TailwindCSS v4: sin `tailwind.config.js`, tema en `app/globals.css` dentro de `@theme inline {}`
- shadcn v4: paquete npm, componentes en `components/ui/`
- Animaciones actuales: `tw-animate-css` (ya instalado). **No instalar** librerías extra salvo las indicadas
- Importaciones absolutas con `@/`
- `"use client"` solo cuando sea estrictamente necesario

---

## COMPONENTE 2 — GlowCard (hover spotlight) para Features, Pricing y Testimonials

**Secciones afectadas:**
- `components/sections/Features.tsx` — cards de "Todo lo que necesitas para automatizar"
- `components/sections/Pricing.tsx` — cards de "Planes que se adaptan a tu negocio"
- `components/sections/Testimonials.tsx` — cards de "Lo que dicen nuestros clientes"

**Qué hace:** efecto spotlight/glow que sigue el cursor del ratón sobre cada card, con borde luminoso reactivo al movimiento.

### Instrucciones

1. Instalar dependencia (solo si no está ya):
```bash
npm install class-variance-authority
```
> `cva` y `cn` ya están disponibles en el proyecto — verificar antes de instalar.

2. Crear `components/ui/glow-card.tsx`:

```tsx
"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
}

const glowColorMap = {
  blue:   { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green:  { base: 120, spread: 200 },
  red:    { base: 0,   spread: 200 },
  orange: { base: 30,  spread: 200 },
};

const beforeAfterStyles = `
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }
  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
    );
    filter: brightness(2);
  }
  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
    );
  }
  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: calc(var(--radius) * 1px);
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }
  [data-glow] > [data-glow]::before {
    inset: -10px;
    border-width: 10px;
  }
`;

export function GlowCard({ children, className, glowColor = "purple" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { base, spread } = glowColorMap[glowColor];

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      if (cardRef.current) {
        cardRef.current.style.setProperty("--x", e.clientX.toFixed(2));
        cardRef.current.style.setProperty("--xp", (e.clientX / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty("--y", e.clientY.toFixed(2));
        cardRef.current.style.setProperty("--yp", (e.clientY / window.innerHeight).toFixed(2));
      }
    };
    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        className={cn("relative rounded-2xl backdrop-blur-[5px]", className)}
        style={
          {
            "--base": base,
            "--spread": spread,
            "--radius": "14",
            "--border": "2",
            "--backdrop": "hsl(0 0% 60% / 0.12)",
            "--backup-border": "var(--backdrop)",
            "--size": "200",
            "--outer": "1",
            "--border-size": "calc(var(--border, 2) * 1px)",
            "--spotlight-size": "calc(var(--size, 150) * 1px)",
            "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
            backgroundImage: `radial-gradient(
              var(--spotlight-size) var(--spotlight-size) at
              calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
              hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
            )`,
            backgroundColor: "var(--backdrop, transparent)",
            backgroundSize: "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
            backgroundPosition: "50% 50%",
            backgroundAttachment: "fixed",
            border: "var(--border-size) solid var(--backup-border)",
            touchAction: "none",
          } as React.CSSProperties
        }
      >
        <div data-glow />
        {children}
      </div>
    </>
  );
}
```

3. **En `components/sections/Features.tsx`**, reemplazar el `<Card>` de shadcn por `<GlowCard>`:

```tsx
import { GlowCard } from "@/components/ui/glow-card";

// Reemplazar cada <Card key={feature.title} className="hover:shadow-md transition-shadow">
// con:
<GlowCard key={feature.title} glowColor="purple" className="p-6 flex flex-col gap-4">
  <div className="size-10 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center">
    <Icon className="size-5 text-violet-600 dark:text-violet-400" />
  </div>
  <div>
    <h3 className="font-semibold mb-1">{feature.title}</h3>
    <p className="text-sm text-muted-foreground">{feature.description}</p>
  </div>
</GlowCard>
```

4. **En `components/sections/Pricing.tsx`**, envolver cada `<Card>` existente con `<GlowCard>` manteniendo el contenido interno intacto. Ejemplo del card destacado:

```tsx
import { GlowCard } from "@/components/ui/glow-card";

// Envolver el Card existente así:
<GlowCard glowColor="purple" className={plan.highlighted ? "ring-2 ring-violet-500" : ""}>
  {/* Mantener aquí todo el contenido actual del <Card> */}
</GlowCard>
```

5. **En `components/sections/Testimonials.tsx`**, aplicar el mismo patrón que en Features: reemplazar cada card de testimonio por `<GlowCard glowColor="purple">`.

---

## COMPONENTE 3 — PulseBeams en los botones "Agendar llamada"

**Ubicación:** `components/sections/CTABanner.tsx` — botón principal de conversión

**Qué hace:** líneas de energía animadas (beams) que irradian desde/hacia el botón CTA, simulando conexiones de datos o señales de IA. El botón queda como hijo central del componente.

### Instrucciones

1. Instalar dependencia requerida:
```bash
npm install framer-motion
```

2. Crear `components/ui/pulse-beams.tsx`:

```tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BeamPath {
  path: string;
  gradientConfig: {
    initial: { x1: string; x2: string; y1: string; y2: string };
    animate: {
      x1: string | string[];
      x2: string | string[];
      y1: string | string[];
      y2: string | string[];
    };
    transition?: {
      duration?: number;
      repeat?: number;
      repeatType?: string;
      ease?: string;
      repeatDelay?: number;
      delay?: number;
    };
  };
  connectionPoints?: Array<{ cx: number; cy: number; r: number }>;
}

interface PulseBeamsProps {
  children?: React.ReactNode;
  className?: string;
  background?: React.ReactNode;
  beams: BeamPath[];
  width?: number;
  height?: number;
  baseColor?: string;
  accentColor?: string;
  gradientColors?: { start: string; middle: string; end: string };
}

export const PulseBeams = ({
  children,
  className,
  background,
  beams,
  width = 858,
  height = 434,
  baseColor = "var(--slate-800)",
  accentColor = "var(--slate-600)",
  gradientColors,
}: PulseBeamsProps) => {
  return (
    <div
      className={cn(
        "w-full relative flex items-center justify-center antialiased overflow-hidden",
        className,
      )}
    >
      {background}
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center">
        <SVGs
          beams={beams}
          width={width}
          height={height}
          baseColor={baseColor}
          accentColor={accentColor}
          gradientColors={gradientColors}
        />
      </div>
    </div>
  );
};

const SVGs = ({ beams, width, height, baseColor, accentColor, gradientColors }: any) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex flex-shrink-0"
  >
    {beams.map((beam: BeamPath, index: number) => (
      <React.Fragment key={index}>
        <path d={beam.path} stroke={baseColor} strokeWidth="1" />
        <path d={beam.path} stroke={`url(#grad${index})`} strokeWidth="2" strokeLinecap="round" />
        {beam.connectionPoints?.map((point, pointIndex) => (
          <circle
            key={`${index}-${pointIndex}`}
            cx={point.cx}
            cy={point.cy}
            r={point.r}
            fill={baseColor}
            stroke={accentColor}
          />
        ))}
      </React.Fragment>
    ))}
    <defs>
      {beams.map((beam: BeamPath, index: number) => (
        <motion.linearGradient
          key={index}
          id={`grad${index}`}
          gradientUnits="userSpaceOnUse"
          initial={beam.gradientConfig.initial}
          animate={beam.gradientConfig.animate}
          transition={beam.gradientConfig.transition as any}
        >
          <GradientColors colors={gradientColors} />
        </motion.linearGradient>
      ))}
    </defs>
  </svg>
);

const GradientColors = ({
  colors = { start: "#7C3AED", middle: "#6D28D9", end: "#8B5CF6" },
}: {
  colors?: { start: string; middle: string; end: string };
}) => (
  <>
    <stop offset="0%"   stopColor={colors.start}  stopOpacity="0" />
    <stop offset="20%"  stopColor={colors.start}  stopOpacity="1" />
    <stop offset="50%"  stopColor={colors.middle} stopOpacity="1" />
    <stop offset="100%" stopColor={colors.end}    stopOpacity="0" />
  </>
);
```

3. **En `components/sections/CTABanner.tsx`**, envolver el botón CTA con `PulseBeams`:

```tsx
import { PulseBeams } from "@/components/ui/pulse-beams";

const beams = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: { x1: ["0%","0%","200%"], x2: ["0%","0%","180%"], y1: ["80%","0%","0%"], y2: ["100%","20%","20%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 0 },
    },
    connectionPoints: [{ cx: 6.5, cy: 398.5, r: 6 }, { cx: 269, cy: 220.5, r: 6 }],
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: { x1: ["20%","100%","100%"], x2: ["0%","90%","90%"], y1: ["80%","80%","-20%"], y2: ["100%","100%","0%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 0.5 },
    },
    connectionPoints: [{ cx: 851, cy: 34, r: 6.5 }, { cx: 568, cy: 200, r: 6 }],
  },
  {
    path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
    gradientConfig: {
      initial: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" },
      animate: { x1: ["40%","0%","0%"], x2: ["10%","0%","0%"], y1: ["0%","0%","180%"], y2: ["20%","20%","200%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 1 },
    },
    connectionPoints: [{ cx: 420.5, cy: 6.5, r: 6 }, { cx: 380, cy: 168, r: 6 }],
  },
];

const gradientColors = { start: "#7C3AED", middle: "#6D28D9", end: "#A78BFA" };

// Dentro del JSX de CTABanner, reemplazar el bloque del <Button> con:
<PulseBeams
  beams={beams}
  gradientColors={gradientColors}
  width={858}
  height={200}
  baseColor="rgba(124,58,237,0.3)"
  accentColor="rgba(167,139,250,0.4)"
  className="py-4"
>
  <Button
    type="submit"
    className="bg-white text-violet-700 hover:bg-violet-50 gap-2 shrink-0 h-10 px-5 font-semibold"
  >
    Agendar llamada
    <ArrowRightIcon className="size-4" />
  </Button>
</PulseBeams>
```

---

## Resumen de archivos a crear/modificar

| Acción   | Archivo                                  |
|----------|------------------------------------------|
| Crear    | `components/ui/banner.tsx`               |
| Crear    | `components/ui/glow-card.tsx`            |
| Crear    | `components/ui/pulse-beams.tsx`          |
| Modificar | `app/page.tsx` — añadir `<Banner>`      |
| Modificar | `components/sections/Features.tsx`      |
| Modificar | `components/sections/Pricing.tsx`       |
| Modificar | `components/sections/Testimonials.tsx`  |
| Modificar | `components/sections/CTABanner.tsx`     |

## Dependencia a instalar

```bash
npm install framer-motion
```

> `class-variance-authority`, `lucide-react`, `@radix-ui/react-slot` y `cn` ya están disponibles en el proyecto.