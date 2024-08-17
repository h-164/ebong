import { VoteProfileResponse, VoteProfilesResponse } from "@/types/VoteProfile";

const VOTE_PROFILES_END_POINT = `${process.env.NEXT_PUBLIC_BASE_URL}/api/vote_profiles`;

const getVoteProfiles = async (): Promise<VoteProfilesResponse> => {
    const res = await fetch(VOTE_PROFILES_END_POINT, { cache: 'no-store' });
  
    const { data } = await res.json();
  
    return data;
  };

const patchVoteProfiles = async ( _id:string, voteCount: number,): Promise<VoteProfileResponse> => {
    const response = await fetch(
      `${VOTE_PROFILES_END_POINT}?_id=${_id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ voteCount: voteCount }),
      }
    );
  
    const data: VoteProfileResponse = await response.json();
    return data;
  };

  export const clientApi = {
    getVoteProfiles,
    patchVoteProfiles
  } as const;