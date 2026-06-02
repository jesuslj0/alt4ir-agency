"use client"

import Link from "next/link"
import { ArrowRightIcon, CheckCircle2Icon, PhoneMissedIcon, ClockIcon, BellOffIcon, MessageCircleWarningIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const painPoints = [
  {
    icon: PhoneMissedIcon,
    text: "Pacientes que llaman fuera de horario y no vuelven a intentarlo",
  },
  {
    icon: ClockIcon,
    text: "Recepcionista saturada con llamadas repetitivas: citas, precios, horarios",
  },
  {
    icon: BellOffIcon,
    text: "Sin recordatorios automáticos → cancelaciones de última hora",
  },
  {
    icon: MessageCircleWarningIcon,
    text: "Respuestas lentas en WhatsApp que generan desconfianza",
  },
]

const chatMessages = [
  {
    role: "patient",
    name: "María García",
    text: "Hola, quería pedir cita para una revisión. ¿Tenéis hueco esta semana?",
    time: "22:14",
  },
  {
    role: "agent",
    text: "¡Hola María! 👋 Soy el asistente de la Clínica DentaPlus. Claro, puedo ayudarte a reservar ahora mismo.\n\n¿Prefieres mañana martes o el jueves?",
    time: "22:14",
  },
  {
    role: "patient",
    name: "María García",
    text: "El jueves mejor, por la tarde si puede ser.",
    time: "22:15",
  },
  {
    role: "agent",
    text: "Perfecto. Tengo disponible el jueves a las 17:00 o las 18:30. ¿Cuál te viene mejor?",
    time: "22:15",
  },
  {
    role: "patient",
    name: "María García",
    text: "Las 17h genial 👍",
    time: "22:16",
  },
  {
    role: "agent",
    text: "✅ Cita confirmada:\n📅 Jueves 5 de junio · 17:00h\n🦷 Revisión general\n📍 Clínica DentaPlus\n\nTe enviaré un recordatorio 24h antes. ¡Hasta el jueves!",
    time: "22:16",
    isConfirmation: true,
  },
]

export default function ServiceWhatsapp() {
  return (
    <section id="agente-whatsapp" className="py-20 md:py-28 relative overflow-hidden">

      {/* Glow de fondo */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-spring/6 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4">

        {/* Cabecera */}
        <div className="mb-14 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-spring/30 bg-brand-spring/10 px-3 py-1 text-xs font-semibold text-brand-spring mb-4">
            <span className="size-1.5 rounded-full bg-brand-spring animate-pulse" />
            Para clínicas dentales
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
            Nunca más pierdas una cita{" "}
            <span className="bg-gradient-to-r from-brand-spring to-brand-teal bg-clip-text text-transparent">
              por no coger el teléfono
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            Un agente IA en WhatsApp que atiende a tus pacientes 24/7: responde dudas,
            proporciona información sobre profesionales y servicios, gestiona citas, envía recordatorios y filtra urgencias — sin cambiar
            cómo trabajas hoy.
          </p>
        </div>

        {/* Grid: pain points + mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Columna izquierda — pain points */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
              ¿Te suena alguno de estos problemas?
            </p>

            <ul className="flex flex-col gap-4">
              {painPoints.map((p) => {
                const Icon = p.icon
                return (
                  <li
                    key={p.text}
                    className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/4 px-5 py-4 backdrop-blur-sm"
                  >
                    <div className="shrink-0 mt-0.5 size-8 rounded-lg bg-red-500/15 flex items-center justify-center">
                      <Icon className="size-4 text-red-400" />
                    </div>
                    <span className="text-sm text-slate-300 leading-snug">{p.text}</span>
                  </li>
                )
              })}
            </ul>

            {/* Propuesta de valor */}
            <div className="rounded-xl border border-brand-spring/25 bg-brand-spring/8 px-5 py-4 flex items-start gap-3">
              <CheckCircle2Icon className="size-5 text-brand-spring shrink-0 mt-0.5" />
              <p className="text-sm text-slate-200 leading-relaxed">
                Con el agente WhatsApp de Propus, tus pacientes reservan, cancelan y reciben
                confirmaciones <strong className="text-white">a cualquier hora</strong> —
                tu recepcionista solo atiende lo que realmente necesita atención humana.
              </p>
            </div>

            <Button
              size="lg"
              className="self-start bg-brand-spring hover:bg-brand-teal text-background font-semibold px-7 gap-2"
              asChild
            >
              <Link href="#contacto">
                Ver demo del agente
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Columna derecha — mockup WhatsApp */}
          <div className="flex justify-center lg:justify-end">
            <WhatsAppMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppMockup() {
  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/10 bg-[#111b21] overflow-hidden shadow-2xl shadow-black/60">

      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2 text-[10px] text-white/60 font-medium">
        <span>22:16</span>
        <div className="flex items-center gap-1.5">
          <span>●●●</span>
          <span>WiFi</span>
          <span>100%</span>
        </div>
      </div>

      {/* Header chat */}
      <div className="flex items-center gap-3 px-3 py-2 bg-[#1f2c33]">
        <button className="text-[#aebac1] mr-1">
          <svg viewBox="0 0 24 24" className="size-5 fill-current"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        </button>
        <div className="size-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-spring flex items-center justify-center text-background font-bold text-sm shrink-0">
          DP
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">Clínica DentaPlus</p>
          <p className="text-[11px] text-[#00a884] leading-none mt-0.5">en línea</p>
        </div>
        <div className="flex items-center gap-4 text-[#aebac1]">
          <svg viewBox="0 0 24 24" className="size-5 fill-current"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <svg viewBox="0 0 24 24" className="size-5 fill-current"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </div>
      </div>

      {/* Chat body */}
      <div
        className="px-3 py-3 flex flex-col gap-2 overflow-y-auto"
        style={{
          background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23182229' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"), #0b141a",
          minHeight: "380px",
          maxHeight: "380px",
        }}
      >
        {/* Divider fecha */}
        <div className="flex items-center justify-center my-1">
          <span className="bg-[#182229] text-[#8696a0] text-[10px] px-3 py-0.5 rounded-full">
            HOY
          </span>
        </div>

        {chatMessages.map((msg, i) => (
          <ChatBubble key={i} msg={msg} />
        ))}

        {/* Typing indicator */}
        <div className="flex justify-start">
          <div className="flex items-center gap-1 bg-[#202c33] rounded-2xl rounded-bl-sm px-4 py-3">
            <span className="size-1.5 rounded-full bg-[#8696a0] animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="size-1.5 rounded-full bg-[#8696a0] animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="size-1.5 rounded-full bg-[#8696a0] animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#1f2c33]">
        <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2.5 text-xs text-[#8696a0]">
          Escribe un mensaje
        </div>
        <div className="size-9 rounded-full bg-[#00a884] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="size-4 fill-white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </div>
      </div>
    </div>
  )
}

function ChatBubble({ msg }: { msg: (typeof chatMessages)[number] }) {
  const isAgent = msg.role === "agent"

  if (isAgent) {
    return (
      <div className="flex justify-start max-w-[85%]">
        <div
          className={`rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-[12px] leading-relaxed text-white whitespace-pre-line ${
            msg.isConfirmation
              ? "bg-[#025144] border border-[#00a884]/30"
              : "bg-[#202c33]"
          }`}
        >
          {msg.text}
          <span className="block text-right text-[10px] text-[#8696a0] mt-1 -mb-0.5 select-none">
            {msg.time} ✓✓
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-end max-w-[85%] ml-auto">
      <div className="rounded-2xl rounded-tr-sm bg-[#005c4b] px-3.5 py-2.5 text-[12px] leading-relaxed text-white">
        {msg.text}
        <span className="block text-right text-[10px] text-[#8696a0] mt-1 -mb-0.5 select-none">
          {msg.time} ✓✓
        </span>
      </div>
    </div>
  )
}
