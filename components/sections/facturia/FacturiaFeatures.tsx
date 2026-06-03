import {
  ScanLineIcon,
  BadgeCheckIcon,
  HistoryIcon,
  WalletIcon,
  BarChart3Icon,
  Building2Icon,
  FileDownIcon,
  PlugIcon,
} from "lucide-react"

const features = [
  {
    icon: ScanLineIcon,
    title: "Captura inteligente de documentos",
    points: [
      "Ingesta de facturas, albaranes, facturas rectificativas y abonos.",
      "Lectura automática con OCR + IA: número, fecha, base imponible, IVA, total y emisor.",
      "Cada dato extraído incluye un nivel de confianza, para saber qué revisar.",
    ],
  },
  {
    icon: BadgeCheckIcon,
    title: "Revisión y aprobación automática",
    points: [
      "Niveles de revisión: automático, manual, recomendado u obligatorio.",
      "Las facturas con alta confianza se aprueban solas; las dudosas se marcan.",
      "Estados claros y trazabilidad total: quién aprobó, rechazó o editó y cuándo.",
    ],
  },
  {
    icon: HistoryIcon,
    title: "Rectificaciones con histórico",
    points: [
      "Crea versiones rectificativas manteniendo el documento original.",
      "Solo la versión vigente queda activa, conservando todo el historial.",
    ],
  },
  {
    icon: WalletIcon,
    title: "Movimientos financieros",
    points: [
      "Ingresos y gastos más allá de las facturas: efectivo, transferencia, tarjeta, Bizum, cheque…",
      "Categorías personalizables con iconos y colores.",
      "Adjunta recibos y marca movimientos como recurrentes o conciliados.",
    ],
  },
  {
    icon: BarChart3Icon,
    title: "Dashboard de métricas",
    points: [
      "Ingresos, gastos, beneficio y margen en tiempo real.",
      "Control de IVA repercutido, soportado y saldo.",
      "Tasa de aprobación, aprobación automática y confianza media del OCR.",
    ],
  },
  {
    icon: Building2Icon,
    title: "Proveedores y clientes",
    points: [
      "Alta automática de empresas a partir de las facturas ingeridas.",
      "Detección automática de proveedor (gasto) o cliente (ingreso).",
      "Identificación por CIF/NIF con normalización automática.",
    ],
  },
  {
    icon: FileDownIcon,
    title: "Exportaciones profesionales",
    points: [
      "Exporta en Excel, CSV y PDF.",
      "Vista previa antes de exportar con resúmenes y subtotales.",
      "Informes PDF con diseño cuidado, listos para la gestoría.",
    ],
  },
  {
    icon: PlugIcon,
    title: "Integración vía API",
    points: [
      "API REST para ingesta automatizada desde otros sistemas.",
      "Claves API seguras con entornos live y test.",
    ],
  },
]

export default function FacturiaFeatures() {
  return (
    <section id="funcionalidades" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-facturia/30 bg-facturia/10 px-4 py-1.5 text-xs font-semibold text-facturia">
            Funcionalidades
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Todo lo que necesitas para{" "}
            <span className="bg-linear-to-r from-facturia to-facturia-dark bg-clip-text text-transparent">
              dejar de teclear
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Desde la captura hasta el informe final, FacturIA cubre el ciclo completo de tus
            documentos contables.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
            <div
              key={f.title}
              className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-facturia-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-facturia/40 hover:shadow-xl hover:shadow-facturia/5"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-facturia/12">
                <Icon className="size-5 text-facturia" />
              </div>
              <h3 className="text-base font-semibold leading-tight text-facturia-fg">
                {f.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {f.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-snug text-slate-400">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-facturia" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
