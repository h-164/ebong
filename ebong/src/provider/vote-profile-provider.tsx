"use client";

import { voteProfileClientApi } from "@/lib/client-api/vote-profiles";
import { VoteProfile } from "@/types/VoteProfile";
import { PropsWithChildren, createContext, useState } from "react";

interface VoteProfilesContextValue {
  voteProfiles: VoteProfile[];
  vote: (_id: string) => Promise<void>;
  fetchVoteProfiles: () => Promise<void>;
}

const defaultVoteProfilesContextValue: VoteProfilesContextValue = {
  voteProfiles: [],
  vote: (_id: string) => Promise.resolve(),
  fetchVoteProfiles: () => Promise.resolve(),
};

export const VoteProfileContext = createContext<VoteProfilesContextValue>(
  defaultVoteProfilesContextValue
);

interface Props extends PropsWithChildren {
  initialVoteProfiles: VoteProfile[];
}

export default function VoteProfilesProvider({
  children,
  initialVoteProfiles,
}: Props) {
  const [voteProfiles, setVoteProfiles] = useState(initialVoteProfiles);

  const fetchVoteProfiles = async () => {
    try {
      const { vote_profiles } = await voteProfileClientApi.getVoteProfiles();
      setVoteProfiles(vote_profiles);
    } catch (error) {
      console.error("Failed to fetch vote profiles:", error);
    }
  };

  const vote = async (_id: string) => {
    try {
      await voteProfileClientApi.patchVoteProfiles(_id);
      await fetchVoteProfiles();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VoteProfileContext.Provider
      value={{ voteProfiles, vote, fetchVoteProfiles }}
    >
      {children}
    </VoteProfileContext.Provider>
  );
}
