import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Space_Grotesk, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
import AuroraBackground from "@/components/ui/aurora-background"
import ServiceWorkerRegister from "@/components/pwa/service-worker-register"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

// Display serif para mockups cinematográficos (sección de diseño web)
const instrumentSerif = Instrument_Serif({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Propus — Automatización e IA para tu negocio",
  description:
    "Automatizamos tareas repetitivas y damos valor a los negocios con la ayuda de la IA. Desarrollo de aplicaciones, automatización de procesos e integración de agentes inteligentes.",
  applicationName: "Propus",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Propus",
  },
  formatDetection: { telephone: false },
  icons: {
    icon: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", url: "/favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0b0f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn("h-full antialiased", spaceGrotesk.variable, bricolageGrotesque.variable, instrumentSerif.variable)}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <AuroraBackground />
          {children}
          <ServiceWorkerRegister />
        </ThemeProvider>
      </body>
    </html>
  )
}
