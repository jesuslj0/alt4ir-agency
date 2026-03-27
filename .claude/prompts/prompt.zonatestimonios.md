# Prompt — Reemplazar sección Testimonials por CaseStudies (casos reales)

## Contexto del proyecto

Stack: **Next.js 16 App Router · React 19 · TailwindCSS 4 · shadcn v4 · TypeScript 5**

- Sin `tailwind.config.js` — tema en `app/globals.css`
- Importaciones absolutas con `@/`
- Sin librerías de animación extra — solo `tw-animate-css` (ya incluido)
- Accent: `violet-600` / `violet-400 dark`
- El componente `GlowCard` ya existe en `components/ui/glow-card.tsx` (creado en sesión anterior)

---

## Qué hacer

1. **Eliminar** `components/sections/Testimonials.tsx` — desaparece completamente. `CaseStudies` es su único reemplazo y la **única sección de prueba social/casos** de toda la landing. No debe quedar ninguna otra sección con título parecido a "Lo que dicen nuestros clientes".
2. **Eliminar** `components/sections/Stats.tsx` — la sección de métricas genéricas (`50+ proyectos · 10x velocidad · 3x ROI · 99.9% disponibilidad`) también se elimina. `CaseStudies` pasa a ser la **única sección de números** de toda la landing.
3. **Crear** `components/sections/CaseStudies.tsx` con el diseño especificado abajo
4. **En `app/page.tsx`**:
   - Eliminar `import Stats from "@/components/sections/Stats"` y quitar `<Stats />` del JSX
   - Eliminar `import Testimonials from "@/components/sections/Testimonials"` y quitar `<Testimonials />` del JSX
   - Añadir `import CaseStudies from "@/components/sections/CaseStudies"` y colocar `<CaseStudies />` exactamente donde estaba `<Testimonials />` — no duplicar

---

## Diseño de referencia (replicar fielmente)

La sección tiene fondo oscuro tipo `bg-slate-950` o `bg-background` con tonalidad oscura. Dos cards en grid 2 columnas (1 columna en mobile). Cada card tiene:

- **Badge pill** arriba a la izquierda con el nombre del sector, borde violeta sutil
- Estructura interna en 3 bloques verticales:
  - `Problema` — label en **rojo/naranja** (`text-red-400`) + texto normal en gris claro
  - `Solución` — label en **azul/violeta** (`text-blue-400`) + texto normal en gris claro  
  - `Resultado` — label en **azul brillante** (`text-blue-300`) + texto en **negrita blanca**
- Fondo de la card: `bg-slate-900/80` con borde `border border-slate-800`
- Bordes redondeados grandes: `rounded-2xl`
- El efecto hover de `GlowCard` con `glowColor="purple"` envuelve cada card

---

## Datos exactos de los casos

### Card 1 — Taller automovilístico
- **Badge:** `Taller automovilístico`
- **Problema:** Procesaban 200+ facturas al mes de forma manual con 2 personas dedicadas.
- **Solución:** Sistema de clasificación automática de facturas, albaranes y abonos con extracción de datos.
- **Resultado:** 80% de reducción en tiempo de procesamiento con revisión manual ocasional.

### Card 2 — Clínica dental
- **Badge:** `Clínica dental`
- **Problema:** Perdían leads por no responder mensajes fuera de horario.
- **Solución:** Agente de IA conversacional 24/7 conectado a WhatsApp y agenda de citas.
- **Resultado:** 35% más citas agendadas. Respuesta inmediata a cada consulta.

---

## Código completo esperado

### `components/sections/CaseStudies.tsx`

```tsx
"use client"

import { GlowCard } from "@/components/ui/glow-card"

const cases = [
  {
    sector: "Taller automovilístico",
    problema:
      "Procesaban 200+ facturas al mes de forma manual con 2 personas dedicadas.",
    solucion:
      "Sistema de clasificación automática de facturas, albaranes y abonos con extracción de datos.",
    resultado:
      "80% de reducción en tiempo de procesamiento con revisión manual ocasional.",
  },
  {
    sector: "Clínica dental",
    problema: "Perdían leads por no responder mensajes fuera de horario.",
    solucion:
      "Agente de IA conversacional 24/7 conectado a WhatsApp y agenda de citas.",
    resultado:
      "35% más citas agendadas. Respuesta inmediata a cada consulta.",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">

        {/* Cabecera */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
            Resultados. Números que hablan por nosotros.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Casos reales de empresas que automatizaron con Alt4ir y transformaron
            su operación en semanas.
          </p>
        </div>

        {/* Grid de casos */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <GlowCard
              key={c.sector}
              glowColor="purple"
              className="p-8 flex flex-col gap-6 bg-slate-900/80 border border-slate-800"
            >
              {/* Badge sector */}
              <span className="self-start inline-flex items-center rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                {c.sector}
              </span>

              {/* Bloques Problema / Solución / Resultado */}
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

## Cambios en `app/page.tsx`

```tsx
// Eliminar:
import Testimonials from "@/components/sections/Testimonials"

// Añadir:
import CaseStudies from "@/components/sections/CaseStudies"

// En el JSX, sustituir:
// <Testimonials />
// por:
<CaseStudies />
```

---

## Nota sobre `GlowCard`

El componente `GlowCard` ya fue creado previamente en `components/ui/glow-card.tsx`.  
Acepta las props: `children`, `className`, `glowColor` (`"purple" | "blue" | "green" | "red" | "orange"`).  
Envuelve el contenido con el efecto spotlight que sigue al cursor y borde luminoso reactivo.  
**No tocar ni recrear ese archivo** — solo importarlo.

---

## Checklist antes de terminar

- [ ] `components/sections/Testimonials.tsx` eliminado
- [ ] `components/sections/Stats.tsx` eliminado
- [ ] `components/sections/CaseStudies.tsx` creado con el código exacto
- [ ] `app/page.tsx` actualizado: imports de Stats y Testimonials eliminados, CaseStudies añadido en su lugar
- [ ] Sin TypeScript errors
- [ ] Sin `any`
- [ ] Sin librerías extra instaladas
- [ ] Responsive: 1 col mobile, 2 col desktop
- [ ] Ejecutar `npm run build` y corregir errores antes de terminar
