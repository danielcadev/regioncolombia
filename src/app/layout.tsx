import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Layout/Footer";
import NavbarMobile from "@/components/Layout/NavbarMobile";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "RegionColombia - Proyectos Comunitarios en las Regiones de Colombia",
  description: "Descubre y explora los proyectos comunitarios en todas las regiones de Colombia. Una plataforma para conectar, apoyar y promover iniciativas locales en todo el país.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="font-sans bg-background text-foreground flex flex-col min-h-screen">
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="lg:hidden">
          <NavbarMobile />
        </div>
        <main className="flex-grow">
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}