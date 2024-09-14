import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { voteProfileClientApi } from "@/lib/client-api/vote-profiles";

export const useVoteProfileList = () => {
  return useQuery({
    queryKey: ["voteProfiles"],
    queryFn: voteProfileClientApi.getVoteProfiles,
  });
};

export const useVote = (
  openSuccessModal: (message: string) => void,
  openErrorModal: (message: string) => void
) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (_id: string) => voteProfileClientApi.patchVoteProfiles(_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["voteProfiles"] });
      openSuccessModal(
        "투표 완료!"
      );
    },
    onError: (error: any) => {
      openErrorModal("투표 실패ㅠ 잠시 후 다시 시도해주세요");
    },
  });
};
