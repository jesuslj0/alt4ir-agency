import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Automatizamos el 80% de nuestra gestión de leads en 3 semanas. El equipo de Alt4ir entendió exactamente lo que necesitábamos y lo ejecutaron sin fricción.",
    name: "Laura Mendoza",
    role: "CEO",
    company: "StartupX",
    initials: "LM",
  },
  {
    quote:
      "Pasamos de procesar 100 facturas al día manualmente a más de 1,000 de forma automática. Recuperamos el ROI en menos de 6 semanas.",
    name: "Carlos Ríos",
    role: "CFO",
    company: "DataBridge",
    initials: "CR",
  },
  {
    quote:
      "La integración con nuestro CRM fue perfecta y sin interrupciones. Ahora tenemos visibilidad total del pipeline sin ningún trabajo manual.",
    name: "Ana González",
    role: "Head of Operations",
    company: "TechVentures",
    initials: "AG",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Empresas que ya automatizaron sus procesos con Alt4ir y transformaron su operación.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="flex flex-col">
              <CardContent className="flex flex-col gap-6 pt-6 h-full">
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center shrink-0">
                    <span className="text-xs font-semibold text-violet-700 dark:text-violet-300">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
