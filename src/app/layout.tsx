import "./globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext";
import Link from "next/link";

export const metadata = {
  title: "Next.js 15 Advanced Example",
  description: "Demostración completa de Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <header>
            <h1>Next.js 15 Advanced Example</h1>
            <nav>
              <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
              <Link href="/products">Products</Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer>© 2025 - Advanced Next.js Demo</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
