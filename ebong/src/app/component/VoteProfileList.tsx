"use client";

import { VoteProfile } from "@/types/VoteProfile";
import { clientApi } from "@/lib/client-api/vote-profiles";
import { useEffect, useState } from "react";
import Image from "next/image";

export const VoteProfileList = () => {
  const [profileArray, setProfileArray] = useState<VoteProfile[]>([]);

  const fetchProfiles = async () => {
    const data = await clientApi.getVoteProfiles();
    setProfileArray(data.vote_profiles);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleVote = async ({
    _id,
    voteCount,
  }: {
    _id: string;
    voteCount: number;
  }) => {
    try {
      await clientApi.patchVoteProfiles(_id, voteCount);

      await fetchProfiles();
    } catch (error) {
      console.error("Error voting:", error);
    }
  };
  return (
    <>
      {profileArray?.map((profile: VoteProfile) => (
        <div key={profile._id}>
          <Image
            src={profile.smilingImg}
            alt={"profileImg"}
            width={100}
            height={100}
          />
          <h1>{profile.name}</h1>
          <p>{profile.introduction}</p>
          <p>{profile.voteCount}</p>
          <button
            onClick={() =>
              handleVote({ _id: profile._id, voteCount: profile.voteCount })
            }
          >
            투표하기
          </button>
        </div>
      ))}
    </>
  );
};
