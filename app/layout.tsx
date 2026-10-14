// src/app/layout.tsx  <-- THIS IS THE ONLY LAYOUT FILE YOU NEED TO EDIT

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import your shared components
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AppWrapper } from "@/components/AppWrapper";

// This is now the single, definitive font configuration for your entire app
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "COV Studios",
  description: "COV Studios — crafting visionary ideas into timeless creations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AppWrapper>
          {children}
        </AppWrapper>
        <Footer />
      </body>
    </html>
  );
}