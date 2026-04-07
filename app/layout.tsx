import type { Metadata } from "next"
import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
import ParticleBackground from "@/components/ui/particle-background"

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

export const metadata: Metadata = {
  title: "Alt4ir AI Solutions — Automatización e IA para tu negocio",
  description:
    "Automatizamos tareas repetitivas y damos valor a los negocios con la ayuda de la IA. Desarrollo de aplicaciones, automatización de procesos e integración de agentes inteligentes.",
  icons: {
    icon: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", url: "/favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
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
      className={cn("h-full antialiased", spaceGrotesk.variable, bricolageGrotesque.variable)}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <ParticleBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
