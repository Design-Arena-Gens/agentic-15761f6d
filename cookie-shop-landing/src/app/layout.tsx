import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golden Crumb Atelier | Luxury Cookie Shop",
  description:
    "Golden Crumb crafts small-batch cookies with pastry chef precision. Reserve seasonal drops, explore signature flavors, and elevate dessert with couture cookies.",
  openGraph: {
    title: "Golden Crumb Atelier",
    description:
      "A luxury cookie shop delivering couture desserts. Seasonal drops, chef-led tasting boxes, and nationwide delivery.",
    url: "https://agentic-15761f6d.vercel.app",
    siteName: "Golden Crumb Atelier",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Crumb Atelier",
    description:
      "Luxury cookie experiences crafted by Michelin-trained pastry chefs. Reserve signature drops and private tastings.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
