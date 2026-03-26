import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto tiempo tarda implementar una automatización?",
    answer:
      "Depende de la complejidad del proceso. Una automatización estándar (como procesamiento de documentos o integración de datos) puede estar en producción en 2 a 4 semanas. Proyectos más complejos con múltiples sistemas pueden tomar de 6 a 10 semanas.",
  },
  {
    question: "¿Necesito conocimientos técnicos para trabajar con ustedes?",
    answer:
      "No. Nuestro proceso está diseñado para que puedas participar sin conocimientos técnicos. Nos encargamos de toda la parte tecnológica. Solo necesitas conocer bien tu negocio y tus procesos, que es lo más valioso.",
  },
  {
    question: "¿Pueden integrarse con mis sistemas actuales?",
    answer:
      "Sí. Trabajamos con los sistemas más comunes: HubSpot, Salesforce, SAP, Monday, Notion, Google Workspace, Microsoft 365, y prácticamente cualquier herramienta que tenga API. Si no la tiene, buscamos alternativas.",
  },
  {
    question: "¿Cómo garantizan la seguridad de mis datos?",
    answer:
      "Implementamos cifrado en tránsito y en reposo, control de accesos por roles, y nunca almacenamos datos sensibles sin necesidad. Podemos firmar NDAs y adaptarnos a los requisitos de compliance de tu industria.",
  },
  {
    question: "¿Qué pasa si la automatización no funciona como esperaba?",
    answer:
      "Todos nuestros proyectos incluyen un período de ajuste post-implementación. Si algo no rinde como esperábamos, lo corregimos sin costo adicional. Nuestro compromiso es con el resultado, no solo con la entrega.",
  },
  {
    question: "¿Ofrecen soporte después de la implementación?",
    answer:
      "Sí. Todos los planes incluyen soporte post-implementación. El plan de Automatización incluye 3 meses de soporte prioritario. Para proyectos enterprise ofrecemos SLA garantizado con tiempo de respuesta definido.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Todo lo que necesitas saber antes de automatizar con Alt4ir.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
