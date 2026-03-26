import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BotIcon, CodeIcon, PlugIcon, ShieldCheckIcon, BarChart3Icon, RefreshCwIcon } from "lucide-react"

const features = [
  {
    icon: BotIcon,
    title: "Implementación de Sistemas Inteligentes",
    description:
      "Eliminamos tareas manuales con agentes de IA que trabajan 24/7, reduciendo errores y costos operativos hasta un 80%.",
  },
  {
    icon: CodeIcon,
    title: "Desarrollo con IA integrada",
    description:
      "Construimos aplicaciones con inteligencia artificial desde el primer día, listas para escalar con el crecimiento de tu negocio.",
  },
  {
    icon: PlugIcon,
    title: "Integración sin fricción",
    description:
      "Conectamos agentes inteligentes a tus sistemas existentes — CRM, ERP, APIs — sin interrumpir tu operación actual.",
  },
  {
    icon: BarChart3Icon,
    title: "Analítica en tiempo real",
    description:
      "Dashboards y reportes automáticos que transforman datos operativos en decisiones de negocio accionables.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Seguridad empresarial",
    description:
      "Implementaciones con cifrado end-to-end, control de accesos y cumplimiento normativo desde el diseño.",
  },
  {
    icon: RefreshCwIcon,
    title: "Optimización continua",
    description:
      "Monitoreamos y mejoramos tus automatizaciones constantemente para que el rendimiento aumente con el tiempo.",
  },
]

export default function Features() {
  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Todo lo que necesitas{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              para automatizar
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Desde la estrategia hasta la implementación, cubrimos todo el ciclo para que tu empresa opere con IA de forma efectiva.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="size-10 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center mb-2">
                    <Icon className="size-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
