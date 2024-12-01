import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const silkScreen = localFont({
  src: "./fonts/Silkscreen-Regular.ttf",
  variable: "--font-silk-screen",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pacman",
  description: "Play!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${silkScreen.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
