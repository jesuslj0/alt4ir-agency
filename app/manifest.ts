import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Propus — Automatización e IA para tu negocio",
    short_name: "Propus",
    description:
      "Automatizamos tareas repetitivas y damos valor a los negocios con la ayuda de la IA. Desarrollo de aplicaciones, automatización de procesos e integración de agentes inteligentes.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0a0b0f",
    theme_color: "#0a0b0f",
    lang: "es",
    dir: "ltr",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicons/maskable-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
