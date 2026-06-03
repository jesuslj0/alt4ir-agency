import Image from "next/image"

const shots = [
  {
    src: "/img/facturia/dashboard.png",
    title: "Panel de inicio",
    description: "Documentos por revisar, resumen financiero del mes y últimos movimientos de un vistazo.",
  },
  {
    src: "/img/facturia/metrics.png",
    title: "Métricas e IVA",
    description: "Ingresos, gastos, beneficio y control de IVA repercutido y soportado por periodo.",
  },
  {
    src: "/img/facturia/documents.png",
    title: "Listado de documentos",
    description: "Todas tus facturas y albaranes con estado, nivel de revisión y confianza del OCR.",
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

        <div className="grid gap-6 sm:grid-cols-2 lg:flex lg:items-start lg:gap-8">
          {shots.map((shot) => (
            <figure
              key={shot.src}
              className="group overflow-hidden rounded-2xl border border-white/8 bg-facturia-card/60 backdrop-blur-sm transition-all duration-500 ease-out hover:border-facturia/40 hover:shadow-xl hover:shadow-facturia/5 lg:flex-1 lg:hover:flex-[3]"
            >
              {/* Barra del navegador */}
              <div className="flex items-center gap-1.5 border-b border-white/8 bg-facturia-bg px-4 py-3">
                <span className="size-3 rounded-full bg-[#ff5f57]" />
                <span className="size-3 rounded-full bg-[#febc2e]" />
                <span className="size-3 rounded-full bg-[#28c840]" />
              </div>

              {/* Captura */}
              <div className="relative aspect-4/3 overflow-hidden bg-facturia-bg">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition-all duration-500 group-hover:object-contain group-hover:object-center"
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

        {/* Segunda fila — detalle de factura */}
        <figure className="group mx-auto mt-6 max-w-3xl overflow-hidden rounded-2xl border border-white/8 bg-facturia-card/60 backdrop-blur-sm transition-all duration-300 hover:border-facturia/40 hover:shadow-xl hover:shadow-facturia/5 lg:mt-8">
          {/* Barra del navegador */}
          <div className="flex items-center gap-1.5 border-b border-white/8 bg-facturia-bg px-4 py-3">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>

          {/* Captura */}
          <div className="relative aspect-4/3 overflow-hidden bg-facturia-bg">
            <Image
              src="/img/facturia/detalle-factura.png"
              alt="Detalle de factura con datos extraídos por OCR"
              fill
              sizes="(max-width: 768px) 100vw, 48rem"
              className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Pie */}
          <figcaption className="flex flex-col gap-1.5 px-6 py-5">
            <h3 className="text-base font-semibold text-facturia-fg">Detalle de factura</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Cada documento con sus datos extraídos por el OCR —base, IVA, total y emisor— y su
              nivel de confianza, listo para aprobar o rectificar.
            </p>
          </figcaption>
        </figure>

        {/* Tercera fila — exportación y gráficos */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mt-8 lg:flex lg:items-start lg:gap-8">
          {[
            {
              src: "/img/facturia/export.png",
              title: "Exportación de documentos",
              description:
                "Descarga tus facturas y datos contables en el formato que necesites, listos para tu gestoría o tu software.",
            },
            {
              src: "/img/facturia/graphics.png",
              title: "Gráficos y automatización",
              description:
                "Evolución de gastos, ingresos y beneficio junto a las estadísticas de automatización del procesado.",
            },
          ].map((shot) => (
            <figure
              key={shot.src}
              className="group overflow-hidden rounded-2xl border border-white/8 bg-facturia-card/60 backdrop-blur-sm transition-all duration-500 ease-out hover:border-facturia/40 hover:shadow-xl hover:shadow-facturia/5 lg:flex-1 lg:hover:flex-[3]"
            >
              {/* Barra del navegador */}
              <div className="flex items-center gap-1.5 border-b border-white/8 bg-facturia-bg px-4 py-3">
                <span className="size-3 rounded-full bg-[#ff5f57]" />
                <span className="size-3 rounded-full bg-[#febc2e]" />
                <span className="size-3 rounded-full bg-[#28c840]" />
              </div>

              {/* Captura */}
              <div className="relative aspect-4/3 overflow-hidden bg-facturia-bg">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition-all duration-500 group-hover:object-contain group-hover:object-center"
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

        {/* Cuarta fila — finanzas */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mt-8 lg:flex lg:items-start lg:gap-8">
          {[
            {
              src: "/img/facturia/finance-categories.png",
              title: "Gastos por categoría",
              description:
                "Amplia variedad de categorías por defecto para separar todos tus movimientos de forma ordenada.",
            },
            {
              src: "/img/facturia/finance-movements.png",
              title: "Movimientos financieros",
              description:
                "Historial completo de movimientos con su importe, método de pago, fecha y categoría, conciliado con tu recibo.",
            },
          ].map((shot) => (
            <figure
              key={shot.src}
              className="group overflow-hidden rounded-2xl border border-white/8 bg-facturia-card/60 backdrop-blur-sm transition-all duration-500 ease-out hover:border-facturia/40 hover:shadow-xl hover:shadow-facturia/5 lg:flex-1 lg:hover:flex-[3]"
            >
              {/* Barra del navegador */}
              <div className="flex items-center gap-1.5 border-b border-white/8 bg-facturia-bg px-4 py-3">
                <span className="size-3 rounded-full bg-[#ff5f57]" />
                <span className="size-3 rounded-full bg-[#febc2e]" />
                <span className="size-3 rounded-full bg-[#28c840]" />
              </div>

              {/* Captura */}
              <div className="relative aspect-4/3 overflow-hidden bg-facturia-bg">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition-all duration-500 group-hover:object-contain group-hover:object-center"
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
