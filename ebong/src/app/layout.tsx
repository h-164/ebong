import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import QueryProviders from "@/provider/query-provider";

const omu = localFont({
  src: "./fonts/omuFont.ttf",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "이봉이 형제",
  description: "이봉이 형제 팬 페이지",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={omu.className}>
        <QueryProviders>{children}</QueryProviders>
      </body>
    </html>
  );
}
