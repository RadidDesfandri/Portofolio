import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBarEn from "./_components/SideBarEn";
import NavbarEn from "./_components/NavbarEn";
import WalkingCharacter from "@/components/WalkingCharacter";
import GridPattern from "@/components/ui/animated-grid-pattern";
import Particles from "@/components/ui/particles";

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
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        <div className="relative">
          <GridPattern />
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            refresh
          />
          <SideBarEn />
          <NavbarEn />
          {children}
        </div>
      </body>
    </html>
  );
}
