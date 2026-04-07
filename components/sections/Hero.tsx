"use client"

import Link from "next/link"
import { useRef, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, SparklesIcon, BotIcon, MonitorIcon, TrendingUpIcon, SearchIcon, LightbulbIcon, RocketIcon } from "lucide-react"
import { GradientDots } from "@/components/ui/gradient-dots"

function DraggableMockup() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef<{ mx: number; my: number; ox: number; oy: number } | null>(null)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    dragStart.current = { mx: e.clientX, my: e.clientY, ox: offset.x, oy: offset.y }

    const onMove = (ev: MouseEvent) => {
      if (!dragStart.current) return
      setOffset({
        x: dragStart.current.ox + ev.clientX - dragStart.current.mx,
        y: dragStart.current.oy + ev.clientY - dragStart.current.my,
      })
    }
    const onUp = () => {
      setIsDragging(false)
      dragStart.current = null
      setOffset({ x: 0, y: 0 })
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
  }, [offset])

  return (
    <div
      className="w-full max-w-lg 2xl:max-w-xl rounded-2xl border border-border/60 bg-card shadow-2xl shadow-violet-500/10 ring-1 ring-foreground/5 overflow-hidden flex flex-col"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        zIndex: isDragging ? 50 : "auto",
        position: "relative",
      }}
    >
      {/* Barra superior — zona de drag */}
      <div
        onMouseDown={onMouseDown}
        className={`flex items-center gap-1.5 px-4 py-3 border-b border-border/60 bg-muted/30 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        {/* Botones iOS */}
        <div className="group/ios flex items-center gap-1.5">
          <div className="size-3 rounded-full bg-red-400/70 flex items-center justify-center overflow-hidden group-hover/ios:bg-red-500 transition-colors">
            <span className="text-[7px] leading-none text-red-900 opacity-0 group-hover/ios:opacity-100 font-bold">✕</span>
          </div>
          <div className="size-3 rounded-full bg-yellow-400/70 flex items-center justify-center overflow-hidden group-hover/ios:bg-yellow-500 transition-colors">
            <span className="text-[7px] leading-none text-yellow-900 opacity-0 group-hover/ios:opacity-100 font-bold">–</span>
          </div>
          <div className="size-3 rounded-full bg-green-400/70 flex items-center justify-center overflow-hidden group-hover/ios:bg-green-500 transition-colors">
            <span className="text-[7px] leading-none text-green-900 opacity-0 group-hover/ios:opacity-100 font-bold">+</span>
          </div>
        </div>
        <span className="ml-2 text-xs text-muted-foreground font-mono">Fórmula de éxito - Alt4ir</span>
      </div>

      {/* Contenido */}
      <div className="relative flex flex-col gap-4 px-8 py-8 md:px-10 md:py-10 overflow-hidden">
        <GradientDots duration={20} className="rounded-b-2xl" />

        {/* Fila 1: fórmula */}
        <div className="relative z-10 flex items-center justify-center gap-3 md:gap-4 w-full">
          {/* Agente IA */}
          <div className="flex flex-col items-center gap-3 rounded-xl bg-background border border-border px-4 py-5 md:px-6 md:py-6 shadow-sm flex-1">
            <div className="size-11 md:size-13 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
              <BotIcon className="size-5 md:size-6 text-violet-600 dark:text-violet-400" />
            </div>
            <span className="text-xs md:text-sm font-semibold text-center leading-tight">Agente IA</span>
          </div>

          <span className="text-xl md:text-2xl font-light text-muted-foreground/60 shrink-0">+</span>

          {/* Aplicación Web */}
          <div className="flex flex-col items-center gap-3 rounded-xl bg-background border border-border px-4 py-5 md:px-6 md:py-6 shadow-sm flex-1">
            <div className="size-11 md:size-13 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
              <MonitorIcon className="size-5 md:size-6 text-violet-600 dark:text-violet-400" />
            </div>
            <span className="text-xs md:text-sm font-semibold text-center leading-tight">Aplicación Web</span>
          </div>

          <span className="text-xl md:text-2xl font-light text-muted-foreground/60 shrink-0">=</span>

          {/* Resultados */}
          <div className="flex flex-col items-center gap-3 rounded-xl bg-background border border-violet-400/50 px-4 py-5 md:px-6 md:py-6 shadow-sm shadow-violet-500/10 flex-1 ring-1 ring-violet-500/20">
            <div className="size-11 md:size-13 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
              <TrendingUpIcon className="size-5 md:size-6 text-violet-600 dark:text-violet-400" />
            </div>
            <span className="text-xs md:text-sm font-semibold text-center leading-tight text-violet-700 dark:text-violet-400">Resultados</span>
          </div>
        </div>

        {/* Divisor */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex-1 h-px bg-border/60" />
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium">Nuestro proceso</span>
          <div className="flex-1 h-px bg-border/60" />
        </div>

        {/* Fila 2: proceso */}
        <div className="relative z-10 flex items-center justify-center gap-3 md:gap-4 w-full">
          {/* Identificación */}
          <div className="flex flex-col items-center gap-3 rounded-xl bg-background border border-border px-4 py-5 md:px-6 md:py-6 shadow-sm flex-1">
            <div className="size-11 md:size-13 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
              <SearchIcon className="size-5 md:size-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-xs md:text-sm font-semibold text-center leading-tight">Identificar problema</span>
          </div>

          <span className="text-xl md:text-2xl font-light text-muted-foreground/60 shrink-0">→</span>

          {/* Solución */}
          <div className="flex flex-col items-center gap-3 rounded-xl bg-background border border-border px-4 py-5 md:px-6 md:py-6 shadow-sm flex-1">
            <div className="size-11 md:size-13 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
              <LightbulbIcon className="size-5 md:size-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-xs md:text-sm font-semibold text-center leading-tight">Crear solución</span>
          </div>

          <span className="text-xl md:text-2xl font-light text-muted-foreground/60 shrink-0">→</span>

          {/* Implementación */}
          <div className="flex flex-col items-center gap-3 rounded-xl bg-background border border-blue-400/50 px-4 py-5 md:px-6 md:py-6 shadow-sm shadow-blue-500/10 flex-1 ring-1 ring-blue-500/20">
            <div className="size-11 md:size-13 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
              <RocketIcon className="size-5 md:size-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-xs md:text-sm font-semibold text-center leading-tight text-blue-700 dark:text-blue-400">Implementación rápida</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 2xl:pt-56 2xl:pb-36 overflow-hidden bg-transparent">

      <div className="max-w-6xl mx-auto px-4 2xl:max-w-7xl">
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

            <h1 className="max-w-4xl 2xl:max-w-5xl">
              <span className="block text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold tracking-tight text-foreground/75 leading-snug">
                Recupera el control <br />de tu negocio
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                con sistemas inteligentes
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl md:text-xl 2xl:text-2xl 2xl:max-w-2xl leading-relaxed">
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

          {/* Right: mockup draggable */}
          <div className="mt-16 md:mt-0 md:flex-1 flex items-center justify-center w-full max-w-3xl md:max-w-none">
            <DraggableMockup />
          </div>

        </div>
      </div>
    </section>
  )
}
