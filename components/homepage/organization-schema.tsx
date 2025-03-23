'use server';

import { Schema } from '../Schema';

export async function OrganizationSchemaMetadata() {
  return (
    <>
      {/* Social Profile Schema (formerly SocialProfileJsonLd) */}
      <Schema
        json={`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rivo",
            "url": "https://rivo.gg",
            "sameAs": [
              "https://www.linkedin.com/company/rivo-gg/", 
              "https://github.com/rivo-gg", 
              "https://x.com/Rivodotgg"
            ]
          }
        `}
      />

      {/* Organization Schema (formerly OrganizationJsonLd) */}
      <Schema
        json={`
          {
            "@context": "https://schema.org",
            "@type": "Corporation",
            "@id": "https://rivo.gg/",
            "logo": "https://rivo.gg/Logo.png",
            "legalName": "Dominik Koch",
            "name": "Rivo",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Parkstraße 5",
              "addressLocality": "Riedlingen",
              "addressRegion": "BW",
              "postalCode": "88499",
              "addressCountry": "DE"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+49 151 23793107",
                "contactType": "customer service",
                "email": "support@rivo.gg",
                "areaServed": "DE",
                "availableLanguage": ["English", "German"]
              }
            ],
            "sameAs": ["https://rivo.gg/"],
            "url": "https://rivo.gg/"
          }
        `}
      />
    </>
  );
}
