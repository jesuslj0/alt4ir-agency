"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-[1.375rem] tracking-tight">
          <Image src="/favicons/favicon-32x32.png" alt="Alt4ir logo" width={22} height={22} />
          <span>ALT<span className="bg-gradient-to-br from-blue-400 to-violet-600 bg-clip-text text-transparent">4</span>IR</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link href="#contacto">Iniciar sesión</Link>
          </Button>
          <Button
            size="sm"
            className="bg-violet-600 hover:bg-violet-700 text-white dark:bg-violet-500 dark:hover:bg-violet-600"
            asChild
          >
            <Link href="#contacto">Agendar llamada</Link>
          </Button>
        </div>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 flex flex-col">
            <div className="pt-4">
              <Link href="/" className="flex items-center gap-2 font-bold text-[1.375rem] tracking-tight">
                <Image src="/favicons/favicon-32x32.png" alt="Alt4ir logo" width={22} height={22} />
                <span>ALT<span className="bg-gradient-to-br from-blue-400 to-violet-600 bg-clip-text text-transparent">4</span>IR</span>
              </Link>
            </div>
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-auto pb-4">
              <Button variant="outline" asChild>
                <Link href="#contacto">Iniciar sesión</Link>
              </Button>
              <Button
                className="bg-violet-600 hover:bg-violet-700 text-white"
                asChild
              >
                <Link href="#contacto">Agendar llamada</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
