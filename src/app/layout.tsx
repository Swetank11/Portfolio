import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";
import SmoothScrolling from '@/components/SmoothScrolling';
import { Header } from '@/components/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Video Portfolio",
  description: "Cinematic Brutalist Video Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} h-full antialiased dark`}
    >
      <body className="bg-surface-lowest text-on-surface antialiased overflow-x-hidden">
        <SmoothScrolling>
          <Header />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
