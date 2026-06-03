Genera una página nueva para el proyecto FacturIA. La información del proyecto es esta: FacturIA /  — Información para página de producto
1. Pitch / Resumen ejecutivo
Plataforma inteligente de gestión de facturas y movimientos financieros para empresas.

Facturia automatiza el ciclo completo de tus documentos contables: desde la captura mediante OCR e inteligencia artificial, pasando por la revisión y aprobación, hasta la exportación de informes listos para tu gestoría. Todo en un entorno multiempresa, seguro y con control total de cada euro.

Frase corta para hero: "De la foto de tu factura al informe contable, sin teclear ni una cifra."

2. ¿Qué problema resuelve?
Eliminar la entrada manual de datos de facturas (propenso a errores).
Tener un flujo de revisión y aprobación claro y auditable.
Conocer en tiempo real ingresos, gastos, beneficio e IVA.
Generar informes y exportaciones (Excel, CSV, PDF) en segundos.
Centralizar la relación con proveedores y clientes.
3. Funcionalidades principales (orientadas al cliente)
📥 Captura inteligente de documentos
Ingesta de facturas, albaranes, facturas rectificativas y abonos.
Lectura automática mediante OCR + IA: número de factura, fecha, base imponible, IVA, total y datos del emisor.
Cada dato extraído incluye un nivel de confianza, para saber qué revisar.
✅ Revisión y aprobación automática
Sistema de niveles de revisión: automático, manual, recomendado u obligatorio.
Las facturas con alta confianza se aprueban solas; las dudosas se marcan para revisión humana.
Estados claros: pendiente → aprobado / rechazado → archivado.
Trazabilidad total: quién aprobó, rechazó o editó cada documento y cuándo.
🔄 Rectificaciones con histórico
Crea versiones rectificativas de una factura manteniendo el documento original.
Solo la versión vigente queda activa, conservando todo el historial.
💰 Movimientos financieros
Registro de ingresos y gastos más allá de las facturas (efectivo, transferencia, tarjeta, Bizum, cheque…).
Categorías personalizables con iconos y colores.
Adjuntar recibos, marcar movimientos como recurrentes o conciliados.
📊 Dashboard de métricas
Visión en tiempo real de: ingresos, gastos, beneficio y margen.
Control de IVA: IVA repercutido (cobrado), IVA soportado (pagado) y saldo.
Gráficas de evolución por día o mes según el periodo.
Tasa de aprobación, aprobación automática y nivel medio de confianza del OCR.
Vista combinada de facturas + movimientos manuales.
🏢 Gestión de proveedores y clientes
Alta automática de empresas a partir de las facturas ingeridas.
Detección automática de si es proveedor (gasto) o cliente (ingreso).
Identificación por CIF/NIF con normalización automática.
📤 Exportaciones profesionales
Exporta en Excel, CSV y PDF.
Vista previa antes de exportar con resúmenes y subtotales.
Informes PDF con diseño cuidado (logo, totales por página) listos para la gestoría.
🔌 Integración vía API
API REST para ingesta automatizada de documentos desde otros sistemas.
Claves API seguras con entornos live y test.
4. Características técnicas destacables (para sección "Por qué confiar en nosotros")
Característica	Beneficio para el cliente
Multiempresa (multi-tenant)	Cada empresa tiene sus datos totalmente aislados y seguros
Seguridad de datos	Acceso restringido a usuarios autenticados; claves API cifradas
Roles y permisos	Control de quién puede ver y hacer qué dentro de la empresa
Personalización de marca	Logo y color corporativo propios en la plataforma e informes
Auditoría completa	Registro de cada acción con autor y fecha
Hecho con tecnología robusta	Django (mismo framework que Instagram o Spotify)
Nota: en la web de cara al cliente conviene traducir lo técnico a beneficios. Por ejemplo "multi-tenant" → "Tus datos siempre aislados y privados".

5. Flujo de trabajo (ideal para un diagrama visual)

1. Subes / envías la factura  →  2. La IA extrae los datos (OCR)
        ↓
3. Aprobación automática si la confianza es alta
   (o revisión manual si hay dudas)
        ↓
4. Consultas tus métricas en el dashboard en tiempo real
        ↓
5. Exportas informes (Excel / CSV / PDF) para tu gestoría
6. Público objetivo / Casos de uso
Pymes y autónomos que quieren dejar de teclear facturas.
Gestorías y asesorías que procesan documentos de varios clientes.
Departamentos financieros que necesitan control de IVA y flujo de caja.
7. Tipos de documentos soportados
Facturas
Albaranes
Facturas rectificativas
Abonos de albarán
Con clasificación automática en ingresos (ventas) o gastos (compras).

Recomendaciones para la página web
Hero con el pitch corto + captura del dashboard.
Sección de funcionalidades en tarjetas (usa los iconos/emojis de arriba).
Diagrama del flujo (sección 5) — muy visual y vendedor.
Tabla o bloque de "Por qué confiar" (sección 4).
Casos de uso segmentados por tipo de cliente.
CTA final: "Solicita una demo". 

Añade tambien que complementamos la web con organización en Google Drive y Sheets que se completan desde la automatizacion ORC de n8n. 

Quiero estilos como los del proyect pero añadiendo estos colores: Colores principales
Rol	Variable	HEX	Muestra
Fondo principal	--body-bg-color	#020617	Azul casi negro (slate 950)
Texto principal	--body-fg-color	#f8fafc	Blanco roto
Fondo de tarjetas	--card-bg-color	#0f172a	Azul marino oscuro
Color de énfasis (marca)	--enfasis-color	#38bdf8	Cian / azul cielo ⭐
Énfasis oscuro	--enfasis-color-dark	#0a7bb0	Cian oscuro
Texto atenuado	--muted-color	#7c8b9d	Gris azulado
Bordes	--border-color	rgba(255,255,255,0.08)	Blanco translúcido
Colores de estado (semánticos)
Rol	Variable	HEX	Muestra
Éxito	--color-success	#22c55e	Verde
Aviso	--color-warning	#facc15	Amarillo
Peligro/error	--color-danger	#ef4444	Rojo
Info	--color-info	#3b82f6	Azul
Resumen para tu web
Para que la página de producto sea coherente con la app, usa esta combinación:

Color de marca / acentos y CTAs: #38bdf8 (cian) — es el color identitario.
Fondo: #020617 (oscuro) con tarjetas en #0f172a.
Texto: #f8fafc sobre fondo oscuro, #7c8b9d para textos secundarios.
Degradado de marca sugerido: de #38bdf8 → #0a7bb0 (queda muy bien en botones y hero).
Nota: cada cliente puede personalizar su propio primary_color en la plataforma (por defecto #2563eb, un azul), según vi en el modelo Client. Pero el color base del producto/marca Facturia es el cian #38bdf8.