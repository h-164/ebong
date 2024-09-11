"use client";

import Image from "next/image";
import { useVoteProfileList } from "./VoteProfileListHooks";

export const VoteProfileList = () => {
  const { data } = useVoteProfileList();
  const voteProfiles = data?.vote_profiles;

  // const handleVote = async (_id: string) => {
  //   try {
  //     await vote(_id);
  //   } catch (error) {
  //     console.error("Error voting:", error);
  //   }
  // };
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
            {/* <button onClick={() => handleVote(_id)}>투표하기</button> */}
          </div>
        );
      })}
    </>
  );
};
