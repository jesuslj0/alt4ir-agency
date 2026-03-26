import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, SparklesIcon, BotIcon, ZapIcon, TrendingUpIcon } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-50/30 to-transparent dark:from-violet-950/10 dark:to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[400px] rounded-full bg-violet-400/10 dark:bg-violet-600/5 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Badge
            variant="outline"
            className="mb-6 gap-1.5 border-violet-300 text-violet-700 dark:border-violet-700 dark:text-violet-400 py-1 px-3 h-auto rounded-full"
          >
            <SparklesIcon className="size-3" />
            Agencia de IA &amp; Automatización
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl max-w-4xl leading-[1.1]">
            Automatiza tu negocio{" "}
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              con inteligencia artificial
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl md:text-xl leading-relaxed">
            Desarrollamos aplicaciones con IA y automatizamos procesos repetitivos para que tu equipo se enfoque en lo que realmente importa.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white dark:bg-violet-500 dark:hover:bg-violet-600 gap-2 h-11 px-6"
              asChild
            >
              <Link href="#contacto">
                Hablar con un experto
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-11 px-6" asChild>
              <Link href="#servicios">Ver casos de uso</Link>
            </Button>
          </div>

          {/* Decorative mockup */}
          <div className="mt-16 w-full max-w-3xl rounded-2xl border border-border/60 bg-card shadow-2xl shadow-violet-500/10 ring-1 ring-foreground/5 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/60 bg-muted/30">
              <div className="size-3 rounded-full bg-red-400/70" />
              <div className="size-3 rounded-full bg-yellow-400/70" />
              <div className="size-3 rounded-full bg-green-400/70" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">alt4ir — workflow.ai</span>
            </div>
            <div className="p-8 bg-muted/20">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex flex-col items-center gap-3 rounded-xl bg-background border border-border p-5 shadow-sm min-w-32">
                  <div className="size-10 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
                    <BotIcon className="size-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <span className="text-xs font-medium">Agente IA</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="h-0.5 w-8 bg-violet-300 dark:bg-violet-700 rounded" />
                  <div className="h-0.5 w-8 bg-violet-200 dark:bg-violet-800 rounded" />
                </div>
                <div className="flex flex-col items-center gap-3 rounded-xl bg-background border border-border p-5 shadow-sm min-w-32">
                  <div className="size-10 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
                    <ZapIcon className="size-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <span className="text-xs font-medium">Automatización</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="h-0.5 w-8 bg-violet-300 dark:bg-violet-700 rounded" />
                  <div className="h-0.5 w-8 bg-violet-200 dark:bg-violet-800 rounded" />
                </div>
                <div className="flex flex-col items-center gap-3 rounded-xl bg-background border border-border p-5 shadow-sm min-w-32">
                  <div className="size-10 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
                    <TrendingUpIcon className="size-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <span className="text-xs font-medium">Resultados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
