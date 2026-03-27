import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  Producto: [
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#precios", label: "Precios" },
    { href: "#casos", label: "Casos de uso" },
  ],
  Empresa: [
    { href: "#nosotros", label: "Sobre nosotros" },
    { href: "#blog", label: "Blog" },
    { href: "#equipo", label: "Equipo" },
    { href: "#trabaja", label: "Trabaja con nosotros" },
  ],
  Legal: [
    { href: "/privacidad", label: "Privacidad" },
    { href: "/terminos", label: "Términos" },
    { href: "/cookies", label: "Cookies" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-border bg-black/90">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-bold text-xl tracking-tight w-fit">
              <span className="text-violet-600 dark:text-violet-400">Alt</span>4ir
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Automatizamos procesos y desarrollamos aplicaciones con IA para que tu negocio escale más rápido.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <p className="text-sm font-semibold">{category}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Alt4ir AI Solutions. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
