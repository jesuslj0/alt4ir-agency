import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidad | Alt4ir AI Solutions",
  description:
    "Política de privacidad de Alt4ir AI Solutions. Información sobre el tratamiento de datos personales conforme al RGPD.",
}

export default function PrivacidadPage() {
  return (
    <article>
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">
        Política de Privacidad
      </h1>

      <p className="mb-4 leading-relaxed text-muted-foreground">
        En Alt4ir AI Solutions nos comprometemos a proteger la privacidad de
        nuestros usuarios. Esta política describe cómo recopilamos, utilizamos y
        protegemos tus datos personales de conformidad con el Reglamento General
        de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de
        diciembre, de Protección de Datos Personales y garantía de los derechos
        digitales (LOPDGDD).
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Responsable del tratamiento
      </h2>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Identidad:</strong> Alt4ir AI
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
        Datos que recopilamos
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Recopilamos únicamente los datos que nos proporcionas voluntariamente a
        través de nuestros formularios de contacto y los datos técnicos
        necesarios para el funcionamiento del sitio web:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Datos de contacto:</strong>{" "}
          nombre, dirección de correo electrónico, número de teléfono y mensaje.
        </li>
        <li>
          <strong className="text-foreground">Datos técnicos:</strong> dirección
          IP, tipo de navegador, sistema operativo, páginas visitadas y duración
          de la visita.
        </li>
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Finalidad del tratamiento
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Tratamos tus datos personales con las siguientes finalidades:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>Responder a tus consultas y solicitudes de información.</li>
        <li>
          Gestionar la relación contractual derivada de la prestación de
          nuestros servicios.
        </li>
        <li>
          Enviarte comunicaciones comerciales sobre nuestros servicios, siempre
          con tu consentimiento previo.
        </li>
        <li>
          Mejorar la experiencia de navegación y el rendimiento de nuestro sitio
          web.
        </li>
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Base jurídica del tratamiento
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        El tratamiento de tus datos se fundamenta en las siguientes bases
        legales del artículo 6.1 del RGPD:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Consentimiento (Art. 6.1.a):</strong>{" "}
          cuando nos envías un formulario de contacto o aceptas recibir
          comunicaciones comerciales.
        </li>
        <li>
          <strong className="text-foreground">
            Ejecución contractual (Art. 6.1.b):
          </strong>{" "}
          cuando el tratamiento es necesario para la prestación de los servicios
          contratados.
        </li>
        <li>
          <strong className="text-foreground">
            Interés legítimo (Art. 6.1.f):
          </strong>{" "}
          para la mejora de nuestros servicios y la seguridad del sitio web.
        </li>
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Destinatarios de los datos
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        No cedemos tus datos personales a terceros, salvo obligación legal.
        Podemos compartir datos con proveedores de servicios que actúan como
        encargados del tratamiento (hosting, correo electrónico, analítica web),
        siempre bajo contratos que garantizan la protección de tus datos.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Transferencias internacionales
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        En caso de que alguno de nuestros proveedores de servicios se encuentre
        fuera del Espacio Económico Europeo, nos aseguramos de que existan
        garantías adecuadas, como cláusulas contractuales tipo aprobadas por la
        Comisión Europea o decisiones de adecuación.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Plazo de conservación
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Conservaremos tus datos personales durante el tiempo necesario para
        cumplir con la finalidad para la que fueron recogidos, así como para
        cumplir con las obligaciones legales aplicables. Los datos de contacto se
        conservan durante un máximo de 2 años desde la última comunicación, salvo
        que exista una relación contractual vigente.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Derechos del usuario
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Como titular de los datos, puedes ejercer en cualquier momento los
        siguientes derechos:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Acceso:</strong> conocer qué datos
          personales tratamos sobre ti.
        </li>
        <li>
          <strong className="text-foreground">Rectificación:</strong> solicitar
          la corrección de datos inexactos o incompletos.
        </li>
        <li>
          <strong className="text-foreground">Supresión:</strong> solicitar la
          eliminación de tus datos cuando ya no sean necesarios.
        </li>
        <li>
          <strong className="text-foreground">Oposición:</strong> oponerte al
          tratamiento de tus datos en determinadas circunstancias.
        </li>
        <li>
          <strong className="text-foreground">Portabilidad:</strong> recibir tus
          datos en un formato estructurado y de uso común.
        </li>
        <li>
          <strong className="text-foreground">Limitación:</strong> solicitar la
          limitación del tratamiento en los supuestos previstos por la ley.
        </li>
      </ul>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Para ejercer cualquiera de estos derechos, envía un correo electrónico a{" "}
        <strong className="text-foreground">salesteam@alt4ir.com</strong>{" "}
        indicando el derecho que deseas ejercer y adjuntando una copia de tu
        documento de identidad.
      </p>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Asimismo, tienes derecho a presentar una reclamación ante la Agencia
        Española de Protección de Datos (AEPD) en{" "}
        <span className="text-foreground">www.aepd.es</span> si consideras que
        el tratamiento de tus datos no se ajusta a la normativa vigente.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Seguridad
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Adoptamos las medidas técnicas y organizativas adecuadas para garantizar
        la seguridad de tus datos personales y evitar su alteración, pérdida,
        tratamiento o acceso no autorizado, teniendo en cuenta el estado de la
        tecnología, la naturaleza de los datos y los riesgos a los que están
        expuestos.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Cookies
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Este sitio web utiliza cookies. Para más información sobre qué cookies
        utilizamos y cómo gestionarlas, consulta nuestra{" "}
        <Link
          href="/legal/cookies"
          className="text-foreground underline underline-offset-4 transition-colors hover:text-violet-400"
        >
          Política de Cookies
        </Link>
        .
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Modificaciones
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Nos reservamos el derecho a modificar esta política de privacidad en
        cualquier momento. Cualquier cambio será publicado en esta página con la
        fecha de actualización correspondiente. Te recomendamos revisarla
        periódicamente.
      </p>

      <p className="mt-16 text-sm text-muted-foreground">
        Última actualización: 29 de marzo de 2026
      </p>
    </article>
  )
}
