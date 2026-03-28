import { InfiniteSlider } from "@/components/ui/infinite-slider";

const stack = [
  { name: "N8N",          domain: "n8n.io" },
  { name: "Make",         domain: "make.com" },
  { name: "Django",       domain: "djangoproject.com" },
  { name: "Next.js",      domain: "nextjs.org" },
  { name: "Coolify",      domain: "coolify.io" },
  { name: "DigitalOcean", domain: "digitalocean.com" },
  { name: "Python",       domain: "python.org" },
  { name: "JavaScript",   domain: "javascript.info" },
  { name: "Tailwind",     domain: "tailwindcss.com" },
  { name: "Shadcn",       domain: "ui.shadcn.com" },
];

const allItems = [...stack, ...stack];

export default function LogoBar() {
  return (
    <section id="logo-bar" className="py-12 border-y border-border/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <p className="text-center text-sm text-muted-foreground tracking-wide uppercase">
          Nuestro stack tecnológico
        </p>
      </div>

      {/* Máscara de fade en los bordes */}
      <div className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <InfiniteSlider gap={40} duration={40} durationOnHover={90} reverse={false}>
          {allItems.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2.5 rounded-full border border-border/60 bg-muted/40 px-5 py-2.5 whitespace-nowrap select-none"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://www.google.com/s2/favicons?domain=${tech.domain}&sz=32`}
                alt=""
                width={16}
                height={16}
                className="rounded-[3px] shrink-0"
              />
              <span className="text-sm font-semibold text-foreground/80">
                {tech.name}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
