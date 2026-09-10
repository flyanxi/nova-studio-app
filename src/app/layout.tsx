import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "NOVA - Architecture",
  description: "Crafting modern architecture and interior design experiences tailored to your vision.",
  icons: {
    icon: "/favicon.ico", 
  },
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