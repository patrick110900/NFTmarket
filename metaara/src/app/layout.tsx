import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron, Space_Grotesk } from "next/font/google"; // Import new fonts
import "./globals.css";
import { Web3Provider } from '@/context/Web3Context'; // Import Web3Provider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define Orbitron font variable for headings
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Specify weights if needed
});

// Define Space Grotesk font variable for body text
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Specify weights if needed
});


export const metadata: Metadata = {
  title: "Metaara NFT Marketplace", // Update title
  description: "Metaara - Futuristic NFT Marketplace", // Update description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${orbitron.variable} ${geistSans.variable} ${geistMono.variable} antialiased`} // Apply new font variables
      >
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
