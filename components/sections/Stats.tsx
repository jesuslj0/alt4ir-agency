const stats = [
  { value: "50+", label: "Proyectos entregados" },
  { value: "10x", label: "Velocidad de procesos" },
  { value: "3x", label: "ROI promedio" },
  { value: "99.9%", label: "Disponibilidad" },
]

export default function Stats() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-violet-600 dark:text-violet-400">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
