import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comunidad F.A.L - Operaciones",
  description: "Sitio Oficial de la comunidad de simulación militar F.A.L",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
      {/* Importamos la fuente militar desde los servidores de Google */}
      <head>
        <link rel="preconnect" href="https://googleapis.com" />
        <link rel="preconnect" href="https://gstatic.com" crossOrigin="anonymous" />
        <link href="https://googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#050506', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
