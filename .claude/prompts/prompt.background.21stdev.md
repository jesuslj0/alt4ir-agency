Integra el componente de fondo animado DottedSurface (superficie de puntos 3D con Three.js) en la landing de Alt4ir.

## Dependencias ya instaladas
three, @types/three y next-themes ya están en node_modules. No reinstales nada.

## Paso 1 — Crea components/ui/dotted-surface.tsx

'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points[];
    animationId: number;
    count: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const SEPARATION = 150, AMOUNTX = 40, AMOUNTY = 60;
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xffffff, 2000, 10000);
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 355, 1220);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(scene.fog.color, 0);
    containerRef.current.appendChild(renderer.domElement);
    const positions: number[] = [], colors: number[] = [];
    const geometry = new THREE.BufferGeometry();
    const isDark = resolvedTheme === 'dark';
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions.push(ix * SEPARATION - (AMOUNTX * SEPARATION) / 2, 0, iy * SEPARATION - (AMOUNTY * SEPARATION) / 2);
        isDark ? colors.push(200, 200, 200) : colors.push(0, 0, 0);
      }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 8, vertexColors: true, transparent: true, opacity: 0.8, sizeAttenuation: true });
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    let count = 0, animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const posAttr = geometry.attributes.position;
      const pos = posAttr.array as Float32Array;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          pos[i * 3 + 1] = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
          i++;
        }
      }
      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.1;
    };
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    animate();
    sceneRef.current = { scene, camera, renderer, particles: [points], animationId, count };
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        sceneRef.current.scene.traverse((obj) => {
          if (obj instanceof THREE.Points) {
            obj.geometry.dispose();
            Array.isArray(obj.material) ? obj.material.forEach((m) => m.dispose()) : obj.material.dispose();
          }
        });
        sceneRef.current.renderer.dispose();
        if (containerRef.current && sceneRef.current.renderer.domElement) {
          containerRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className={cn('pointer-events-none fixed inset-0 -z-10', className)}
      {...props}
    />
  );
}

## Paso 2 — Modifica app/layout.tsx

Añade ThemeProvider de next-themes wrapping los children. Requisitos:
- import { ThemeProvider } from 'next-themes'
- attribute="class" (compatible con el sistema .dark de TailwindCSS v4 del proyecto)
- defaultTheme="dark"
- disableTransitionOnChange
- Añade suppressHydrationWarning en el tag <html>

No toques los imports de fuentes, metadata ni nada más del layout.

## Paso 3 — Modifica app/page.tsx

Importa DottedSurface desde '@/components/ui/dotted-surface' y renderízalo como primer elemento dentro del fragment o contenedor raíz, antes de todas las secciones existentes.

## Paso 4 — Verifica

Ejecuta npm run build. Si hay errores de TypeScript o compilación, corrígelos. No modifiques tailwind.config.js (no existe, es TailwindCSS v4).