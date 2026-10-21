import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Adwings | Content, Branding & Digital Growth",
  description:
    "Adwings offers video content making, creative graphic design, website designing, Google Business profiling, social media marketing, and ad shoots."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
