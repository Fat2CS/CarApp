import "./globals.css";
import { Footer, NavBar } from "../components";
// import { Footer, NavBar } from "@comp";

export const metadata = {
  title: "AI Artistic",
  description: "Creer des oeuvres artistique  avec IA"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
