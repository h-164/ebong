import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { voteProfileClientApi } from "@/lib/client-api/vote-profiles";
import { setCookieUntilMidnight } from "./VoteCookie";

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
    onSuccess:  (_data, _id: string)  => {
      queryClient.invalidateQueries({ queryKey: ["voteProfiles"] });
      setCookieUntilMidnight(_id, "true");
      openSuccessModal(
        "투표 완료!"
      );
    },
    onError: () => {
      openErrorModal("투표 실패ㅠ 잠시 후 다시 시도해주세요");
    },
  });
};