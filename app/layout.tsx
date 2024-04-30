import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const font = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Inspo",
  description: "Build and share your inspiration boards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}