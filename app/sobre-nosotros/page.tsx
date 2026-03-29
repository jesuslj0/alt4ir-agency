import type { Metadata } from "next"
import Link from "next/link"
import { Brain, Cpu, Workflow, Zap, MapPin, TrendingUp, Code, Handshake, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema"

export const metadata: Metadata = {
  title: "Sobre Nosotros — Alt4ir | Agencia de IA en Albacete",
  description:
    "Alt4ir es una agencia de inteligencia artificial y automatización en Albacete, Castilla-La Mancha. Desarrollamos aplicaciones con IA, automatizamos procesos y creamos agentes inteligentes para empresas.",
  keywords: [
    "agencia IA Albacete",
    "automatización Albacete",
    "inteligencia artificial Castilla-La Mancha",
    "desarrollo IA",
    "Alt4ir",
    "agentes inteligentes Albacete",
  ],
  openGraph: {
    title: "Sobre Nosotros — Alt4ir | Agencia de IA en Albacete",
    description:
      "Agencia de inteligencia artificial y automatización en Albacete. Desarrollo de apps con IA, automatización de procesos y agentes inteligentes.",
    type: "website",
    locale: "es_ES",
  },
}

const differentiators = [
  {
    icon: Brain,
    title: "Especialización en IA",
    description:
      "No somos una consultora generalista. Vivimos y respiramos inteligencia artificial aplicada. Cada solución que diseñamos aprovecha lo último en modelos de lenguaje, visión artificial y automatización inteligente.",
  },
  {
    icon: MapPin,
    title: "Enfoque local",
    description:
      "Con base en Albacete, conocemos de primera mano las necesidades de las empresas de Castilla-La Mancha. Ofrecemos un trato cercano y personalizado que las grandes consultoras no pueden igualar.",
  },
  {
    icon: TrendingUp,
    title: "Resultados medibles",
    description:
      "Cada proyecto se diseña con KPIs claros desde el primer día. Medimos el retorno de inversión, el tiempo ahorrado y el impacto real en tu negocio para asegurar que la IA trabaja para ti.",
  },
]

const teamSquads = [
  {
    icon: Code,
    label: "Equipo Dev",
    members: 2,
    skills: ["Python & Django", "JavaScript & React", "Sistemas de IA", "Automatización inteligente", "n8n", "Make"],
    description:
      "Un desarrollador de software especializado en Python, Django y JavaScript, y un experto en sistemas de inteligencia artificial. Juntos, convierten cualquier idea en una solución técnica real.",
  },
  {
    icon: Handshake,
    label: "Equipo Comercial",
    members: 2,
    skills: ["Estrategia de ventas", "Consultoría de negocio", "Closing", "Formados en Ideal Sales"],
    description:
      "Dos closers formados en la academia de ventas más grande de España. Entienden tu negocio, detectan oportunidades y te acompañan de principio a fin.",
  },
]

export default function SobreNosotrosPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Navbar />
      <main className="relative z-10">
        {/* Hero */}
        <section className="px-4 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              La agencia de IA que impulsa negocios en{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-600 bg-clip-text text-transparent">
                Albacete y Castilla-La Mancha
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Alt4ir es una agencia de inteligencia artificial y automatización
              con sede en Albacete. Ayudamos a empresas locales y nacionales a
              integrar IA en sus procesos para ser más eficientes, competitivas
              y rentables.
            </p>
          </div>
        </section>

        {/* Nuestra misión */}
        <section className="px-4 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
                Nuestra{" "}
                <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                  misión
                </span>
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Creemos que la inteligencia artificial no debería ser un
                privilegio de las grandes corporaciones. Nuestra misión es
                acercar los servicios de IA en Albacete y toda España a
                empresas de cualquier tamaño, democratizando el acceso a
                tecnología que transforma negocios.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Nos especializamos en la automatización de procesos para pymes
                en Castilla-La Mancha, diseñando soluciones a medida que
                eliminan tareas repetitivas y liberan a los equipos para que se
                concentren en lo que realmente importa: hacer crecer su negocio.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Como agencia de inteligencia artificial, combinamos desarrollo
                de software, integración de agentes inteligentes y consultoría
                estratégica para ofrecer un servicio completo, desde la idea
                hasta la implementación en producción.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6">
                {[Brain, Cpu, Workflow, Zap].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex size-24 items-center justify-center rounded-2xl border border-border bg-violet-600/5"
                  >
                    <Icon className="size-10 text-violet-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Qué nos diferencia */}
        <section className="px-4 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-2xl font-bold tracking-tight md:text-3xl">
              Qué nos diferencia
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {differentiators.map((item) => (
                <Card
                  key={item.title}
                  className="border-border bg-card transition-shadow hover:shadow-lg"
                >
                  <CardContent className="pt-6">
                    <item.icon className="mb-4 size-8 text-violet-400" />
                    <h3 className="mb-2 text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section id="equipo" className="px-4 py-20 md:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                El equipo detrás de Alt4ir
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                Somos 4 emprendedores unidos por una misma misión: traer el
                poder de la IA a las empresas de nuestro país. Nacimos del hambre
                de ayudar a negocios a escalar, crecer y liberarse de cargas que,
                a día de hoy, son innecesarias.
              </p>
            </div>

            {/* Panel único */}
            <div className="rounded-3xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden">
              {/* Header del panel */}
              <div className="border-b border-border bg-violet-600/5 px-6 py-8 text-center md:px-10">
                <div className="mx-auto mb-4 flex items-center justify-center gap-3">
                  <Users className="size-6 text-violet-400" />
                  <span className="text-2xl font-bold tracking-tight">4 fundadores</span>
                </div>
                <div className="mx-auto flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Rocket className="size-4 text-violet-400" />
                  <span>De Albacete para toda España — construyendo el futuro de tu negocio</span>
                </div>
              </div>

              {/* Squads */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                {teamSquads.map((squad) => (
                  <div key={squad.label} className="p-6 md:p-10">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-violet-600/10">
                        <squad.icon className="size-6 text-violet-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{squad.label}</h3>
                        <p className="text-sm text-violet-400">{squad.members} cofundadores</p>
                      </div>
                    </div>

                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                      {squad.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {squad.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-violet-500/20 bg-violet-600/5 px-3 py-1 text-xs text-violet-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dónde estamos */}
        <section className="px-4 py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
              Con base en Albacete, impacto global
            </h2>
            <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-muted-foreground">
              Trabajamos con empresas de toda España y más allá, pero nuestras
              raíces están en Castilla-La Mancha. Nuestro enfoque local nos
              permite ofrecer un servicio cercano y personalizado.
            </p>
            <div className="mb-8 inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-5 text-violet-400" />
              <span>Albacete, Castilla-La Mancha, España</span>
            </div>
            <p className="mb-8 text-muted-foreground">
              salesteam@alt4ir.com
            </p>
            <Button
              size="lg"
              className="bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
              asChild
            >
              <Link href="/#contacto">Agendar llamada</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
