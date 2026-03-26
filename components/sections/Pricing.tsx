import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { GlowCard } from "@/components/ui/glow-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckIcon } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Diagnóstico",
    price: "Gratis",
    description: "Descubre el potencial de automatización de tu negocio sin compromiso.",
    features: [
      "Auditoría de procesos (1 área)",
      "Reporte de oportunidades de IA",
      "Llamada de estrategia 30 min",
      "Demo de automatización en vivo",
    ],
    cta: "Agendar diagnóstico",
    href: "#contacto",
    highlighted: false,
  },
  {
    name: "Automatización",
    price: "Desde $3,000",
    priceNote: "por proyecto",
    description: "Implementación completa de automatizaciones con soporte y seguimiento.",
    features: [
      "Todo en Diagnóstico",
      "Hasta 3 automatizaciones",
      "Integración con tus herramientas",
      "Dashboard de métricas",
      "Soporte prioritario 3 meses",
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
    description: "Para empresas que buscan una transformación profunda con IA en toda su operación.",
    features: [
      "Todo en Automatización",
      "Automatizaciones ilimitadas",
      "Agentes IA personalizados",
      "Integraciones enterprise",
      "SLA garantizado",
      "Equipo dedicado",
    ],
    cta: "Hablar con ventas",
    href: "#contacto",
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
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
            <GlowCard key={plan.name} glowColor="purple" className={plan.highlighted ? "ring-2 ring-violet-500" : ""}>
            <Card
              className="border-0 bg-transparent shadow-none"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-1">
                  <CardTitle className="text-base">{plan.name}</CardTitle>
                  {plan.badge && (
                    <Badge className="bg-violet-600 text-white dark:bg-violet-500">
                      {plan.badge}
                    </Badge>
                  )}
                </div>
                <div className="mt-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.priceNote && (
                    <span className="text-sm text-muted-foreground ml-1">{plan.priceNote}</span>
                  )}
                </div>
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
                      : "w-full"
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
