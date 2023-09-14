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
  return <div>layout user</div>;
}
