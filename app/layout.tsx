import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "Cemetco Engineering (Pvt) Ltd – The Construction Excellence",
    template: "%s | Cemetco Engineering",
  },
  description:
    "Cemetco Engineering is Sri Lanka's premier steel building construction company. We specialize in warehouses, factories, vehicle sheds, aircraft hangars, and factory renovations.",
  keywords: [
    "steel building construction",
    "Sri Lanka",
    "warehouse construction",
    "factory construction",
    "steel structures",
    "aircraft hangars",
    "Cemetco",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cemetco.lk",
    siteName: "Cemetco Engineering",
    title: "Cemetco Engineering (Pvt) Ltd – The Construction Excellence",
    description:
      "Sri Lanka's premier steel building construction company specializing in warehouses, factories, vehicle sheds, and aircraft hangars.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
