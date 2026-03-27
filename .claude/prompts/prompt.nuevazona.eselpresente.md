Crea el archivo `components/sections/Movement.tsx` y añádelo a `app/page.tsx`.

---

### Contexto del proyecto
- Next.js 16 App Router · React 19 · TailwindCSS 4 · shadcn v4 · TypeScript 5
- Sin `tailwind.config.js` — tema en `app/globals.css`
- Importaciones absolutas con `@/`
- Sin librerías de animación extra — solo `tw-animate-css` (ya incluido)
- Accent color: `violet-600` (light) / `violet-400` (dark)
- Convención de secciones: `py-20 md:py-28`, `max-w-6xl mx-auto px-4`

---

### Qué crear

**`components/sections/Movement.tsx`** — sección de urgencia/diferenciación.

Diseño: fondo oscuro con ligero degradado violeta (`bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-950`), texto centrado, tipografía grande e impactante. Sin cards, sin grid. Todo en columna central, respirado, cinematográfico.

**Estructura visual de arriba a abajo:**

1. **Etiqueta pill** pequeña encima del título:
   - Badge estilo pill con borde sutil: `"El momento es ahora"`
   - Clases: `inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-400`
   - Icono: `TrendingUpIcon` de lucide-react a la izquierda del texto

2. **Titular principal** (grande, bold, centrado):
Esto no es el futuro.
Es el presente.

- `text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight`
   - La segunda línea `"Es el presente."` en `text-violet-400`

3. **Subtítulo** (max-w-2xl centrado, muted):
Cada semana que pasa, más empresas automatizan sus procesos con IA y
amplían su ventaja competitiva. Subirse a la ola ahora no es una opción —
es la diferencia entre liderar tu sector o quedarse atrás.

- `text-lg text-slate-400 leading-relaxed`

4. **Tres micro-stats** en fila horizontal (sin card, solo texto+número):
   - `"77%"` — de las empresas Fortune 500 ya usan IA operacional
   - `"3.5x"` — más rápido escalan negocios con procesos automatizados  
   - `"2025"` — el año en que la IA dejó de ser ventaja y se volvió requisito
   - Layout: `flex flex-col sm:flex-row gap-8 justify-center items-center`
   - Número: `text-3xl font-bold text-white`
   - Label: `text-sm text-slate-400 text-center max-w-[140px]`
   - Separador vertical entre ellos (solo visible en sm+): `hidden sm:block w-px h-10 bg-violet-800/50`

5. **Botón CTA** centrado:
   - Texto: `"Quiero saber más"`
   - Enlace: `href="#contacto"` (scroll al CTABanner al final de la página)
   - Usar el componente `<Button>` de shadcn: `asChild` con `<Link>`
   - Clases: `size="lg"` + `className="bg-violet-600 hover:bg-violet-700 text-white px-8 gap-2"`
   - Icono: `ArrowDownIcon` de lucide-react a la derecha
   - Debajo del botón, texto pequeño: `"Sin compromiso · Consultoría gratuita"` en `text-xs text-slate-500`

---

### Código completo esperado
```tsx
import Link from "next/link"
import { TrendingUpIcon, ArrowDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "77%", label: "de empresas Fortune 500 ya operan con IA" },
  { value: "3.5x", label: "más rápido escalan negocios automatizados" },
  { value: "2025", label: "el año en que la IA se volvió requisito" },
]

export default function Movement() {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center gap-10">

        {/* Pill */}
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-400">
          <TrendingUpIcon className="size-3.5" />
          El momento es ahora
        </span>

        {/* Título */}
        <div className="flex flex-col gap-1">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Esto no es el futuro.
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-violet-400 leading-tight">
            Es el presente.
          </h2>
        </div>

        {/* Subtítulo */}
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
          Cada semana que pasa, más empresas automatizan sus procesos con IA y amplían su ventaja
          competitiva. Subirse a la ola ahora no es una opción — es la diferencia entre liderar tu
          sector o quedarse atrás.
        </p>

        {/* Micro-stats */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {stats.map((stat, i) => (
            <>
              <div key={stat.value} className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-slate-400 max-w-[140px] text-center leading-snug">
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-10 bg-violet-800/50" />
              )}
            </>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <Button
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 gap-2"
            asChild
          >
            <Link href="#contacto">
              Quiero saber más
              <ArrowDownIcon className="size-4" />
            </Link>
          </Button>
          <span className="text-xs text-slate-500">Sin compromiso · Consultoría gratuita</span>
        </div>

      </div>
    </section>
  )
}
```

---

### Dónde insertarla en `app/page.tsx`

Importar y añadir `<Movement />` **entre `<Stats />` y `<Features />`**:
```tsx
import Movement from "@/components/sections/Movement"

// En el JSX:
<Stats />
<Movement />
<Features />
```

---

### Checklist antes de terminar
- [ ] No TypeScript errors
- [ ] Sin `any`
- [ ] Sin librerías de animación extra
- [ ] El botón hace scroll a `#contacto` que existe en `CTABanner.tsx`
- [ ] Responsive mobile-first
- [ ] Dark mode nativo (la sección ya usa colores fijos oscuros, es compatible)