# Prompt — Añadir 4 paneles de métricas en CaseStudies

## Contexto del proyecto

Stack: **Next.js 16 App Router · React 19 · TailwindCSS 4 · shadcn v4 · TypeScript 5**

- Sin `tailwind.config.js` — tema en `app/globals.css`
- Importaciones absolutas con `@/`
- Sin librerías de animación extra — solo `tw-animate-css` (ya incluido)
- El componente `GlowCard` ya existe en `components/ui/glow-card.tsx`
- El archivo a modificar es `components/sections/CaseStudies.tsx` (ya creado)

---

## Qué hacer

**Solo modificar** `components/sections/CaseStudies.tsx`.  
No tocar ningún otro archivo.

Añadir un grid de **4 paneles de métricas** con `GlowCard` **justo después del título/subtítulo de la sección y justo antes del grid de los dos casos** (Taller automovilístico y Clínica dental).

---

## Diseño de los 4 paneles (replicar fielmente)

Referencia visual: 4 cards en fila horizontal (grid 4 col desktop, 2 col tablet, 1 col mobile).  
Cada card tiene fondo `bg-slate-900/80` con borde `border-slate-800`, bordes redondeados `rounded-2xl`, contenido **centrado** (icono + número + label).

**Estructura interna de cada card (de arriba a abajo, todo centrado):**
1. Icono de lucide-react — color con gradiente violeta-azul → usar `text-violet-400` como color base
2. Número/valor grande — tipografía bold, gradiente de texto de violeta a azul (`bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent`)
3. Label descriptivo — `text-sm text-slate-400 text-center`

**Datos exactos de los 4 paneles:**

| Icono (lucide-react) | Valor | Label |
|---|---|---|
| `ClockIcon` | `20h+` | Horas ahorradas por semana de media |
| `TrendingUpIcon` | `40%` | Mejora en eficiencia operativa |
| `FileTextIcon` | `1.000+` | Documentos procesados automáticamente |
| `SmileIcon` | `100%` | Clientes satisfechos |

---

## Código exacto a integrar en `CaseStudies.tsx`

```tsx
"use client"

import { GlowCard } from "@/components/ui/glow-card"
import { ClockIcon, TrendingUpIcon, FileTextIcon, SmileIcon } from "lucide-react"

const metrics = [
  {
    icon: ClockIcon,
    value: "20h+",
    label: "Horas ahorradas por semana de media",
  },
  {
    icon: TrendingUpIcon,
    value: "40%",
    label: "Mejora en eficiencia operativa",
  },
  {
    icon: FileTextIcon,
    value: "1.000+",
    label: "Documentos procesados automáticamente",
  },
  {
    icon: SmileIcon,
    value: "100%",
    label: "Clientes satisfechos",
  },
]

const cases = [
  // ... mantener el array cases exactamente igual que estaba
]

export default function CaseStudies() {
  return (
    <section className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">

        {/* Cabecera — mantener igual */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
            Resultados. Números que hablan por nosotros.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Casos reales de empresas que automatizaron con Alt4ir y transformaron
            su operación en semanas.
          </p>
        </div>

        {/* ── NUEVO: Grid de 4 métricas ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <GlowCard
                key={metric.value}
                glowColor="purple"
                className="p-8 flex flex-col items-center text-center gap-4 bg-slate-900/80 border border-slate-800"
              >
                <div className="size-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Icon className="size-6 text-violet-400" />
                </div>
                <span className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  {metric.value}
                </span>
                <span className="text-sm text-slate-400 leading-snug">{metric.label}</span>
              </GlowCard>
            )
          })}
        </div>
        {/* ── FIN métricas ── */}

        {/* Grid de casos — mantener igual que estaba */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <GlowCard
              key={c.sector}
              glowColor="purple"
              className="p-8 flex flex-col gap-6 bg-slate-900/80 border border-slate-800"
            >
              <span className="self-start inline-flex items-center rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                {c.sector}
              </span>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-red-400">Problema</span>
                  <p className="text-sm text-slate-300 leading-relaxed">{c.problema}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-blue-400">Solución</span>
                  <p className="text-sm text-slate-300 leading-relaxed">{c.solucion}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-blue-300">Resultado</span>
                  <p className="text-sm font-bold text-white leading-relaxed">{c.resultado}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  )
}
```

---

## Reglas importantes

- **No tocar** `app/page.tsx` — ya está configurado correctamente
- **No tocar** `components/ui/glow-card.tsx` — solo importarlo
- **No eliminar ni modificar** el array `cases` ni los cards de Taller/Clínica dental
- El único cambio es **añadir** el array `metrics` y el grid de 4 cards **entre el título y los casos**
- Los iconos `ClockIcon`, `TrendingUpIcon`, `FileTextIcon`, `SmileIcon` vienen de `lucide-react` — ya instalado

---

## Checklist antes de terminar

- [ ] Array `metrics` añadido con los 4 datos exactos
- [ ] Grid de 4 `GlowCard` renderizado entre cabecera y casos
- [ ] Iconos importados de `lucide-react`
- [ ] Gradiente de texto `from-violet-400 to-blue-400` aplicado a los valores
- [ ] Array `cases` y cards existentes sin modificar
- [ ] Responsive: 1 col mobile → 2 col tablet → 4 col desktop
- [ ] Sin TypeScript errors · sin `any`
- [ ] `npm run build` sin errores