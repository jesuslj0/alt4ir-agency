import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { GlowCard } from "@/components/ui/glow-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckIcon, GlobeIcon, FileTextIcon, MessageCircleIcon } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

type Module = {
  icon: LucideIcon
  label: string
}

type Plan = {
  name: string
  price: string
  priceNote?: string
  description: string
  modules?: Module[]
  features: string[]
  cta: string
  href: string
  highlighted: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: "Diagnóstico",
    price: "Gratis",
    description: "Una sesión seria para entender tu negocio y ver qué se puede automatizar — trabajes o no con nosotros.",
    features: [
      "Sesión de 30 min, sin tecnicismos",
      "Analizamos cómo trabajas hoy",
      "Detectamos dónde pierdes tiempo y dinero",
      "Te llevas una hoja de ruta clara",
    ],
    cta: "Reservar diagnóstico",
    href: "https://calendar.app.google/CNBch8s1Q8iqoqdE9",
    highlighted: false,
  },
  {
    name: "Tu solución a medida",
    price: "Sin compromiso",
    description: "Coge solo lo que necesitas: un servicio, dos o los que te hagan falta. Pagas por lo que te aporta valor.",
    modules: [
      { icon: GlobeIcon, label: "Diseño web" },
      { icon: FileTextIcon, label: "Gestión documental" },
      { icon: MessageCircleIcon, label: "Agente WhatsApp" },
    ],
    features: [
      "Nos encargamos de todo, de principio a fin",
      "Integración con tus herramientas",
      "1 mes de soporte y ajustes incluido",
    ],
    cta: "Pedir presupuesto",
    href: "https://calendar.app.google/CNBch8s1Q8iqoqdE9",
    highlighted: true,
    badge: "Más elegido",
  },
  {
    name: "Partner tecnológico",
    price: "Cuota mensual",
    description: "Una vez en marcha, seguimos a tu lado para que todo mejore mes a mes y tu negocio no se quede atrás.",
    features: [
      "Soporte prioritario",
      "Mejoras y mantenimiento continuo",
      "Nuevas automatizaciones cuando las necesites",
      "Métricas y revisión mensual",
    ],
    cta: "Quiero ser partner",
    href: "https://calendar.app.google/CNBch8s1Q8iqoqdE9",
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Planes que se adaptan{" "}
            <span className="bg-linear-to-r from-brand-sky to-brand-emerald bg-clip-text text-transparent">
              a tu negocio
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Empieza con un diagnóstico gratis y monta solo lo que tu negocio necesita. Sin paquetes cerrados ni letra pequeña.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <GlowCard key={plan.name} className={plan.highlighted ? "h-full ring-2 ring-brand-teal" : "h-full"}>
            <Card
              className="border-0 bg-transparent shadow-none ring-0 rounded-none flex flex-col h-full"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-1">
                  <CardTitle className={plan.highlighted ? "text-2xl" : "text-base"}>{plan.name}</CardTitle>
                  {plan.badge && (
                    <Badge className="bg-brand-emerald text-background font-semibold">
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
                {plan.modules && (
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {plan.modules.map((mod) => {
                      const ModIcon = mod.icon
                      return (
                        <div
                          key={mod.label}
                          className="flex flex-col items-center gap-1.5 rounded-lg border border-brand-teal/25 bg-brand-teal/5 px-2 py-3 text-center"
                        >
                          <ModIcon className="size-4 text-brand-teal" />
                          <span className="text-[11px] font-medium leading-tight">{mod.label}</span>
                        </div>
                      )
                    })}
                  </div>
                )}
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckIcon className="size-4 text-brand-teal mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto pt-6">
                <Button
                  className={
                    plan.highlighted
                      ? "w-full bg-brand-emerald hover:bg-brand-teal text-background font-semibold"
                      : "w-full border-brand-sky shadow-[0_0_10px_rgba(0,172,253,0.4)] hover:shadow-[0_0_20px_rgba(0,253,202,0.7)] hover:border-brand-teal transition-shadow duration-300"
                  }
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.href} target="_blank" rel="noopener noreferrer">{plan.cta}</Link>
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
