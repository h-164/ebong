import { LetterResponse, LettersResponse } from "@/types/Letter";

const VOTE_PROFILES_END_POINT = `${process.env.NEXT_PUBLIC_BASE_URL}/api/letters`;

const getLetters = async (): Promise<LettersResponse> => {
    const res = await fetch(VOTE_PROFILES_END_POINT, { cache: 'no-store' });
  
    const { data } = await res.json();
  
    return data;
  };

  export const clientApi = {
    getLetters,
  } as const;