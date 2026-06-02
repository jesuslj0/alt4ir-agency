# Auditoría y plan de rebranding — Alt4ir Landing

**Fecha:** 2026-06-02  
**Objetivo:** Reorientar la landing hacia pymes y clínicas dentales, tocando dolor concreto en cada sección.  
**Cliente target:** Dueños de pyme, directores de clínicas dentales, gerentes de negocio local.

---

## Diagnóstico general

La landing está bien construida técnicamente pero habla el idioma de un CTO de empresa grande, no el de un empresario de pyme o el dueño de una clínica dental. Describe *qué hace la agencia* sin conectar con el *dolor concreto* del cliente. Un dentista o gerente de pyme ve la web y piensa "esto es para grandes empresas" y se va.

---

## Estructura nueva propuesta

```
[Navbar]
[Hero — general, pain de pyme/empresario]
[Movement — stats relatable para pymes]
[Sección 1: Diseño Web para empresas]
[Sección 2: Gestión documental y contabilidad automática]
[Sección 3: Agente recepcionista WhatsApp — clínicas dentales]
[HowItWorks — refinar copy]
[Pricing — reformular planes]
[FAQ — arreglar "Propus", reescribir en tono humano]
[CTABanner — ajuste menor]
[Footer]
```

---

## Secciones — análisis y propuesta de cambio

---

### HERO (`components/sections/Hero.tsx`)
**Estado: reescribir**

**Problemas actuales:**
- Titular "Recupera el control de tu negocio / con sistemas inteligentes" — aspiracional pero vago, no toca ningún dolor específico.
- Mockup "Agente IA + Aplicación Web = Resultados" — conceptual, dice poco a alguien que gestiona facturas o citas dentales.
- Badge "Agencia de IA & Consultoría" hace que parezca una empresa para grandes corporaciones.
- CTA secundario "Ver casos de uso" linkea a `#servicios` pero Features no son casos de uso reales.

**Propuesta de copy:**

```
Badge: "Automatización para negocios reales"

Titular:
  [línea pequeña] ¿Tu negocio sigue funcionando
  [línea grande, gradiente] como hace 10 años?

Subtítulo:
  Diseñamos webs que convierten, automatizamos tu gestión documental
  y ponemos un recepcionista virtual en WhatsApp — para que puedas
  enfocarte en lo que realmente importa.

CTA primario: "Quiero ver cómo funciona"  → #servicios
CTA secundario: "Hablar con un experto"   → #contacto
```

**Mockup:** Sustituir por algo más visual y concreto — tres iconos/tarjetas representando los 3 productos (web, documentos, WhatsApp) en lugar de la fórmula abstracta. O un mockup de conversación de WhatsApp con el agente para impactar directamente al target dental.

---

### MOVEMENT (`components/sections/Movement.tsx`)
**Estado: reescribir stats**

**Problemas actuales:**
- "77% de empresas Fortune 500 ya operan con IA" — contraproducente, el dueño de una clínica dental piensa "eso es para Coca-Cola, no para mí."
- "2025: el año en que la IA se volvió requisito" — presión vaga, no conecta con dolor real.

**Stats propuestas (más relatable para pymes/clínicas):**

| Stat | Label |
|------|-------|
| `+12h` | de media al mes que una pyme recupera automatizando tareas manuales |
| `68%` | de pymes que automatizan recuperan la inversión en menos de 6 meses |
| `9 de cada 10` | clínicas dentales pierden citas por no responder fuera de horario |

**Titular propuesto:**
```
Esto no es ciencia ficción.
Es lo que ocurre cada semana en negocios como el tuyo.
```

---

### FEATURES → TRES SECCIONES DE PRODUCTO
**Estado: eliminar Features, crear 3 secciones nuevas**

Las 6 features actuales son catálogo de capacidades técnicas, no respuestas a dolores reales. Ninguna conecta con el cliente target. Sustituir por tres secciones de producto independientes, cada una con:
- Titular orientado al dolor
- 3-4 pain points concretos
- Visual/mockup específico
- CTA claro

---

#### Sección 1 — Diseño Web para empresas
**Fichero nuevo:** `components/sections/ServiceWeb.tsx`

**Dolor que toca:** La web está desactualizada, no convierte, o directamente no existe. La competencia está por delante.

```
Titular:
  Tu web actual te está costando clientes
  [o: "Una web que no convierte es un escaparate cerrado"]

Pain points (lista visual):
  - Clientes potenciales llegan a tu web y se van sin contactarte
  - Actualizarla te cuesta tiempo que no tienes
  - Tu competencia tiene una presencia digital mucho más cuidada
  - No apareces bien posicionado en Google

Propuesta de valor:
  Diseñamos y desarrollamos tu web con IA integrada: diseño moderno,
  optimizada para SEO y preparada para crecer contigo.

CTA: "Ver ejemplos de webs"
```

---

#### Sección 2 — Gestión documental y contabilidad automática
**Fichero nuevo:** `components/sections/ServiceDocs.tsx`

**Dolor que toca:** Horas perdidas en facturas, contratos, albaranes, errores manuales, archivos por todas partes.

