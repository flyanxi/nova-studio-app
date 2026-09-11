import type { Metadata, Viewport } from "next";
import { Playfair_Display, Hanken_Grotesk, Courier_Prime } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

const hanken = Hanken_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-hanken",
});

const courier = Courier_Prime({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier",
});

// TODO: replace with a real domain before deploying to production
const SITE_URL = "https://nova-studio.com";
const SITE_TITLE = "NOVA - Architecture";
const SITE_DESCRIPTION =
  "Crafting modern architecture and interior design experiences tailored to your vision.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | NOVA",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "architecture studio",
    "interior design",
    "modern architecture",
    "commercial design",
    "NOVA studio",
  ],
  authors: [{ name: "NOVA Studio" }],
  creator: "NOVA Studio",
  publisher: "NOVA Studio",

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "NOVA",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/assets/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "NOVA - Modern Architecture Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/assets/hero-bg.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${hanken.variable} ${playfair.variable} ${courier.variable} font-sans bg-surface text-onSurface antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}