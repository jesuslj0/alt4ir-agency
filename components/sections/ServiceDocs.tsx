import Link from "next/link"
import { ArrowRightIcon, FileWarningIcon, CalculatorIcon, UsersIcon, FolderSearchIcon, CheckCircle2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

const painPoints = [
  {
    icon: FileWarningIcon,
    text: "Facturas, contratos y albaranes que acaban perdidos o duplicados",
  },
  {
    icon: CalculatorIcon,
    text: "Contabilidad manual que genera errores y retrasos con Hacienda",
  },
  {
    icon: UsersIcon,
    text: "Tu equipo entierra horas en burocracia en vez de en clientes",
  },
  {
    icon: FolderSearchIcon,
    text: "Imposible encontrar un documento cuando lo necesitas",
  },
]

// Donut: C = 2π × 38 ≈ 238.76
// Segmentos: auto 75%, manual 12.5%, rechazado 6%, pendiente 6.5%
// dashoffset = C - startPosition (positive)
const C = 238.76
const donutSegments = [
  { pct: 0.75,   color: "#00fd70", label: "Aprobados (auto)",    start: 0 },
  { pct: 0.125,  color: "#60a5fa", label: "Aprobados (manual)",  start: 0.75 * C },
  { pct: 0.06,   color: "#ef4444", label: "Rechazados",          start: (0.75 + 0.125) * C },
  { pct: 0.065,  color: "#4b5563", label: "Pendientes",          start: (0.75 + 0.125 + 0.06) * C },
]

export default function ServiceDocs() {
  return (
    <section id="gestion-documental" className="py-20 md:py-28 relative overflow-hidden">

      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-0 bottom-0 w-125 h-125 rounded-full bg-facturia/8 blur-[130px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4">

        <div className="mb-14 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-facturia/30 bg-facturia/10 px-3 py-1 text-xs font-semibold text-facturia mb-4">
            <span className="size-1.5 rounded-full bg-facturia animate-pulse" />
            Gestión Documental & Contabilidad
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
            Deja de perder horas{" "}
            <span className="bg-linear-to-r from-facturia to-facturia-dark bg-clip-text text-transparent">
              en facturas y documentos
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            Automatizamos tu flujo documental y contable: sube una imagen o un PDF y obtén
            todos tus documentos procesados y clasificados, con extracción de datos a medida
            y acceso a gráficas y métricas para un control total de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Columna izquierda */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
              ¿Te suena alguno de estos problemas?
            </p>

            <ul className="flex flex-col gap-4">
              {painPoints.map((p) => {
                const Icon = p.icon
                return (
                  <li
                    key={p.text}
                    className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/4 px-5 py-4 backdrop-blur-sm"
                  >
                    <div className="shrink-0 mt-0.5 size-8 rounded-lg bg-red-500/15 flex items-center justify-center">
                      <Icon className="size-4 text-red-400" />
                    </div>
                    <span className="text-sm text-slate-300 leading-snug">{p.text}</span>
                  </li>
                )
              })}
            </ul>

            <div className="rounded-xl border border-facturia/25 bg-facturia/8 px-5 py-4 flex items-start gap-3">
              <CheckCircle2Icon className="size-5 text-facturia shrink-0 mt-0.5" />
              <p className="text-sm text-slate-200 leading-relaxed">
                Tu equipo deja de tocar documentos manualmente.{" "}
                <strong className="text-white">Todo entra, se clasifica y se archiva solo</strong> —
                compatible con Holded, FacturaDirecta, A3 y los sistemas que ya usas.
              </p>
            </div>

            <Button
              size="lg"
              className="self-start bg-facturia hover:bg-facturia-dark text-white font-semibold px-7 gap-2"
              asChild
            >
              <Link href="/proyectos/facturia">
                Quiero ahorrar tiempo en gestión
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Columna derecha — dashboard facturia */}
          <div className="flex justify-center lg:justify-end">
            <FacturaDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}

function FacturaDashboard() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl shadow-black/60 text-white">

      {/* ─── Facturación ─── */}
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-center gap-2 mb-0.5">
          <svg viewBox="0 0 24 24" className="size-4 fill-white/80" aria-hidden><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
          <span className="text-sm font-bold">Facturación</span>
        </div>
        <div className="flex items-center gap-2 text-[9px]">
          <span className="text-[#60a5fa] underline cursor-pointer">Solo facturas aprobadas</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-500">Abonos descontados</span>
        </div>
      </div>

      {/* Line chart */}
      <div className="mx-3 mb-3 rounded-xl bg-[#111927] border border-white/6 overflow-hidden">
        <p className="text-[9px] text-slate-400 text-center pt-2.5">Ingresos vs Gastos</p>

        {/* Legend */}
        <div className="flex items-center justify-center gap-3 mt-1 mb-2">
          {[
            { color: "#00fd70", label: "Ingresos", dashed: false },
            { color: "#ef4444", label: "Gastos",   dashed: false },
            { color: "#60a5fa", label: "Beneficio",dashed: true  },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1">
              <svg width="16" height="6" className="shrink-0">
                <line
                  x1="0" y1="3" x2="16" y2="3"
                  stroke={l.color}
                  strokeWidth="1.5"
                  strokeDasharray={l.dashed ? "3 2" : undefined}
                />
              </svg>
              <span className="text-[7px] text-slate-400">{l.label}</span>
            </div>
          ))}
        </div>

        <svg viewBox="0 0 380 130" className="w-full" aria-hidden>
          {/* Grid horizontales */}
          {[15, 42, 69, 96, 120].map((y) => (
            <line key={y} x1="32" y1={y} x2="375" y2={y} stroke="#ffffff08" strokeWidth="0.5" />
          ))}
          {/* Eje Y */}
          <line x1="32" y1="10" x2="32" y2="120" stroke="#ffffff10" strokeWidth="0.5" />
          {/* Eje X */}
          <line x1="32" y1="120" x2="375" y2="120" stroke="#ffffff10" strokeWidth="0.5" />

          {/* Y labels (1600 → -400, y=69 es cero) */}
          {[
            { y: 15,  label: "1.600" },
            { y: 42,  label: "800"   },
            { y: 69,  label: "0"     },
            { y: 96,  label: "-200"  },
            { y: 120, label: "-400"  },
          ].map(({ y, label }) => (
            <text key={label} x="28" y={y + 2} fill="#ffffff25" fontSize="5" textAnchor="end">
              {label}
            </text>
          ))}

          {/* X labels */}
          {[
            { x: 32,  label: "Dic 2014" },
            { x: 110, label: "May 2017" },
            { x: 185, label: "Ene 2019" },
            { x: 240, label: "Mar 2020" },
            { x: 320, label: "Nov 2023" },
            { x: 350, label: "Abr 2024" },
          ].map(({ x, label }) => (
            <text key={label} x={x} y="128" fill="#ffffff20" fontSize="4.5" textAnchor="middle">
              {label}
            </text>
          ))}

          {/* Ingresos área relleno */}
          <defs>
            <linearGradient id="docIngresosGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00fd70" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00fd70" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M 32,69 L 160,68 L 240,67 L 290,58 L 330,28 L 355,12 L 375,38 L 375,120 L 32,120 Z"
            fill="url(#docIngresosGrad)"
          />
          {/* Ingresos línea */}
          <path
            d="M 32,69 L 160,68 L 240,67 L 290,58 L 330,28 L 355,12 L 375,38"
            fill="none"
            stroke="#00fd70"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Gastos línea */}
          <path
            d="M 32,47 L 100,53 L 185,60 L 260,65 L 330,67 L 375,68"
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Beneficio punteado */}
          <path
            d="M 32,112 L 100,107 L 185,99 L 260,87 L 320,72 L 375,65"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1.2"
            strokeDasharray="3 2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Divider */}
      <div className="mx-3 border-t border-white/6 mb-3" />

      {/* ─── Automatización ─── */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 mb-0.5">
          <svg viewBox="0 0 24 24" className="size-4 fill-white/80" aria-hidden><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96a7.01 7.01 0 0 0-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.477.477 0 0 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
          <span className="text-sm font-bold">Automatización</span>
        </div>
        <p className="text-[9px] text-slate-500 mb-3">Rendimiento del sistema de revisión inteligente</p>

        <div className="grid grid-cols-2 gap-2">

          {/* Donut chart */}
          <div className="rounded-xl bg-[#111927] border border-white/6 p-3 flex flex-col items-center gap-2">
            <p className="text-[8px] font-semibold text-slate-300 text-center">Distribución de decisiones</p>

            <div className="relative">
              <svg viewBox="0 0 100 100" className="w-20 h-20" aria-label="Distribución de decisiones">
                {/* Base */}
                <circle cx="50" cy="50" r="38" fill="none" stroke="#1e2d3d" strokeWidth="13" />
                {donutSegments.map((seg) => (
                  <circle
                    key={seg.label}
                    cx="50" cy="50" r="38"
                    fill="none"
                    stroke={seg.color}
                    strokeWidth="13"
                    strokeDasharray={`${seg.pct * C} ${C}`}
                    strokeDashoffset={C - seg.start}
                    strokeLinecap="butt"
                    transform="rotate(-90 50 50)"
                  />
                ))}
                <text x="50" y="47" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">7</text>
                <text x="50" y="57" textAnchor="middle" fill="#94a3b8" fontSize="5.5" fontFamily="sans-serif">documentos</text>
              </svg>
            </div>

            <div className="flex flex-col gap-1 w-full">
              {donutSegments.map((s) => (
                <div key={s.label} className="flex items-center gap-1.5">
                  <span className="size-2 rounded-xs shrink-0" style={{ backgroundColor: s.color }} />
                  <span className="text-[6.5px] text-slate-400">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stat cards */}
          <div className="flex flex-col gap-2">
            {[
              { label: "CONFIANZA MEDIA DE EXTRACCIÓN", value: "96,9 %", color: "text-facturia" },
              { label: "TASA APROBACIÓN AUTOMÁTICA",    value: "75,0 %", color: "text-facturia" },
              { label: "TASA REVISIÓN MANUAL",          value: "12,5 %", color: "text-facturia" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-[#111927] border border-white/6 px-3 py-2.5 flex flex-col gap-1"
              >
                <p className="text-[6.5px] font-semibold text-facturia uppercase tracking-wider leading-tight">
                  {stat.label}
                </p>
                <p className={`text-[18px] font-bold leading-none ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
