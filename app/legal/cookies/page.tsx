import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies | Alt4ir AI Solutions",
  description:
    "Política de cookies de Alt4ir AI Solutions. Información sobre las cookies que utilizamos y cómo gestionarlas.",
}

export default function CookiesPage() {
  return (
    <article>
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">
        Política de Cookies
      </h1>

      <p className="mb-4 leading-relaxed text-muted-foreground">
        En Alt4ir AI Solutions utilizamos cookies y tecnologías similares para
        mejorar tu experiencia de navegación. Esta política explica qué son las
        cookies, qué tipos utilizamos y cómo puedes gestionarlas.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        ¿Qué son las cookies?
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Las cookies son pequeños archivos de texto que los sitios web almacenan
        en tu dispositivo (ordenador, tableta o teléfono móvil) cuando los
        visitas. Permiten que el sitio web recuerde tus acciones y preferencias
        durante un periodo de tiempo, de manera que no tengas que
        reintroducirlos cada vez que vuelvas a visitarlo.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Tipos de cookies que utilizamos
      </h2>

      <h3 className="mt-8 mb-3 text-lg font-semibold">
        Cookies técnicas (necesarias)
      </h3>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Son imprescindibles para el correcto funcionamiento del sitio web. Sin
        ellas, algunas funcionalidades no estarían disponibles. No requieren tu
        consentimiento, ya que se basan en nuestro interés legítimo de
        proporcionarte un servicio funcional.
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Preferencia de tema:</strong>{" "}
          almacena tu selección de modo claro u oscuro.
        </li>
        <li>
          <strong className="text-foreground">Sesión:</strong> mantiene el
          estado de tu navegación durante la visita.
        </li>
      </ul>

      <h3 className="mt-8 mb-3 text-lg font-semibold">
        Cookies analíticas
      </h3>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Nos permiten medir y analizar el tráfico del sitio web para mejorar su
        rendimiento y contenido. Estas cookies recopilan información de forma
        anónima y agregada.
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Páginas visitadas:</strong> qué
          secciones del sitio se consultan con más frecuencia.
        </li>
        <li>
          <strong className="text-foreground">Tiempo de permanencia:</strong>{" "}
          cuánto tiempo pasas en cada página.
        </li>
        <li>
          <strong className="text-foreground">Origen del tráfico:</strong> desde
          qué sitio web o buscador has llegado.
        </li>
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Cookies de terceros
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Algunos servicios de terceros que utilizamos pueden instalar sus propias
        cookies en tu dispositivo. Estos servicios tienen sus propias políticas
        de privacidad y cookies:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Servicios de analítica:</strong>{" "}
          para medir el uso del sitio web y generar informes estadísticos.
        </li>
        <li>
          <strong className="text-foreground">Tipografías web:</strong> para
          cargar las fuentes utilizadas en el diseño del sitio.
        </li>
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Base jurídica
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        De conformidad con el artículo 22.2 de la Ley 34/2002, de 11 de julio,
        de servicios de la sociedad de la información y de comercio electrónico
        (LSSI-CE), las cookies técnicas se instalan en base a nuestro interés
        legítimo. Para el resto de cookies, solicitamos tu consentimiento previo
        antes de su instalación.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Cómo gestionar las cookies
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Puedes configurar tu navegador para bloquear o eliminar las cookies en
        cualquier momento. A continuación te indicamos cómo hacerlo en los
        navegadores más comunes:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Google Chrome:</strong>{" "}
          Configuración → Privacidad y seguridad → Cookies y otros datos de
          sitios.
        </li>
        <li>
          <strong className="text-foreground">Mozilla Firefox:</strong> Ajustes
          → Privacidad y seguridad → Cookies y datos del sitio.
        </li>
        <li>
          <strong className="text-foreground">Safari:</strong> Preferencias →
          Privacidad → Gestionar datos de sitios web.
        </li>
        <li>
          <strong className="text-foreground">Microsoft Edge:</strong>{" "}
          Configuración → Cookies y permisos del sitio → Administrar y eliminar
          cookies.
        </li>
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Consecuencias de desactivar las cookies
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Si decides bloquear o eliminar las cookies, es posible que algunas
        funcionalidades del sitio web no funcionen correctamente. Por ejemplo,
        las preferencias de visualización podrían no guardarse entre visitas.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Actualización de esta política
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Nos reservamos el derecho de actualizar esta política de cookies en
        cualquier momento para adaptarla a novedades legislativas o cambios en
        nuestro sitio web. Te recomendamos revisarla periódicamente.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Contacto
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Si tienes alguna pregunta sobre nuestra política de cookies, puedes
        contactarnos en{" "}
        <strong className="text-foreground">salesteam@alt4ir.com</strong>.
      </p>

      <p className="mt-16 text-sm text-muted-foreground">
        Última actualización: 29 de marzo de 2026
      </p>
    </article>
  )
}
