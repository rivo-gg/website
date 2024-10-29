import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import "./styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rivo.gg"),
  alternates: {
    canonical: "/",
  },
  title: "Rivo - The Digital Product Agency you can trust",
  description:
    "Rivo is a digital agency that you can trust. We work with community managers, creators, game developers, and entrepreneurs to help them achieve their goals faster.",
  twitter: {
    title: "Rivo - The Digital Product Agency you can trust",
    card: "summary_large_image",
    description:
      "Rivo is a digital agency that you can trust. We work with community managers, creators, game developers, and entrepreneurs to help them achieve their goals faster.",
  },
  openGraph: {
    title: "Rivo - The Digital Product Agency you can trust",
    description:
      "Rivo is a digital agency that you can trust. We work with community managers, creators, game developers, and entrepreneurs to help them achieve their goals faster.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
  themeColor: "#4876F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col flex-1 items-center pt-28 px-6">
      {children}
    </main>
  );
}
