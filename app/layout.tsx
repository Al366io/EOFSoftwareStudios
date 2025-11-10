import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EOF Software Studios | Freelance Software Engineering",
  description: "EOF Software Studios - Crafting excellence in software engineering. Freelance software engineer specializing in web development, software architecture, and API development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
