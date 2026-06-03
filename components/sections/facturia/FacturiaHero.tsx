import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, ScanLineIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FacturiaHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Glows de fondo en cian */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/4 top-0 size-128 -translate-x-1/2 rounded-full bg-facturia/10 blur-[140px]" />
        <div className="absolute right-0 top-1/3 size-96 rounded-full bg-facturia-dark/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Columna texto */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Logo FacturIA */}
            <Image
              src="/img/facturia/logo.png"
              alt="FacturIA"
              width={200}
              height={52}
              priority
              className="mb-6 h-11 w-auto"
            />

            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-facturia/30 bg-facturia/10 px-4 py-1.5 text-xs font-semibold text-facturia">
              <ScanLineIcon className="size-3.5" />
              Gestión inteligente de facturas
            </span>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              De la foto de tu factura al{" "}
              <span className="bg-linear-to-r from-facturia to-facturia-dark bg-clip-text text-transparent">
                informe contable,
              </span>
              <br /> sin teclear ni una cifra.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Plataforma inteligente de gestión de facturas y movimientos financieros para
              empresas. Captura con OCR e IA, revisión y aprobación automática, y exportación
              de informes listos para tu gestoría — todo multiempresa y seguro.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-11 gap-2 bg-linear-to-r from-facturia to-facturia-dark px-7 font-semibold text-white hover:opacity-90"
                asChild
              >
                <Link href="#demo">
                  Solicita una demo
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-11 px-7" asChild>
                <Link href="#funcionalidades">Ver funcionalidades</Link>
              </Button>
            </div>
          </div>

          {/* Columna captura del dashboard */}
          <div className="flex justify-center lg:justify-end">
            <DashboardFrame />
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardFrame() {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-facturia-bg shadow-2xl shadow-black/60">
      {/* Captura real del dashboard */}
      <div className="relative aspect-16/10">
        <Image
          src="/img/facturia/dashboard.png"
          alt="Dashboard de métricas de FacturIA"
          fill
          sizes="(max-width: 1024px) 100vw, 36rem"
          className="object-cover object-top"
        />
      </div>
    </div>
  )
}
