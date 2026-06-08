import type { Metadata, Viewport } from "next"
import { Instrument_Serif } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
import AuroraBackground from "@/components/ui/aurora-background"
import ServiceWorkerRegister from "@/components/pwa/service-worker-register"

// Cuerpo de texto — Satoshi (Fontshare, auto-hospedada)
const satoshi = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "../public/fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
})

// Logo y títulos — Clash Display (Fontshare, auto-hospedada)
const clashDisplay = localFont({
  variable: "--font-heading",
  display: "swap",
  src: [
    { path: "../public/fonts/ClashDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
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
      className={cn("h-full antialiased", satoshi.variable, clashDisplay.variable, instrumentSerif.variable)}
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
