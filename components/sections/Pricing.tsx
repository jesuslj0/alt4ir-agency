import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { GlowCard } from "@/components/ui/glow-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckIcon } from "lucide-react"
import Link from "next/link"

type Plan = {
  name: string
  price: string
  priceNote?: string
  description: string
  features: string[]
  cta: string
  href: string
  highlighted: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: "Consultoría",
    price: "Gratis",
    description: "Descubre el potencial de automatización de tu negocio sin compromiso.",
    features: [
      "Auditoría de procesos (1 área)",
      "Reporte de oportunidades de IA",
      "Llamada de estrategia 30 min",
      "Estudiamos tu caso paso por paso",
    ],
    cta: "Agendar consultoría",
    href: "#contacto",
    highlighted: false,
  },
  {
    name: "Automatización",
    price: "",
    description: "Implementación completa de automatizaciones con soporte y seguimiento.",
    features: [
      "Todos los sistemas que necesites",
      "Integración con tus herramientas",
      "Dashboard de métricas",
      "Soporte prioritario 1 mes",
      "Sesiones de revisión mensuales",
    ],
    cta: "Comenzar proyecto",
    href: "#contacto",
    highlighted: true,
    badge: "Más popular",
  },
  {
    name: "Transformación Digital",
    price: "A medida",
    description: "Para emprendedores que buscan ser referentes tecnológicos en su nicho.",
    features: [
      "Todo en Automatización",
      "Agentes IA personalizados",
      "Integraciones enterprise",
      "SLA garantizado",
      "Equipo dedicado",
    ],
    cta: "Hablar con un profesional",
    href: "#contacto",
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Planes que se adaptan{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
              a tu negocio
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Desde un diagnóstico gratuito hasta transformación digital completa. Empieza donde tenga más sentido para tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <GlowCard key={plan.name} className={plan.highlighted ? "h-full ring-2 ring-violet-500" : "h-full"}>
            <Card
              className="border-0 bg-transparent shadow-none ring-0 rounded-none flex flex-col h-full"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-1">
                  <CardTitle className={plan.highlighted ? "text-2xl" : "text-base"}>{plan.name}</CardTitle>
                  {plan.badge && (
                    <Badge className="bg-violet-600 text-white dark:bg-violet-500">
                      {plan.badge}
                    </Badge>
                  )}
                </div>
                {plan.price && (
                  <div className="mt-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.priceNote && (
                      <span className="text-sm text-muted-foreground ml-1">{plan.priceNote}</span>
                    )}
                  </div>
                )}
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckIcon className="size-4 text-violet-600 dark:text-violet-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto pt-6">
                <Button
                  className={
                    plan.highlighted
                      ? "w-full bg-violet-600 hover:bg-violet-700 text-white dark:bg-violet-500 dark:hover:bg-violet-600"
                      : "w-full border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.45)] hover:shadow-[0_0_20px_rgba(59,130,246,0.75)] hover:border-blue-400 transition-shadow duration-300"
                  }
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
