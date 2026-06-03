import {
  KeyboardOffIcon,
  GitBranchIcon,
  GaugeIcon,
  FileSpreadsheetIcon,
  UsersIcon,
} from "lucide-react"

const problems = [
  {
    icon: KeyboardOffIcon,
    text: "Eliminar la entrada manual de datos de facturas, propensa a errores.",
  },
  {
    icon: GitBranchIcon,
    text: "Tener un flujo de revisión y aprobación claro y auditable.",
  },
  {
    icon: GaugeIcon,
    text: "Conocer en tiempo real ingresos, gastos, beneficio e IVA.",
  },
  {
    icon: FileSpreadsheetIcon,
    text: "Generar informes y exportaciones (Excel, CSV, PDF) en segundos.",
  },
  {
    icon: UsersIcon,
    text: "Centralizar la relación con proveedores y clientes.",
  },
]

export default function FacturiaProblem() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Deja de perder horas{" "}
            <span className="bg-linear-to-r from-facturia to-facturia-dark bg-clip-text text-transparent">
              tecleando facturas
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            FacturIA automatiza el ciclo completo de tus documentos contables para que
            recuperes el control de cada euro.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.text}
                className="flex items-start gap-4 rounded-xl border border-white/8 bg-facturia-card/60 px-5 py-5 backdrop-blur-sm transition-colors hover:border-facturia/40"
              >
                <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-facturia/12">
                  <Icon className="size-5 text-facturia" />
                </div>
                <span className="text-sm leading-snug text-slate-300">{p.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
