import { UploadCloudIcon, ScanLineIcon, ShieldCheckIcon, BarChart3Icon, FileDownIcon } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: UploadCloudIcon,
    title: "Subes o envías la factura",
    description: "Foto, PDF o ingesta automática vía API desde tus otros sistemas.",
  },
  {
    number: "02",
    icon: ScanLineIcon,
    title: "La IA extrae los datos (OCR)",
    description: "Número, fecha, base, IVA, total y emisor — cada dato con su nivel de confianza.",
  },
  {
    number: "03",
    icon: ShieldCheckIcon,
    title: "Aprobación automática o revisión",
    description: "Alta confianza se aprueba sola; las dudosas pasan a revisión manual.",
  },
  {
    number: "04",
    icon: BarChart3Icon,
    title: "Consultas tus métricas",
    description: "Ingresos, gastos, beneficio e IVA en el dashboard, en tiempo real.",
  },
  {
    number: "05",
    icon: FileDownIcon,
    title: "Exportas para tu gestoría",
    description: "Informes en Excel, CSV o PDF listos en segundos.",
  },
]

export default function FacturiaFlow() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-facturia/30 bg-facturia/10 px-4 py-1.5 text-xs font-semibold text-facturia">
            Cómo funciona
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Un flujo{" "}
            <span className="bg-linear-to-r from-facturia to-facturia-dark bg-clip-text text-transparent">
              sin fricción
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            De la subida del documento al informe contable, sin intervención manual cuando no
            hace falta.
          </p>
        </div>

        <div className="relative">
          {/* Línea conectora horizontal en desktop */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-linear-to-r from-transparent via-facturia/30 to-transparent lg:block"
            aria-hidden
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-4 flex size-14 items-center justify-center rounded-2xl border border-facturia/30 bg-facturia-card shadow-lg shadow-facturia/10">
                    <Icon className="size-6 text-facturia" />
                    <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-linear-to-br from-facturia to-facturia-dark text-[10px] font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-facturia-fg">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-400">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
