"use client";

import { useContext } from "react";
import Image from "next/image";
import { VoteProfileContext } from "@/provider/vote-profile-provider";

export const VoteProfileList = () => {
  const { voteProfiles, vote } = useContext(VoteProfileContext);

  const handleVote = async (_id: string) => {
    try {
      await vote(_id);
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  return (
    <>
      {voteProfiles?.map((profile) => (
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
          <button onClick={() => handleVote(profile._id)}>투표하기</button>
        </div>
      ))}
    </>
  );
};
