"use client"

import dynamic from "next/dynamic"
import { useRef, useEffect } from "react"

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
})

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const forward = (e: PointerEvent) => {
      const canvas = canvasRef.current
      if (!e.isTrusted || !canvas) return;
      canvas.dispatchEvent(
        new PointerEvent("pointermove", {
          clientX: e.clientX,
          clientY: e.clientY,
          pointerId: e.pointerId,
          pointerType: "mouse",
          bubbles: true,
          cancelable: true,
        })
      )
    }
    window.addEventListener("pointermove", forward)
    return () => window.removeEventListener("pointermove", forward)
  }, [])

  return (
    <Spline
      scene={scene}
      className={className}
      onLoad={(spline) => { canvasRef.current = spline.canvas }}
      style={{ pointerEvents: "none" }}
    />
  )
}
