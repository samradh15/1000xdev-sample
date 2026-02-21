import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import TactileBackground from "@/components/TactileBackground";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "1000xDev | Premium AI-Native Product Studio",
  description: "We turn raw ideas into shipped infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${newsreader.variable} antialiased selection:bg-[#1A1A1A] selection:text-[#F9F8F6]`}
      >
        <TactileBackground />
        {children}
      </body>
    </html>
  );
}
