import { clientApi } from "@/lib/client-api/letters";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LettersProvider from "@/provider/letter-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이봉이 형제",
  description: "이봉이 형제 팬 페이지",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await clientApi.getLetters();

  return (
    <html lang="en">
      <body className={inter.className}>
        <LettersProvider initialLetters={data.letters}>
          {children}
        </LettersProvider>
      </body>
    </html>
  );
}
