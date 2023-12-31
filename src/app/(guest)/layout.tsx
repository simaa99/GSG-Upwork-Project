import FooterAuthComponent from "@/components/atoms/FooterAuthComponent/FooterAuthComponent";
import HeaderAuthComponent from "@/components/atoms/HeaderAuthComponent";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "upwork",
  description: "create upwork app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderAuthComponent/>
      {children}
      <FooterAuthComponent/>
      </>
  );
}
