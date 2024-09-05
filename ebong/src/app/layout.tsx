import { letterClientApi } from "@/lib/client-api/letters";
import { voteProfileClientApi } from "@/lib/client-api/vote-profiles";
import type { Metadata } from "next";
import LettersProvider from "@/provider/letter-provider";
import VoteProfilesProvider from "@/provider/vote-profile-provider";
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
  const letter_data = await letterClientApi.getLetters();
  const vote_profile_data = await voteProfileClientApi.getVoteProfiles();

  return (
    <html lang="en">
      <body className={omu.className}>
        <QueryProviders>
          <LettersProvider initialLetters={letter_data.letters}>
            <VoteProfilesProvider
              initialVoteProfiles={vote_profile_data.vote_profiles}
            >
              {children}
            </VoteProfilesProvider>
          </LettersProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
