import { useQuery } from "@tanstack/react-query";
import { voteProfileClientApi } from "@/lib/client-api/vote-profiles";

export const useVoteProfileList = () => {
  return useQuery({
    queryKey: ["voteProfiles"],
    queryFn: voteProfileClientApi.getVoteProfiles
  });
};
