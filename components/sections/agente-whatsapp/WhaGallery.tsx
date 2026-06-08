import Image from "next/image"

const screens = [
  {
    src: "/img/autoclinic/panel.png",
    title: "Panel de control",
    description:
      "Vista rápida del día: citas de hoy, solicitudes pendientes de confirmación y cancelaciones, todo en un vistazo.",
  },
  {
    src: "/img/autoclinic/agenda.png",
    title: "Agenda semanal",
    description:
      "El calendario sobre el que opera el agente: horarios de cada profesional, franjas laborables y huecos disponibles en tiempo real.",
  },
  {
    src: "/img/autoclinic/base-conocimiento.png",
    title: "Base de conocimiento",
    description:
      "Las FAQs, ubicación y políticas que defines aquí son la fuente con la que el agente responde a tus pacientes — siempre con tu información.",
  },
]

export default function WhaGallery() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-wha-alt/30 bg-wha-alt/10 px-4 py-1.5 text-xs font-semibold text-wha-alt">
            El agente en acción
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-wha-fg md:text-4xl">
            Tú controlas,{" "}
            <span className="bg-linear-to-r from-wha-alt to-wha-teal bg-clip-text text-transparent">
              el agente ejecuta
            </span>
          </h2>
          <p className="mt-4 text-wha-muted">
            El panel desde el que gestionas servicios, agenda y profesionales. El agente trabaja sobre estos mismos datos.
          </p>
        </div>

        {/* Capturas reales de la app */}
        <div className="mx-auto flex max-w-4xl flex-col gap-12">
          {screens.map((screen, i) => (
            <div key={screen.src} className="flex flex-col gap-5">
              {/* Marco tipo navegador */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-wha-card/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
                <div className="flex items-center gap-2 border-b border-white/8 bg-white/5 px-4 py-3">
                  <span className="size-3 rounded-full bg-rose-400/70" />
                  <span className="size-3 rounded-full bg-amber-400/70" />
                  <span className="size-3 rounded-full bg-emerald-400/70" />
                  <div className="ml-2 flex-1 truncate rounded-md bg-black/20 px-3 py-1 text-center font-mono text-xs text-wha-muted">
                    app.autoclinic.es
                  </div>
                </div>
                <Image
                  src={screen.src}
                  alt={`AutoClinic — ${screen.title}`}
                  width={1900}
                  height={910}
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority={i === 0}
                  className="h-auto w-full"
                />
              </div>

              {/* Caption */}
              <div className="px-1 text-center">
                <h3 className="text-lg font-semibold text-wha-fg">{screen.title}</h3>
                <p className="mx-auto mt-1.5 max-w-xl text-sm leading-relaxed text-wha-muted">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
