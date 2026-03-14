import "./globals.css";
import Nav from "./components/nav";

export const metadata = {
  title: "Ricardo Filipe | Currículo",
  description: "Currículo Interativo e Estudante de Ciência da Computação",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}