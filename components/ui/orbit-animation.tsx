"use client"

import { FaRobot, FaAws, FaGithub, FaSlack, FaDatabase, FaDocker, FaNodeJs } from "react-icons/fa"
import { SiOpenai, SiPython, SiZapier, SiTypescript, SiVercel, SiTensorflow } from "react-icons/si"

const innerIcons = [
  { Icon: SiOpenai,    color: "#8B5CF6" },
  { Icon: SiPython,    color: "#3776AB" },
  { Icon: SiZapier,    color: "#FF4A00" },
]

const middleIcons = [
  { Icon: FaAws,        color: "#FF9900" },
  { Icon: FaGithub,     color: "#6B7280" },
  { Icon: FaSlack,      color: "#E01E5A" },
  { Icon: SiTypescript,  color: "#3178C6" },
  { Icon: SiVercel,     color: "#6B7280" },
  { Icon: FaDatabase,   color: "#3B82F6" },
]

const outerIcons = [
  { Icon: FaDocker,     color: "#2496ED" },
  { Icon: FaNodeJs,     color: "#339933" },
  { Icon: SiTensorflow, color: "#FF6F00" },
  { Icon: FaRobot,      color: "#8B5CF6" },
]

function OrbitRing({
  diameter,
  duration,
  icons,
}: {
  diameter: string
  duration: number
  icons: { Icon: React.ElementType; color: string }[]
}) {
  return (
    <div
      className="absolute rounded-full border border-dashed border-violet-400/20"
      style={{ width: diameter, height: diameter, animation: `orbit-spin ${duration}s linear infinite` }}
    >
      {icons.map((cfg, i) => {
        const angle = (2 * Math.PI * i) / icons.length
        const x = 50 + 50 * Math.cos(angle)
        const y = 50 + 50 * Math.sin(angle)
        return (
          <div
            key={i}
            className="absolute bg-white dark:bg-slate-800 rounded-full p-2 shadow-md"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              animation: `orbit-spin-reverse ${duration}s linear infinite`,
            }}
          >
            <cfg.Icon className="size-5" style={{ color: cfg.color }} />
          </div>
        )
      })}
    </div>
  )
}

export default function OrbitAnimation() {
  return (
    <div className="relative w-[36rem] h-[36rem] flex items-center justify-center">
      {/* Center icon */}
      <div className="relative z-10 size-16 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center shadow-lg shadow-violet-500/30">
        <FaRobot className="size-8 text-violet-600 dark:text-violet-400" />
      </div>

      <OrbitRing diameter="14rem" duration={10} icons={innerIcons} />
      <OrbitRing diameter="25rem" duration={18} icons={middleIcons} />
      <OrbitRing diameter="35rem" duration={26} icons={outerIcons} />
    </div>
  )
}
