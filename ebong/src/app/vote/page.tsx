"use client";

import { useEffect, useState } from "react";
import { VoteProfile } from "@/types/VoteProfile";
import Image from "next/image";

export default function Vote() {
  const [profileArray, setProfileArray] = useState<VoteProfile[]>([]);

  const fetchProfiles = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/vote_profiles`,
      { cache: "no-store" }
    );
    const data = await response.json();
    setProfileArray(data.data.vote_profiles);
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/vote_profiles?_id=${_id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ voteCount: voteCount }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update vote count");
      }

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
}
