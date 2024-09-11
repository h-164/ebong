import { useQuery } from "@tanstack/react-query";
import { letterClientApi } from "@/lib/client-api/letters";

export const useLetterList = () => {
  return useQuery({
    queryKey: ["letters"],
    queryFn: letterClientApi.getLetters,
  });
};
