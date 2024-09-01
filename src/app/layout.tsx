import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Dancing_Script({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Song jeopardy",
  description: "Fun multi-player game with songs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
