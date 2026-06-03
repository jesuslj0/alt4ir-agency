import { FolderTreeIcon, TableIcon, WorkflowIcon, ArrowRightIcon, CheckIcon } from "lucide-react"

const benefits = [
  "Cada factura procesada se archiva ordenada en tu Google Drive, por empresa y periodo.",
  "Los datos extraídos se vuelcan automáticamente en Google Sheets, listos para consultar.",
  "La automatización OCR corre sobre n8n: sin copiar, pegar ni mover archivos a mano.",
]

export default function FacturiaIntegrations() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-facturia-card/60 backdrop-blur-sm">
          <div className="grid items-center gap-10 p-8 md:grid-cols-2 md:p-12">
            {/* Texto */}
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-facturia/30 bg-facturia/10 px-4 py-1.5 text-xs font-semibold text-facturia">
                <WorkflowIcon className="size-3.5" />
                Integración & automatización
              </span>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Lo complementamos con{" "}
                <span className="bg-linear-to-r from-facturia to-facturia-dark bg-clip-text text-transparent">
                  Google Drive y Sheets
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Más allá de la plataforma, organizamos tu información en Google Drive y Google
                Sheets, que se completan solos desde la automatización OCR construida sobre n8n.
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-facturia/15">
                      <CheckIcon className="size-3 text-facturia" />
                    </span>
                    <span className="text-sm leading-snug text-slate-300">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagrama de integración */}
            <div className="flex flex-col items-center gap-4">
              <IntegrationNode icon={<WorkflowIcon className="size-6 text-facturia" />} label="OCR · n8n" sub="Automatización" />
              <ArrowRightIcon className="size-5 rotate-90 text-facturia/50" />
              <div className="grid w-full grid-cols-2 gap-4">
                <IntegrationNode icon={<FolderTreeIcon className="size-6 text-facturia" />} label="Google Drive" sub="Archivado ordenado" />
                <IntegrationNode icon={<TableIcon className="size-6 text-facturia" />} label="Google Sheets" sub="Datos volcados" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegrationNode({
  icon,
  label,
  sub,
}: {
  icon: React.ReactNode
  label: string
  sub: string
}) {
  return (
    <div className="flex w-full flex-col items-center gap-2 rounded-2xl border border-white/8 bg-facturia-bg px-4 py-5 text-center">
      <div className="flex size-12 items-center justify-center rounded-xl bg-facturia/12">{icon}</div>
      <p className="text-sm font-semibold text-facturia-fg">{label}</p>
      <p className="text-xs text-facturia-muted">{sub}</p>
    </div>
  )
}
