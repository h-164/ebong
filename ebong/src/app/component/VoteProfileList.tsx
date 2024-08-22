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
      {voteProfiles?.map((profile) => {
        const { _id, smilingImg, name, introduction, voteCount } = profile;
        return (
          <div key={_id}>
            <Image src={smilingImg} alt="profileImg" width={100} height={100} />
            <h1>{name}</h1>
            <p>{introduction}</p>
            <p>{voteCount}</p>
            <button onClick={() => handleVote(_id)}>투표하기</button>
          </div>
        );
      })}
    </>
  );
};