```
Titular:
  Deja de perder horas en facturas y documentos

Pain points (lista visual):
  - Facturas, contratos y albaranes que acaban perdidos o duplicados
  - Contabilidad manual que genera errores y retrasos
  - Tiempo de tu equipo enterrado en burocracia en vez de en clientes
  - Imposible encontrar un documento cuando lo necesitas

Propuesta de valor:
  Automatizamos tu flujo documental y contable: extracción de datos,
  categorización, envío automático y archivo organizado — sin que
  nadie lo toque.

CTA: "Quiero ahorrar tiempo en gestión"
```

---

#### Sección 3 — Agente recepcionista WhatsApp (clínicas dentales)
**Fichero nuevo:** `components/sections/ServiceWhatsapp.tsx`

**Dolor que toca:** Citas perdidas fuera de horario, teléfono saturado, recordatorios manuales, pacientes que no vuelven.

```
Titular:
  Nunca más pierdas una cita por no coger el teléfono

Pain points (lista visual):
  - Pacientes que llaman fuera de horario y no vuelven a intentarlo
  - Recepcionista saturada con llamadas repetitivas (citas, precios, horarios)
  - Sin sistema de recordatorios → cancelaciones de última hora
  - Respuestas lentas en WhatsApp que generan desconfianza

Propuesta de valor:
  Un agente IA en WhatsApp que atiende a tus pacientes 24/7: responde
  dudas, gestiona citas, envía recordatorios y filtra urgencias — sin
  cambiar cómo trabajas hoy.

Visual: mockup de conversación de WhatsApp (paciente pregunta, agente responde con cita confirmada)

CTA: "Ver demo del agente"
```

---

### HOW IT WORKS (`components/sections/HowItWorks.tsx`)
**Estado: ajuste de copy**

Los 3 pasos están bien estructurados. Ajustar el tono:
- "Diagnóstico" → "Entendemos tu negocio" + añadir "30 minutos, sin tecnicismos"
- "Diseño de solución" → especificar que el cliente no necesita saber nada técnico
- "Implementación y escala" → añadir timeframe ("en producción en 2-4 semanas")

---

### PRICING (`components/sections/Pricing.tsx`)
**Estado: reformular nombres y descripción de planes**

**Problemas actuales:**
- Plan "Automatización" sin precio — puede generar desconfianza
- Nombres abstractos: "Transformación Digital" no dice nada a una clínica dental
- Ningún plan hace referencia a los 3 productos concretos

**Propuesta de nombres:**

| Plan actual | Plan propuesto | Qué incluye |
|-------------|----------------|-------------|
| Consultoría | Diagnóstico gratis | Auditoría de procesos + llamada 30 min |
| Automatización | Primer proyecto | Uno de los 3 productos (web, docs, WhatsApp) |
| Transformación Digital | Todo incluido | Los 3 productos + integraciones + soporte |

---

### FAQ (`components/sections/FAQ.tsx`)
**Estado: corrección urgente + reescribir tono**

**Bug:** Pregunta 2 dice *"para trabajar con Propus"* — nombre antiguo. Cambiar a Alt4ir.

**Preguntas propuestas más orientadas al target:**

1. ¿Necesito saber de tecnología para trabajar con vosotros?
2. ¿Cuánto tiempo tarda en estar funcionando el agente de WhatsApp?
3. ¿Podéis diseñar mi web aunque no tenga contenido preparado?
4. ¿Funciona con los sistemas que ya uso (FacturaDirecta, Holded, etc.)?
5. ¿Qué pasa si el agente no sabe responder a una pregunta del paciente?
6. ¿Cómo sé si esto me va a funcionar a mí?

---

### CTA BANNER (`components/sections/CTABanner.tsx`)
**Estado: ajuste menor de copy**

Funciona bien. Solo actualizar el copy para el nuevo enfoque:

```
Titular:
  ¿Te suena alguno de estos problemas?
  [o: "30 minutos pueden cambiar cómo opera tu negocio"]

Subtítulo:
  Cuéntanos cómo trabajas hoy y te decimos, sin compromiso,
  si podemos ahorrarte tiempo y dinero de forma real.
```

---

## Prioridad de ejecución

| # | Sección | Fichero | Prioridad |
|---|---------|---------|-----------|
| 1 | Hero | `Hero.tsx` | 🔴 Alta |
| 2 | Features → Sección Web | `ServiceWeb.tsx` (nuevo) | 🔴 Alta |
| 3 | Features → Sección Docs | `ServiceDocs.tsx` (nuevo) | 🔴 Alta |
| 4 | Features → Sección WhatsApp | `ServiceWhatsapp.tsx` (nuevo) | 🔴 Alta |
| 5 | FAQ — fix "Propus" | `FAQ.tsx` | 🔴 Alta |
| 6 | Movement | `Movement.tsx` | 🟡 Media |
| 7 | HowItWorks | `HowItWorks.tsx` | 🟡 Media |
| 8 | Pricing | `Pricing.tsx` | 🟡 Media |
| 9 | CTA Banner | `CTABanner.tsx` | 🟢 Baja |

---

## Notas de implementación

- `Features.tsx` se eliminará de `page.tsx` y se reemplazará por las 3 secciones de producto en orden lógico.
- Las 3 secciones nuevas irán entre `Movement` y `HowItWorks`.
- El id `#servicios` que actualmente apunta a `Features` pasará a la primera sección de producto (`ServiceWeb`).
- No se modifican estilos ni sistema de diseño — solo copy y estructura de secciones.
