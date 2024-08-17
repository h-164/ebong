import { LetterResponse, LettersResponse } from "@/types/Letter";

const VOTE_PROFILES_END_POINT = `${process.env.NEXT_PUBLIC_BASE_URL}/api/letters`;

const getLetters = async (): Promise<LettersResponse> => {
    const res = await fetch(VOTE_PROFILES_END_POINT, { cache: 'no-store' });
  
    const { data } = await res.json();
  
    return data;
  };

const postLetters = async (sender:String, recipient:string, letterContent:string): Promise<LetterResponse> => {
    const res = await fetch(
        VOTE_PROFILES_END_POINT,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sender, recipient, letterContent }),
        }
      );

      const { data } = await res.json();
  
      return data;
}

export const clientApi = {
    getLetters,
    postLetters
  } as const;