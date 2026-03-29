import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRightIcon } from "lucide-react"

export default function CTABanner() {
  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-3xl bg-violet-600 dark:bg-violet-700 overflow-hidden px-8 py-16 md:px-16 text-center">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-violet-500/40 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-violet-800/40 blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              ¿Listo para automatizar{" "}
              <span className="bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                tu negocio?
              </span>
            </h2>
            <p className="mt-4 text-violet-100 max-w-xl mx-auto">
              Agenda una llamada gratuita y descubre en 30 minutos cómo la IA puede transformar tus procesos más críticos.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                className="bg-white text-violet-700 hover:bg-violet-50 gap-2 h-11 px-8 font-semibold text-base"
                asChild
              >
                <Link href="https://calendar.app.google/nheqxfUw8Q8sP4cF7" target="_blank" rel="noopener noreferrer">
                  Agendar llamada
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
            </div>

            <p className="mt-4 text-xs text-violet-200">
              Sin compromiso. Respondemos en menos de 24 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
