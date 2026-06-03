import { BriefcaseIcon, BuildingIcon, CalculatorIcon, FileTextIcon } from "lucide-react"

const useCases = [
  {
    icon: BriefcaseIcon,
    title: "Pymes y autónomos",
    description: "Que quieren dejar de teclear facturas y ganar control de su tesorería sin esfuerzo.",
  },
  {
    icon: CalculatorIcon,
    title: "Gestorías y asesorías",
    description: "Que procesan documentos de varios clientes y necesitan orden multiempresa.",
  },
  {
    icon: BuildingIcon,
    title: "Departamentos financieros",
    description: "Que requieren control de IVA, flujo de caja y trazabilidad de cada aprobación.",
  },
]

const docTypes = ["Facturas", "Albaranes", "Facturas rectificativas", "Abonos de albarán"]

export default function FacturiaUseCases() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-facturia/30 bg-facturia/10 px-4 py-1.5 text-xs font-semibold text-facturia">
            Para quién es
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Pensado para tu{" "}
            <span className="bg-linear-to-r from-facturia to-facturia-dark bg-clip-text text-transparent">
              caso de uso
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((u) => {
            const Icon = u.icon
            return (
              <div
                key={u.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-facturia-card/60 p-7 backdrop-blur-sm transition-colors hover:border-facturia/40"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-facturia to-facturia-dark">
                  <Icon className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-facturia-fg">{u.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{u.description}</p>
              </div>
            )
          })}
        </div>

        {/* Tipos de documentos soportados */}
        <div className="mt-12 rounded-2xl border border-white/8 bg-facturia-card/40 px-6 py-8 text-center backdrop-blur-sm">
          <div className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold text-facturia-fg">
            <FileTextIcon className="size-4 text-facturia" />
            Tipos de documentos soportados
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {docTypes.map((d) => (
              <span
                key={d}
                className="rounded-full border border-facturia/20 bg-facturia/8 px-4 py-1.5 text-sm text-facturia"
              >
                {d}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-facturia-muted">
            Con clasificación automática en ingresos (ventas) o gastos (compras).
          </p>
        </div>
      </div>
    </section>
  )
}
