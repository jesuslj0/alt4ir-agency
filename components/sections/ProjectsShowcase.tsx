"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { ArrowUpRightIcon } from "lucide-react"
import { GradientDots } from "@/components/ui/gradient-dots"
import { cn } from "@/lib/utils"

export interface ShowcaseProject {
  /** Nombre del proyecto / cliente */
  title: string
  /** URL pública de la landing (se muestra en la barra del navegador y enlaza la card) */
  url?: string
  /** Texto que se muestra en la barra de direcciones del marco */
  domain?: string
  /** Descripción breve */
  description: string
  /** Etiquetas (stack, sector, etc.) */
  tags?: string[]
  /** Ruta del screenshot en /public. Si no se indica, se usa un placeholder con gradiente */
  image?: string
}

interface ProjectsShowcaseProps {
  eyebrow: string
  /** Icono (react-icons) ya renderizado que se muestra junto al eyebrow */
  icon?: ReactNode
  title: string
  highlight: string
  description: string
  projects: ShowcaseProject[]
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.08 },
  }),
}

export default function ProjectsShowcase({
  eyebrow,
  icon,
  title,
  highlight,
  description,
  projects,
}: ProjectsShowcaseProps) {
  return (
    <section className="relative z-10 px-4 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-6xl">
        {/* Cabecera */}
        <div className="mb-14 flex flex-col items-center gap-5 text-center md:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-1.5 text-xs font-medium text-brand-teal">
            {icon}
            {eyebrow}
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            {title}{" "}
            <span className="bg-linear-to-r from-brand-sky via-brand-teal to-brand-green bg-clip-text text-transparent">
              {highlight}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Galería */}
        {projects.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            Pronto publicaremos nuestros proyectos aquí.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: ShowcaseProject; index: number }) {
  const domain =
    project.domain ??
    project.url?.replace(/^https?:\/\//, "").replace(/\/$/, "") ??
    "propus.app"

  const Wrapper = project.url ? "a" : "div"
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Wrapper
        {...wrapperProps}
        className={cn(
          "group block overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl shadow-black/5 ring-1 ring-foreground/5 transition-all duration-300",
          "hover:-translate-y-1 hover:border-brand-teal/50 hover:shadow-2xl hover:shadow-brand-teal/10"
        )}
      >
        {/* Barra del navegador */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-muted/30 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-3 rounded-full bg-red-400/70" />
            <span className="size-3 rounded-full bg-yellow-400/70" />
            <span className="size-3 rounded-full bg-green-400/70" />
          </div>
          <div className="ml-2 flex-1 truncate rounded-md bg-background/60 px-3 py-1 text-center text-xs text-muted-foreground font-mono">
            {domain}
          </div>
        </div>

        {/* Preview */}
        <div className="relative aspect-16/10 overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={`Preview de ${project.title}`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-linear-to-br from-background to-muted/40">
              <GradientDots duration={24} />
              <span className="relative z-10 bg-linear-to-r from-brand-sky via-brand-teal to-brand-green bg-clip-text font-heading text-3xl font-bold text-transparent md:text-4xl">
                {project.title}
              </span>
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="flex flex-col gap-3 px-6 py-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
            <ArrowUpRightIcon className="size-5 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-brand-teal" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          {project.tags && project.tags.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand-teal/20 bg-brand-teal/5 px-3 py-1 text-xs text-brand-teal/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Wrapper>
    </motion.div>
  )
}
