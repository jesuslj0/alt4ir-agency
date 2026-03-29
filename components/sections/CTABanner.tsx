import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import { EtheralShadow } from "@/components/ui/etheral-shadow"

export default function CTABanner() {
  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-3xl bg-neutral-950 overflow-hidden px-8 py-16 md:px-16 text-center border border-white/10">
          <EtheralShadow
            color="rgba(109, 40, 217, 0.85)"
            animation={{ scale: 80, speed: 70 }}
            noise={{ opacity: 0.6, scale: 1.2 }}
            sizing="fill"
          />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              ¿Listo para automatizar{" "}
              <span className="bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                tu negocio?
              </span>
            </h2>
            <p className="mt-4 text-neutral-300 max-w-xl mx-auto">
              Agenda una llamada gratuita y descubre en 30 minutos cómo la IA puede transformar tus procesos más críticos.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 text-white gap-2 h-11 px-8 font-semibold text-base"
                asChild
              >
                <Link href="https://calendar.app.google/nheqxfUw8Q8sP4cF7" target="_blank" rel="noopener noreferrer">
                  Agendar llamada
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
            </div>

            <p className="mt-4 text-xs text-neutral-400">
              Te atenderemos sin compromiso alguno. De emprendedores a emprendedores.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
