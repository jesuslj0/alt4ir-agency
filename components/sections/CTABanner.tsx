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
              ¿Listo para automatizar tu negocio?
            </h2>
            <p className="mt-4 text-violet-100 max-w-xl mx-auto">
              Agenda una llamada gratuita y descubre en 30 minutos cómo la IA puede transformar tus procesos más críticos.
            </p>

            <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu@empresa.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-violet-200 focus-visible:border-white focus-visible:ring-white/30 h-10"
              />
              <Button
                type="submit"
                className="bg-white text-violet-700 hover:bg-violet-50 gap-2 shrink-0 h-10 px-5 font-semibold"
              >
                Agendar llamada
                <ArrowRightIcon className="size-4" />
              </Button>
            </form>

            <p className="mt-4 text-xs text-violet-200">
              Sin compromiso. Respondemos en menos de 24 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
