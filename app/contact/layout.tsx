import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Cemetco Engineering for a free consultation and quote on your steel building project. Phone: +94 112 721 662 | Email: info@cemetco.lk",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
