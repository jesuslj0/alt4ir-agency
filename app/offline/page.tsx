import type { Metadata } from "next"
import Link from "next/link"
import { WifiOffIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Sin conexión — Propus",
  description: "No hay conexión a internet en este momento.",
}

export default function OfflinePage() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <span className="flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
        <WifiOffIcon className="size-7 text-muted-foreground" />
      </span>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Estás sin conexión</h1>
        <p className="max-w-md text-muted-foreground">
          No hemos podido cargar esta página. Comprueba tu conexión a internet e inténtalo de
          nuevo.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
      >
        Reintentar
      </Link>
    </main>
  )
}
