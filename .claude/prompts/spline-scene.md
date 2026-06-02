Tengo una escena de Spline integrada como fondo de un Hero en una app Next.js con React. Necesito ayuda con dos problemas:

1. **Rendimiento**: La escena va lenta. Quiero optimizarla para que cargue rápido y no bloquee el hilo principal.

2. **Hover / seguimiento del ratón**: El efecto hover no sigue el ratón con precisión. Quiero que la cámara o el objeto reaccione de forma fluida y 1:1 al movimiento del cursor.

Mi stack:
- Next.js (App Router)
- React
- @splinetool/react-spline para embed
- La escena está en el componente Hero, renderizada detrás del contenido

Por favor dame:
- El componente Hero completo con Spline optimizado
- Cómo hacer el tracking del ratón correctamente (con useRef + mousemove, sin throttle visible)
- Cómo evitar re-renders innecesarios (memo, useCallback, etc.)
- Si hay que usar dynamic import con ssr: false para Spline, muéstramelo
- Cualquier ajuste de CSS que ayude al rendimiento (will-change, pointer-events, etc.)

El resultado debe ser suave, sin jank, y el hover debe sentirse reactivo y preciso.