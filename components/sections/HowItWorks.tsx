import { SearchIcon, PenToolIcon, RocketIcon } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: SearchIcon,
    title: "Diagnóstico",
    description:
      "Analizamos tus flujos actuales e identificamos las oportunidades de automatización con mayor impacto en tiempo y costos.",
  },
  {
    number: "02",
    icon: PenToolIcon,
    title: "Diseño de solución",
    description:
      "Creamos la arquitectura ideal con las herramientas de IA correctas para tu caso: agentes, modelos, integraciones y flujos.",
  },
  {
    number: "03",
    icon: RocketIcon,
    title: "Implementación y escala",
    description:
      "Desplegamos en producción, medimos resultados y optimizamos continuamente para maximizar el retorno de inversión.",
  },
]

export default function HowItWorks() {
  return (
    <section id="proceso" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Cómo{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              trabajamos
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Un proceso claro y probado para llevar tu negocio de procesos manuales a automatización inteligente en semanas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex flex-col gap-4 relative">
                {/* Connector line (hidden on mobile, visible between cards) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(100%+1rem)] w-[calc(2rem-2px)] h-0.5 bg-violet-200 dark:bg-violet-800" />
                )}
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-2xl bg-violet-600 dark:bg-violet-500 flex items-center justify-center shrink-0 shadow-lg shadow-violet-500/20">
                    <Icon className="size-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-violet-200 dark:text-violet-800 select-none">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
