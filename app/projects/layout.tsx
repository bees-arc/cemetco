import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Cemetco Engineering's portfolio of 150+ completed steel building projects including warehouses, factories, aircraft hangars, and vehicle sheds across Sri Lanka.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
