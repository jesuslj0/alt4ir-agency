export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alt4ir AI Solutions",
    description:
      "Agencia de inteligencia artificial y automatización en Albacete",
    url: "https://alt4ir.com",
    email: "salesteam@alt4ir.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Albacete",
      addressRegion: "Castilla-La Mancha",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.9942,
      longitude: -1.8585,
    },
    areaServed: [
      { "@type": "City", name: "Albacete" },
      { "@type": "State", name: "Castilla-La Mancha" },
    ],
    serviceType: [
      "Inteligencia Artificial",
      "Automatización de procesos",
      "Desarrollo de aplicaciones con IA",
      "Agentes inteligentes",
    ],
    sameAs: [
      "https://www.instagram.com/alt4ir.ai/",
      "https://www.facebook.com/profile.php?id=61587772027579&locale=es_ES",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
