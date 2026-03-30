import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AetherHost - Minecraft Hosting",
  description: "Premium Minecraft server hosting with affordable pricing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}