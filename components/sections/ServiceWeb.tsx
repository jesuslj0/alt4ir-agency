import Link from "next/link"
import { ArrowRightIcon, MonitorXIcon, SearchXIcon, TimerOffIcon, TrendingDownIcon, CheckCircle2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

const painPoints = [
  {
    icon: MonitorXIcon,
    text: "Clientes potenciales llegan a tu web y se van sin contactarte",
  },
  {
    icon: TimerOffIcon,
    text: "Actualizarla te cuesta tiempo y dinero que no tienes",
  },
  {
    icon: TrendingDownIcon,
    text: "Tu competencia tiene una presencia digital mucho más cuidada",
  },
  {
    icon: SearchXIcon,
    text: "No apareces bien posicionado en Google y pierdes visibilidad",
  },
]

export default function ServiceWeb() {
  return (
    <section id="diseno-web" className="py-20 md:py-28 relative overflow-hidden">

      {/* Glow de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute right-0 top-1/4 w-125 h-125 rounded-full bg-brand-sky/6 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4">

        {/* Cabecera */}
        <div className="mb-14 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-sky/30 bg-brand-sky/10 px-3 py-1 text-xs font-semibold text-brand-sky mb-4">
            <span className="size-1.5 rounded-full bg-brand-sky animate-pulse" />
            Diseño Web & Desarrollo
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
            Tu web actual te está{" "}
            <span className="bg-linear-to-r from-brand-sky to-brand-teal bg-clip-text text-transparent">
              costando clientes
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            Diseñamos y desarrollamos tu web a medida: diseño moderno,
            optimizada para SEO y preparada para crecer contigo. Sin plantillas genéricas.
          </p>
        </div>

        {/* Grid: pain points + mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Columna izquierda — pain points */}
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

            {/* Propuesta de valor */}
            <div className="rounded-xl border border-brand-sky/25 bg-brand-sky/8 px-5 py-4 flex items-start gap-3">
              <CheckCircle2Icon className="size-5 text-brand-sky shrink-0 mt-0.5" />
              <p className="text-sm text-slate-200 leading-relaxed">
                Cada web que entregamos está pensada para convertir visitantes en clientes:
                carga rápida, diseño adaptado a tu sector y{" "}
                <strong className="text-white">lista para posicionar en Google desde el día uno</strong>.
              </p>
            </div>

            <Button
              size="lg"
              className="self-start bg-brand-sky hover:bg-brand-teal text-background font-semibold px-7 gap-2"
              asChild
            >
              <Link href="/proyectos/web-design">
                Ver ejemplos de webs
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Columna derecha — browser mockup */}
          <div className="flex justify-center lg:justify-end">
            <BrowserMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function BrowserMockup() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#050608] overflow-hidden shadow-2xl shadow-black/70">

      {/* Browser chrome */}
      <div className="bg-[#0d0f14] px-4 py-3 flex items-center gap-3 border-b border-white/6">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-[#050608] rounded-md px-3 py-1.5 flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="size-3 fill-[#5b6472] shrink-0">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
          <span className="text-[11px] text-[#5b6472] truncate">vela.space</span>
        </div>
        <span className="text-[9px] text-[#5b6472]">↻</span>
      </div>

      {/* Cinematic landing — fondo cósmico + liquid glass */}
      <div className="relative bg-[#050608] overflow-hidden" style={{ aspectRatio: "4/5" }}>

        {/* ── Fondo cósmico (sustituye al vídeo del prompt original) ── */}
        <div className="absolute inset-0 animate-cosmic-drift" aria-hidden>
          {/* Nebulosas */}
          <div className="absolute -top-10 -left-8 w-56 h-56 rounded-full bg-brand-sky/25 blur-[60px]" />
          <div className="absolute top-1/3 -right-10 w-52 h-52 rounded-full bg-brand-teal/20 blur-[70px]" />
          <div className="absolute bottom-0 left-1/4 w-64 h-40 rounded-full bg-indigo-500/20 blur-[80px]" />
        </div>

        {/* Estrellas */}
        <div className="absolute inset-0" aria-hidden>
          {[
            { top: "12%", left: "18%", d: "0s" },
            { top: "20%", left: "70%", d: "1.2s" },
            { top: "34%", left: "42%", d: "0.6s" },
            { top: "48%", left: "85%", d: "1.8s" },
            { top: "60%", left: "28%", d: "0.3s" },
            { top: "8%", left: "52%", d: "2.1s" },
            { top: "72%", left: "62%", d: "0.9s" },
            { top: "28%", left: "10%", d: "1.5s" },
          ].map((s, i) => (
            <span
              key={i}
              className="absolute size-0.5 rounded-full bg-white"
              style={{ top: s.top, left: s.left, animation: `star-twinkle 3s ease-in-out ${s.d} infinite` }}
            />
          ))}
        </div>

        {/* Horizonte planetario inferior */}
        <div className="absolute -bottom-[55%] left-1/2 -translate-x-1/2 w-[140%] aspect-square rounded-full bg-linear-to-t from-[#0b1a2e] to-transparent border-t border-brand-teal/30 shadow-[0_-20px_60px_-10px_rgba(0,253,202,0.3)]" />

        {/* ── Contenido ── */}
        <div className="relative z-10 h-full flex flex-col px-4 py-3">

          {/* Navbar */}
          <div className="flex items-center justify-between">
            <div className="liquid-glass size-6 rounded-full flex items-center justify-center">
              <span className="font-display-serif italic text-white text-sm leading-none">v</span>
            </div>
            <div className="liquid-glass hidden sm:flex items-center gap-2.5 rounded-full px-3 py-1">
              {["Inicio", "Viajes", "Mundos", "Innovación"].map((item) => (
                <span key={item} className="text-[6.5px] font-medium text-white/85">{item}</span>
              ))}
            </div>
            <button className="rounded-full bg-white px-2.5 py-1 text-[6.5px] font-semibold text-black whitespace-nowrap">
              Reservar plaza ↗
            </button>
          </div>

          {/* Hero centrado */}
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-2.5">

            {/* Badge */}
            <div className="liquid-glass inline-flex items-center gap-1.5 rounded-full pr-2.5 py-0.5 pl-0.5">
              <span className="rounded-full bg-white px-1.5 py-0.5 text-[5.5px] font-bold text-black">Nuevo</span>
              <span className="text-[6px] text-white/90">Primer viaje tripulado a Marte · 2026</span>
            </div>

            {/* Titular serif italic */}
            <h1 className="font-display-serif italic text-white text-[26px] leading-[0.85] tracking-tight max-w-57.5">
              Viaja más allá de nuestro cielo, a través del universo
            </h1>

            {/* Subtítulo */}
            <p className="text-[6.5px] font-light text-white/80 leading-snug max-w-50">
              Descubre el cosmos de formas antes inimaginables. Naves pioneras
              e ingeniería revolucionaria ponen la exploración del espacio
              profundo a tu alcance — segura y extraordinaria.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3 mt-1">
              <button className="liquid-glass-strong rounded-full px-3 py-1.5 text-[6.5px] font-medium text-white inline-flex items-center gap-1">
                Inicia tu viaje
                <svg viewBox="0 0 24 24" className="size-2 fill-none stroke-white" strokeWidth="2.5">
                  <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="text-[6.5px] font-medium text-white inline-flex items-center gap-1">
                Ver despegue
                <svg viewBox="0 0 24 24" className="size-1.5 fill-white"><polygon points="6 4 20 12 6 20" /></svg>
              </button>
            </div>

            {/* Stat cards */}
            <div className="flex items-stretch gap-2 mt-1.5">
              {[
                { value: "34,5 min", label: "Tiempo medio de visionado" },
                { value: "2,8 B+", label: "Viajeros en todo el mundo" },
              ].map((s) => (
                <div key={s.label} className="liquid-glass rounded-xl px-3 py-2 w-22.5 flex flex-col items-start gap-0.5">
                  <span className="font-display-serif italic text-white text-base leading-none">{s.value}</span>
                  <span className="text-[5.5px] font-light text-white/80 leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div className="flex flex-col items-center gap-1.5 pb-0.5">
            <span className="liquid-glass rounded-full px-2.5 py-0.5 text-[5.5px] font-medium text-white/90">
              Colaboramos con los líderes aeroespaciales del mundo
            </span>
            <div className="flex items-center gap-3">
              {["Aeon", "Vela", "Apex", "Orbit", "Zeno"].map((p) => (
                <span key={p} className="font-display-serif italic text-white/90 text-[11px] tracking-tight">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
