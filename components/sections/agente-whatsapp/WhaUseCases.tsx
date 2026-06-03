import { HeartPulseIcon, ActivityIcon, StethoscopeIcon, StarIcon } from "lucide-react"

const metrics = [
  { value: "24/7", label: "Disponibilidad del agente" },
  { value: "−60%", label: "Reducción de no-shows" },
  { value: "<5s", label: "Tiempo de respuesta" },
  { value: "100%", label: "Huecos reasignados automáticamente" },
]

const sectors = [
  {
    icon: HeartPulseIcon,
    title: "Clínicas dentales",
    description:
      "Nuestro caso de uso principal. Agenda de higienistas, ortodoncistas y cirujanos bajo un solo agente, con información detallada de cada profesional y tratamiento.",
    featured: true,
  },
  {
    icon: ActivityIcon,
    title: "Fisioterapia y rehabilitación",
    description:
      "Control de sesiones, seguimiento de tratamientos y recordatorios que garantizan una alta tasa de asistencia.",
    featured: false,
  },
  {
    icon: StethoscopeIcon,
    title: "Medicina y especialidades",
    description:
      "Triaje básico, información de especialistas y gestión de agenda para consultas privadas de cualquier disciplina.",
    featured: false,
  },
]

export default function WhaUseCases() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">

        {/* Métricas */}
        <div className="mb-20 grid grid-cols-2 gap-6 rounded-2xl border border-wha-teal/20 bg-wha-teal/5 px-6 py-10 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-1.5 text-center">
              <span className="text-3xl font-bold text-wha-teal">{m.value}</span>
              <span className="max-w-[120px] text-xs leading-snug text-wha-muted">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Cabecera */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-wha/30 bg-wha/10 px-4 py-1.5 text-xs font-semibold text-wha">
            Para quién es
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-wha-fg md:text-4xl">
            Cualquier consulta que{" "}
            <span className="bg-linear-to-r from-wha to-wha-teal bg-clip-text text-transparent">
              trabaje por cita
            </span>
          </h2>
          <p className="mt-4 text-wha-muted">
            Si tu negocio gestiona agenda, el agente puede encargarse de ella.
          </p>
        </div>

        {/* Grid de sectores */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className={`relative flex flex-col gap-3 rounded-2xl border p-6 backdrop-blur-sm transition-colors ${
                  s.featured
                    ? "border-wha/40 bg-linear-to-br from-wha/10 via-wha-card to-wha-teal/10 shadow-lg shadow-wha/10"
                    : "border-white/8 bg-wha-card/60 hover:border-wha/25"
                }`}
              >
                {s.featured && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-wha/15 px-2.5 py-1 text-[10px] font-semibold text-wha">
                    <StarIcon className="size-2.5 fill-wha" />
                    Nicho principal
                  </span>
                )}
                <div className={`flex size-11 items-center justify-center rounded-xl ${s.featured ? "bg-linear-to-br from-wha to-wha-teal shadow-md shadow-wha/30" : "bg-linear-to-br from-wha to-wha-teal"}`}>
                  <Icon className="size-5 text-white" />
                </div>
                <h3 className={`font-semibold ${s.featured ? "text-wha-fg text-lg" : "text-wha-fg"}`}>{s.title}</h3>
                <p className="text-sm leading-relaxed text-wha-muted">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
