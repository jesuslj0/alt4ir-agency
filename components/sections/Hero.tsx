"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, SparklesIcon, BotIcon, MonitorIcon, TrendingUpIcon, SearchIcon, LightbulbIcon, RocketIcon } from "lucide-react"
import { SplineScene } from "@/components/ui/spline-scene"

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-stretch pt-24 pb-16 md:block md:min-h-0 md:pt-44 md:pb-28 2xl:pt-56 2xl:pb-36 overflow-hidden bg-transparent">

      {/* Spline background — en móvil el canvas se ensancha y se desplaza para
          correr la escena a la izquierda sin dejar bordes vacíos */}
      <div className="absolute inset-y-0 left-0 z-0 w-[180%] -translate-x-[40%] md:w-full md:translate-x-0">
        <SplineScene
          scene="https://prod.spline.design/Xup3h6IBrMohCZ2d/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 flex w-full max-w-6xl mx-auto px-4 2xl:max-w-7xl">
        <div className="flex flex-1 flex-col items-center justify-between text-center md:flex-initial md:items-start md:justify-start md:text-left">

          {/* Grupo superior: eyebrow + título */}
          <div className="flex flex-col items-center md:items-start mt-6">
            <Badge
              variant="outline"
              className="mb-6 gap-1.5 border-brand-teal/40 text-brand-teal dark:border-brand-teal/40 dark:text-brand-teal py-1 px-3 h-auto rounded-full"
            >
              <SparklesIcon className="size-3" />
              Más tiempo para lo que importa
            </Badge>

            <h1 className="max-w-4xl 2xl:max-w-5xl flex flex-col">
              <span className="block text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-tight text-foreground/75 leading-snug">
                Tu tiempo es demasiado valioso
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight leading-[1.1] bg-linear-to-r from-brand-sky via-brand-teal to-brand-green bg-clip-text text-transparent">
                para gastarlo<br/> en esto.
              </span>
            </h1>
          </div>

          {/* Grupo inferior: párrafo + botones */}
          <div className="flex flex-col items-center md:items-start">
            <p className="mt-6 text-base text-muted-foreground max-w-xl md:text-lg 2xl:text-xl 2xl:max-w-2xl leading-loose">
              Automatizamos tus citas, tus documentos y mejoramos tu presencia online para que dejes de hacer en horas lo que puede hacerse solo.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center md:items-start gap-4">
              <Button
                size="lg"
                className="bg-brand-emerald hover:bg-brand-teal text-background font-semibold gap-2 h-11 px-6"
                asChild
              >
                <Link href="/#proceso">
                  Ver cómo funciona
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-11 px-6" asChild>
                <Link href="/#contacto">Habla con nosotros</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
