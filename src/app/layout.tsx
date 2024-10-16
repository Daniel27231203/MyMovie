import type { Metadata } from "next";
import localFont from "next/font/local";
// import "keen-slider/keen-slider.min.css";
import "./globals.scss";
import LayoutClient from "./layout.client";
import { getServerSession } from "next-auth";
import NextAuthProvider from "@/Providers/NextAuthProvider";

const interSans = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My-Movie.kgz",
  description: "movie"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${interSans.variable}`}>
        <NextAuthProvider session={session}>
          <LayoutClient>{children}</LayoutClient>
        </NextAuthProvider>
      </body>
    </html>
  );
}
