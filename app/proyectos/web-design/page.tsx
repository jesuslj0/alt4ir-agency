import type { Metadata } from "next"
import { MdDesignServices } from "react-icons/md"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ProjectsShowcase, { type ShowcaseProject } from "@/components/sections/ProjectsShowcase"

export const metadata: Metadata = {
  title: "Web Design — Propus | Landing pages a medida",
  description:
    "Selección de landing pages y diseños web creados por Propus: interfaces modernas, rápidas y orientadas a conversión para empresas de Albacete y toda España.",
  openGraph: {
    title: "Web Design — Propus | Landing pages a medida",
    description:
      "Selección de landing pages y diseños web creados por Propus.",
    type: "website",
    locale: "es_ES",
  },
}

const projects: ShowcaseProject[] = [
  {
    title: "El Rincón de Héctor",
    url: "https://elrincondehector.com",
    domain: "elrincondehector.com",
    description:
      "Sitio Web para restaurante local con carta dinámica, animación de producto estrella y branding personalizado. Estilo oscuro y cálido, responsive completo y SEO optimizado.",
    tags: ["Astro", "TailwindCSS", "Lucide Icons", "Estilos Custom"],
    image: "/img/landings/erdh-hero.png",
  },
]

export default function WebDesignPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsShowcase
          eyebrow="Web Design"
          icon={<MdDesignServices className="size-3.5" />}
          title="Landing pages que"
          highlight="impresionan"
          description="Diseñamos interfaces modernas, rápidas y a medida. Una selección de los sitios que hemos creado para nuestros clientes."
          projects={projects}
        />
      </main>
      <Footer />
    </>
  )
}
