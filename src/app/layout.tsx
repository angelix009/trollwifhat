import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// Fun font for meme vibes - Fredoka has that chunky, playful look
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrollWifHat - Professional Meme Character Creator",
  description: "Create unique troll face characters with professional UI/UX. Perfect for profile pictures, NFTs, and digital art.",
  keywords: "troll face, meme creator, profile picture, NFT, character creator, digital art",
  authors: [{ name: "TrollWifHat Team" }],
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${fredoka.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
