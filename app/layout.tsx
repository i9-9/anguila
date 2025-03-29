import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Autodefensa - Anguila",
  description: "Nuevo single de Autodefensa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-['Helvetica_Now_Display'] antialiased">
        {children}
      </body>
    </html>
  );
}
