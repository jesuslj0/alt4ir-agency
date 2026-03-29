import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Alt4ir AI Solutions",
  description:
    "Términos y condiciones de uso del sitio web y los servicios de Alt4ir AI Solutions.",
}

export default function TerminosPage() {
  return (
    <article>
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">
        Términos y Condiciones
      </h1>

      <p className="mb-4 leading-relaxed text-muted-foreground">
        Los presentes términos y condiciones regulan el acceso y uso del sitio
        web de Alt4ir AI Solutions, así como la contratación de los servicios
        ofrecidos a través del mismo. Al acceder a este sitio web, aceptas
        cumplir con estos términos en su totalidad.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Identificación del titular
      </h2>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Denominación:</strong> Alt4ir AI
          Solutions
        </li>
        <li>
          <strong className="text-foreground">Domicilio:</strong> Albacete,
          España
        </li>
        <li>
          <strong className="text-foreground">Correo electrónico:</strong>{" "}
          salesteam@alt4ir.com
        </li>
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Objeto de los servicios
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Alt4ir AI Solutions es una agencia especializada en el desarrollo de
        aplicaciones con inteligencia artificial, automatización de procesos de
        negocio e integración de agentes inteligentes. A través de este sitio
        web, proporcionamos información sobre nuestros servicios y facilitamos el
        contacto con potenciales clientes.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Condiciones de uso
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        El usuario se compromete a hacer un uso adecuado del sitio web, de
        conformidad con la ley, los presentes términos y las buenas costumbres.
        En particular, el usuario se obliga a:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          No utilizar el sitio web con fines ilícitos, fraudulentos o que
          atenten contra los derechos de terceros.
        </li>
        <li>
          No introducir virus, malware o cualquier otro elemento que pueda dañar
          o alterar el funcionamiento del sitio web.
        </li>
        <li>
          No intentar acceder a áreas restringidas del sitio web sin
          autorización.
        </li>
        <li>
          Proporcionar información veraz y actualizada en los formularios de
          contacto.
        </li>
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Propiedad intelectual
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Todos los contenidos del sitio web, incluyendo textos, imágenes,
        logotipos, diseños, código fuente, marcas y demás elementos, son
        propiedad de Alt4ir AI Solutions o de sus legítimos titulares y están
        protegidos por las leyes de propiedad intelectual e industrial.
      </p>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Queda prohibida la reproducción, distribución, comunicación pública,
        transformación o cualquier otra forma de explotación de los contenidos
        sin la autorización expresa y por escrito de Alt4ir AI Solutions.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Contratación de servicios
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        La contratación de los servicios de Alt4ir AI Solutions se formaliza
        mediante acuerdo específico entre las partes, previa solicitud del
        cliente a través de los canales habilitados. Los precios mostrados en el
        sitio web tienen carácter orientativo y no constituyen una oferta
        vinculante. El presupuesto definitivo se proporcionará de forma
        personalizada en función de las necesidades del proyecto.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Limitación de responsabilidad
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Alt4ir AI Solutions no será responsable de los daños y perjuicios de
        cualquier naturaleza que pudieran derivarse del uso del sitio web,
        incluyendo, sin limitación:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          Errores u omisiones en los contenidos publicados en el sitio web.
        </li>
        <li>
          La falta de disponibilidad o accesibilidad del sitio web por causas
          ajenas a nuestro control.
        </li>
        <li>
          Daños causados por terceros mediante intrusiones no autorizadas.
        </li>
        <li>
          Daños indirectos, incidentales o consecuentes derivados del uso de
          nuestros servicios.
        </li>
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Enlaces a terceros
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Este sitio web puede contener enlaces a sitios web de terceros. Alt4ir
        AI Solutions no se hace responsable del contenido, las políticas de
        privacidad ni las prácticas de dichos sitios web. El acceso a estos
        enlaces se realiza bajo la exclusiva responsabilidad del usuario.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Modificaciones
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Alt4ir AI Solutions se reserva el derecho de modificar estos términos y
        condiciones en cualquier momento. Las modificaciones entrarán en vigor
        desde su publicación en el sitio web. El uso continuado del sitio web
        tras la publicación de los cambios implica la aceptación de los mismos.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Legislación aplicable y jurisdicción
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Los presentes términos y condiciones se rigen por la legislación
        española. Para la resolución de cualquier controversia derivada del uso
        de este sitio web o de la contratación de nuestros servicios, las partes
        se someten a los Juzgados y Tribunales de Albacete, con renuncia expresa
        a cualquier otro fuero que pudiera corresponderles.
      </p>

      <p className="mt-16 text-sm text-muted-foreground">
        Última actualización: 29 de marzo de 2026
      </p>
    </article>
  )
}
