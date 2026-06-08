import {
  LockIcon,
  ShieldIcon,
  KeyRoundIcon,
  PaletteIcon,
  ScrollTextIcon,
  ServerIcon,
} from "lucide-react"

const reasons = [
  {
    icon: LockIcon,
    title: "Tus datos siempre aislados y privados",
    description: "Arquitectura multiempresa: cada empresa tiene sus datos totalmente separados y seguros.",
  },
  {
    icon: ShieldIcon,
    title: "Seguridad de datos",
    description: "Acceso restringido a usuarios autenticados y claves API cifradas.",
  },
  {
    icon: KeyRoundIcon,
    title: "Roles y permisos",
    description: "Control de quién puede ver y hacer qué dentro de la empresa.",
  },
  {
    icon: PaletteIcon,
    title: "Personalización de marca",
    description: "Logo y color corporativo propios en la plataforma e informes.",
  },
  {
    icon: ScrollTextIcon,
    title: "Auditoría completa",
    description: "Registro de cada acción con su autor y fecha.",
  },
  {
    icon: ServerIcon,
    title: "Tecnología robusta",
    description: "Construido sobre Django, el mismo framework que usan Instagram o Spotify.",
  },
]

export default function FacturiaTrust() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-facturia/30 bg-facturia/10 px-4 py-1.5 text-xs font-semibold text-facturia">
            Por qué confiar en nosotros
          </span>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Hecho para empresas que{" "}
            <span className="bg-linear-to-r from-facturia to-facturia-dark bg-clip-text text-transparent">
              no pueden fallar
            </span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="rounded-2xl border border-white/8 bg-facturia-card/60 p-6 backdrop-blur-sm transition-colors hover:border-facturia/40"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-facturia/12">
                  <Icon className="size-5 text-facturia" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-facturia-fg">{r.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{r.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
