const companies = [
  "Acme Corp",
  "Synapse Labs",
  "Venture HQ",
  "DataBridge",
  "NeoStack",
  "CloudOps",
]

export default function LogoBar() {
  return (
    <section className="py-12 border-y border-border/50">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8 tracking-wide uppercase">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors select-none tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
