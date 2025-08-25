import "./globals.css";

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
        <main>{children}</main>
        <footer>Feito com Next.js</footer>
      </body>
    </html>
  );
}
