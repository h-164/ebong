"use client";

import Image from "next/image";
import { useVoteProfileList, useVote } from "./VoteProfileListHooks";

interface Profile {
  _id: string;
  smilingImg: string;
  name: string;
  introduction: string;
  voteCount: number;
}

interface GroupedProfiles {
  [rank: string]: Profile[];
}

export const VoteProfileList = () => {
  const { data } = useVoteProfileList();
  const voteProfiles = data?.vote_profiles;

  const voteMutation = useVote();

  const handleVote = (_id: string) => {
    voteMutation.mutate(_id);
  };

  let rank = [1, 2, 3, 4, 5, 6, 7];
  voteProfiles?.map((profile, index) => {
    if (index > 0 && profile.voteCount === voteProfiles[index - 1].voteCount) {
      rank[index] = rank[index - 1];
    }
    return null;
  });

  const groupedProfiles: GroupedProfiles = {};

  voteProfiles?.forEach((profile, index) => {
    const rankValue = rank[index].toString();
    if (!groupedProfiles[rankValue]) {
      groupedProfiles[rankValue] = [];
    }
    groupedProfiles[rankValue].push(profile);
  });

  return (
    <>
      {Object.keys(groupedProfiles).map((rankValue) => (
        <div key={rankValue} style={{ display: "flex" }}>
          <div>
            <h1>{rankValue}등</h1>
          </div>
          {groupedProfiles[rankValue].map((profile) => {
            const { _id, smilingImg, name, introduction, voteCount } = profile;
            return (
              <div key={_id}>
                <Image
                  src={smilingImg}
                  alt="profileImg"
                  width={100}
                  height={100}
                />
                <h1>{name}</h1>
                <p>{introduction}</p>
                <p>{voteCount}</p>
                <button onClick={() => handleVote(_id)}>투표하기</button>
              </div>
            );
          })}
          <h2>{groupedProfiles[rankValue][0].voteCount}표</h2>
        </div>
      ))}
    </>
  );
};
