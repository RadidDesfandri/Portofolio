import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBarEn from "./_components/SideBarEn";
import NavbarEn from "./_components/NavbarEn";

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

export const metadata: Metadata = {
  title: "Prtfl Radid",
  description: "Sebuah website yang mendeskripsikan tentang saya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideBarEn />
        <NavbarEn />
        {children}
      </body>
    </html>
  );
}
