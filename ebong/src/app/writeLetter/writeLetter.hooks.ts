import { useMutation } from "@tanstack/react-query";
import { letterClientApi } from "@/lib/client-api/letters";

export const useWriteLetter = (
  openSuccessModal: (message: string) => void,
  openErrorModal: (message: string) => void
) => {
  return useMutation({
    mutationFn: letterClientApi.postLetters,
    onSuccess: () => {
      openSuccessModal(
        "편지를 보냈어용\n24시간 안에 답장이 도착해요\n편지함으로 이동할까요?"
      );
    },
    onError: (error: any) => {
      openErrorModal(`${error.message || error}`);
    },
  });
};
