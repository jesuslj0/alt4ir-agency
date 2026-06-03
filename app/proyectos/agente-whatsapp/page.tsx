import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Component as GradientShader } from "@/components/ui/stripe-like-gradient-shader"
import WhaHero from "@/components/sections/agente-whatsapp/WhaHero"
import WhaProblem from "@/components/sections/agente-whatsapp/WhaProblem"
import WhaFeatures from "@/components/sections/agente-whatsapp/WhaFeatures"
import WhaGallery from "@/components/sections/agente-whatsapp/WhaGallery"
import WhaUseCases from "@/components/sections/agente-whatsapp/WhaUseCases"
import WhaCTA from "@/components/sections/agente-whatsapp/WhaCTA"

export const metadata: Metadata = {
  title: "Agente recepcionista WhatsApp — Propus | Gestión de citas con IA",
  description:
    "Un agente de IA en WhatsApp que agenda, cancela, envía recordatorios y rellena huecos de última hora — 24/7, en el idioma de tu paciente. Para clínicas dentales, veterinarias, estética y más.",
  openGraph: {
    title: "Agente recepcionista WhatsApp — Propus",
    description:
      "Tu consulta nunca pierde una cita. Agenda, recordatorios, cancelaciones y relleno de huecos automático por WhatsApp.",
    type: "website",
    locale: "es_ES",
  },
}

export default function AgenteWhatsappPage() {
  return (
    <div className="relative">
      {/* Fondo animado (stripe shader) para toda la sección AutoClinic */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <GradientShader />
        {/* Velo oscuro para mantener legibilidad del texto y las cards */}
        <div className="absolute inset-0 bg-wha-bg/65" />
      </div>

      <Navbar />
      <main className="relative">
        <WhaHero />
        <WhaProblem />
        <WhaFeatures />
        <WhaGallery />
        <WhaUseCases />
        <WhaCTA />
      </main>
      <Footer />
    </div>
  )
}
