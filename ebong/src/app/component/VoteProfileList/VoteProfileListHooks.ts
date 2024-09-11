import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { voteProfileClientApi } from "@/lib/client-api/vote-profiles";

export const useVoteProfileList = () => {
  return useQuery({
    queryKey: ["voteProfiles"],
    queryFn: voteProfileClientApi.getVoteProfiles,
  });
};

export const useVote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (_id: string) => voteProfileClientApi.patchVoteProfiles(_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["voteProfiles"] });
    },
  });
};
