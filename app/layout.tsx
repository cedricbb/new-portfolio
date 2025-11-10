import type { Metadata } from "next";
import {Geist, Geist_Mono, Unbounded} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Navbar from "@/app/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unbounded = Unbounded({
    variable: '--font-unbounded',
    subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Cedric. Portfolio",
  description: "Portfolio personnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} antialiased bg-[#121212]`}
      >
      <Navbar />
        {children}
      </body>
    </html>
  );
}
