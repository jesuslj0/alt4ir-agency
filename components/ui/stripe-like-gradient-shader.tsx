"use client"

import { GradFlow } from "gradflow"

// Fondo animado WebGL (stripe shader) afinado a la paleta clínica de AutoClinic:
// blanco/azul muy claro + turquesa + rosa, para transmitir limpieza.
// Para experimentar con colores y valores: https://gradflow.meera.dev/
export const Component = () => {
  return (
    <GradFlow
      config={{
        color1: { r: 224, g: 242, b: 255 }, // azul muy claro / blanco
        color2: { r: 45, g: 212, b: 191 }, // turquesa
        color3: { r: 244, g: 114, b: 182 }, // rosa
        speed: 0.4,
        scale: 1,
        type: "stripe",
        noise: 0.08,
      }}
    />
  )
}
