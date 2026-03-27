# Prompt: AetherFlow Hero como fondo global de la web

## Objetivo

Integrar el componente `AetherFlowHero` (canvas animado con partículas interactivas) como fondo persistente en toda la aplicación, visible en todas las páginas y rutas, **excepto bajo el navbar y el footer**, que deben conservar su propio fondo sólido y estar por encima del canvas.

---

## Contexto del componente

El componente `AetherFlowHero` renderiza un `<canvas>` fullscreen con:
- Partículas púrpura flotantes que reaccionan al movimiento del ratón
- Líneas de conexión entre partículas cercanas
- Fondo negro pintado directamente sobre el canvas
- Posición `absolute` que ocupa `100vw × 100vh`

---

## Cambios requeridos

### 1. Extraer el canvas como componente independiente

Separa la lógica del canvas de `AetherFlowHero` en un nuevo componente llamado `ParticleBackground`:

```tsx
// components/ui/particle-background.tsx
"use client";

import React from "react";

const ParticleBackground = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    // Pega aquí toda la lógica del useEffect del canvas
    // tal como está en aether-flow-hero.tsx
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticleBackground;
```

**Cambio clave respecto al original:** usa `fixed` en lugar de `absolute`, y aplica `-z-10` para que quede detrás de todo el contenido.

---

### 2. Montar el canvas en el Layout raíz

En tu layout principal (`app/layout.tsx` o `layouts/MainLayout.tsx`), añade `<ParticleBackground />` como primer hijo del body, **fuera** del área de contenido scrollable:

```tsx
// app/layout.tsx
import ParticleBackground from "@/components/ui/particle-background";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white min-h-screen">

        {/* Canvas fijo detrás de todo */}
        <ParticleBackground />

        {/* Navbar con fondo propio para tapar el canvas */}
        <Navbar />

        {/* Contenido de cada página (scroll normal) */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Footer con fondo propio para tapar el canvas */}
        <Footer />

      </body>
    </html>
  );
}
```

---

### 3. Dar fondo sólido al Navbar y al Footer

El navbar y el footer deben tener un `z-index` superior al canvas y un fondo opaco (o con blur) para que el canvas no se filtre por debajo:

```tsx
// Navbar — ejemplo de clases Tailwind
<nav className="relative z-20 bg-black/80 backdrop-blur-md border-b border-white/10">
  {/* contenido del navbar */}
</nav>

// Footer — ejemplo de clases Tailwind
<footer className="relative z-20 bg-black/90 border-t border-white/10">
  {/* contenido del footer */}
</footer>
```

> Ajusta la opacidad (`bg-black/80`, `bg-black/90`, etc.) según el nivel de transparencia deseado.

---

### 4. Asegurar que las secciones de contenido no tapen el canvas

Las páginas y secciones que quieras que muestren el fondo animado deben tener fondo **transparente**:

```tsx
// Secciones con canvas visible al fondo
<section className="relative z-10 bg-transparent py-24 px-6">
  {/* contenido */}
</section>

// Secciones que necesiten fondo propio (tarjetas, modales, etc.)
<div className="bg-black/60 backdrop-blur-sm rounded-xl p-6">
  {/* contenido */}
</div>
```

---

### 5. Consideraciones de rendimiento

- El canvas usa `requestAnimationFrame` y escucha `resize`, `mousemove` y `mouseout` globalmente. Al montarlo en el layout raíz, estos listeners persisten durante toda la sesión: **no se reinstancian al cambiar de página**, lo cual es eficiente.
- Si usas React Router o Next.js App Router, el componente se monta una sola vez gracias al layout raíz.
- En dispositivos móviles, considera reducir el número de partículas: detecta `window.innerWidth < 768` dentro del `init()` y aplica un factor reductor al `numberOfParticles`.

---

## Resumen de z-index

| Elemento            | z-index   | Fondo                        |
|---------------------|-----------|------------------------------|
| `<canvas>` (canvas) | `-10`     | Negro (pintado por el canvas)|
| Secciones / páginas | `10`      | Transparente                 |
| Navbar              | `20`      | `bg-black/80` + blur         |
| Footer              | `20`      | `bg-black/90`                |
| Modales / dropdowns | `30+`     | Sólido o con blur            |

---

## Dependencias necesarias

```bash
npm install framer-motion lucide-react
```

> `framer-motion` solo es necesario si conservas las animaciones de texto del hero original en otras secciones. El canvas en sí no lo requiere.