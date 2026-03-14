import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Portfólio | Robson Lins',
  description: 'Currículo e Portfólio Pessoal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <nav>
          <Link href="/">Currículo</Link>
          <Link href="/forca">Projeto: Jogo da Forca</Link>
        </nav>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}