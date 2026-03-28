import { InfiniteSlider } from "@/components/ui/infinite-slider";

const clients = [
  { name: "Talleres Collado", sector: "Automoción" },
  { name: "Clínicas Dentales", sector: "Salud" },
  { name: "Clínicas de Fisioterapia", sector: "Salud" },
  { name: "Empresas Deportivas", sector: "Deporte" },
  { name: "Peluquerías", sector: "Belleza" },
  { name: "Talleres Collado", sector: "Automoción" },
  { name: "Clínicas Dentales", sector: "Salud" },
  { name: "Clínicas de Fisioterapia", sector: "Salud" },
  { name: "Empresas Deportivas", sector: "Deporte" },
  { name: "Peluquerías", sector: "Belleza" },
];

export default function LogoBar() {
  return (
    <section id="logo-bar" className="py-12 border-y border-border/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <p className="text-center text-sm text-muted-foreground tracking-wide uppercase">
          Sectores que confían en nosotros
        </p>
      </div>

      {/* Máscara de fade en los bordes */}
      <div className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <InfiniteSlider gap={24} duration={35} durationOnHover={80} reverse={false}>
          {clients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-5 py-2.5 whitespace-nowrap select-none"
            >
              <span className="text-sm font-semibold text-foreground/80">
                {client.name}
              </span>
              <span className="text-xs text-muted-foreground/60">
                · {client.sector}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
