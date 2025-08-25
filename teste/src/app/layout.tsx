'use client'

import "./globals.css";
import { SessionProvider } from "next-auth/react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>

        <header>
          <nav>
            <a href="/">Início</a> | <a href="/sobre">Sobre</a>
          </nav>
        </header>
        <main>
          <SessionProvider>{children}</SessionProvider>
        </main>
        <footer>Feito com Next.js</footer>
      </body>
    </html>
  );
}
