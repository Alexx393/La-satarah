import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Navbar from "../components/Navbar"; // 👈 Add this

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LA SATARAH LTD",
  description: "Kenya's Premium Herb Export Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-black text-white`}>
        <Navbar /> {/* 👈 Injected here */}
        <div className="pt-20">{children}</div> {/* 👈 Avoid content hiding under navbar */}
      </body>
    </html>
  );
}
