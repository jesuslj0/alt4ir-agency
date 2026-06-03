import Image from "next/image"

const shots = [
  {
    src: "/img/facturia/factura-ocr.png",
    title: "Captura OCR con IA",
    description: "Cada dato extraído con su nivel de confianza, para saber qué revisar.",
  },
  {
    src: "/img/facturia/aprobaciones.png",
    title: "Revisión y aprobación",
    description: "Cola de documentos con estados claros y trazabilidad completa.",
  },
  {
    src: "/img/facturia/movimientos.png",
    title: "Movimientos financieros",
    description: "Ingresos y gastos con categorías, recibos y conciliación.",
  },
  {
    src: "/img/facturia/export.png",
    title: "Exportaciones e informes",
    description: "Vista previa y exportación en Excel, CSV y PDF para tu gestoría.",
  },
]

export default function FacturiaGallery() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-facturia/30 bg-facturia/10 px-4 py-1.5 text-xs font-semibold text-facturia">
            La plataforma por dentro
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Así se ve{" "}
            <span className="bg-linear-to-r from-facturia to-facturia-dark bg-clip-text text-transparent">
              FacturIA
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Capturas reales de la plataforma: del documento al informe contable, todo en un
            mismo entorno.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {shots.map((shot) => (
            <figure
              key={shot.src}
              className="group overflow-hidden rounded-2xl border border-white/8 bg-facturia-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-facturia/40 hover:shadow-xl hover:shadow-facturia/5"
            >
              {/* Barra del navegador */}
              <div className="flex items-center gap-1.5 border-b border-white/8 bg-facturia-bg px-4 py-3">
                <span className="size-3 rounded-full bg-[#ff5f57]" />
                <span className="size-3 rounded-full bg-[#febc2e]" />
                <span className="size-3 rounded-full bg-[#28c840]" />
              </div>

              {/* Captura */}
              <div className="relative aspect-16/10 overflow-hidden bg-facturia-bg">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Pie */}
              <figcaption className="flex flex-col gap-1.5 px-6 py-5">
                <h3 className="text-base font-semibold text-facturia-fg">{shot.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{shot.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
