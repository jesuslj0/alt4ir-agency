"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, SparklesIcon, BotIcon, ZapIcon, TrendingUpIcon } from "lucide-react"
import { GradientDots } from "@/components/ui/gradient-dots"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-transparent">

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:gap-12">

          {/* Left: badge + title + subtitle + buttons */}
          <div className="flex flex-col items-center md:items-start md:flex-1">
            <Badge
              variant="outline"
              className="mb-6 gap-1.5 border-violet-300 text-violet-700 dark:border-violet-700 dark:text-violet-400 py-1 px-3 h-auto rounded-full"
            >
              <SparklesIcon className="size-3" />
              Agencia de IA &amp; Consultoría
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              Recupera el control de tu negocio{" "}
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                con sistemas inteligentes
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl md:text-xl leading-relaxed">
              Personalizamos aplicaciones en base a tus necesidades y automatizamos procesos repetitivos para que tu equipo se enfoque en lo que realmente importa.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center md:items-start gap-4">
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
          </div>

          {/* Right: mockup — square, centered */}
          <div className="mt-16 md:mt-0 md:flex-1 flex items-center justify-center w-full max-w-3xl md:max-w-none">
            <div className="w-full aspect-square max-w-md rounded-2xl border border-border/60 bg-card shadow-2xl shadow-violet-500/10 ring-1 ring-foreground/5 overflow-hidden flex flex-col">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/60 bg-muted/30">
                <div className="size-3 rounded-full bg-red-400/70" />
                <div className="size-3 rounded-full bg-yellow-400/70" />
                <div className="size-3 rounded-full bg-green-400/70" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">alt4ir — workflow.ai</span>
              </div>
              <div className="relative flex-1 flex items-center justify-center p-6 md:p-10 overflow-hidden">
                <GradientDots duration={20} className="rounded-b-2xl" />
                <div className="relative z-10 grid grid-cols-3 gap-2 md:gap-6 w-full">
                  <div className="flex flex-col items-center gap-2 md:gap-3 rounded-xl bg-background border border-border p-2.5 md:p-6 shadow-sm">
                    <div className="size-10 md:size-12 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
                      <BotIcon className="size-5 md:size-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-center leading-tight hyphens-auto">Agente IA</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 md:gap-3 rounded-xl bg-background border border-border p-2.5 md:p-6 shadow-sm">
                    <div className="size-10 md:size-12 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
                      <ZapIcon className="size-5 md:size-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-center leading-tight hyphens-auto">Automatización</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 md:gap-3 rounded-xl bg-background border border-border p-2.5 md:p-6 shadow-sm">
                    <div className="size-10 md:size-12 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
                      <TrendingUpIcon className="size-5 md:size-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-center leading-tight hyphens-auto">Resultados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
