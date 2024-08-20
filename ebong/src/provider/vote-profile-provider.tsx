"use client";

import { voteProfileClientApi } from "@/lib/client-api/vote-profiles";
import { VoteProfile } from "@/types/VoteProfile";
import { PropsWithChildren, createContext, useState } from "react";

interface VoteProfilesContextValue {
  voteProfiles: VoteProfile[];
  vote: (_id: string, voteCount: number) => Promise<void>;
}

const defaultVoteProfilesContextValue: VoteProfilesContextValue = {
  voteProfiles: [],
  vote: (_id: string, voteCount: number) => Promise.resolve(),
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

  const vote = async (_id: string, voteCount: number) => {
    try {
      await voteProfileClientApi.patchVoteProfiles(_id, voteCount);

      setVoteProfiles((prev) =>
        prev.map((voteProfile) =>
          voteProfile._id === _id ? { ...voteProfile, voteCount } : voteProfile
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VoteProfileContext.Provider value={{ voteProfiles, vote }}>
      {children}
    </VoteProfileContext.Provider>
  );
}
