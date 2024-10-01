import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Rivers United F.C | Official Website",
  description: "Rivers United Official Website",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
