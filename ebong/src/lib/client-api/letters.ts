import { LettersResponse } from "@/types/Letter";

const LETTERS_END_POINT = `${process.env.NEXT_PUBLIC_BASE_URL}/api/letters`;

const getLetters = async (): Promise<LettersResponse> => {
    const res = await fetch(LETTERS_END_POINT, { cache: 'no-store' });
  
    const { data } = await res.json();
  
    return data;
  };

  const postLetters = async ({...rest}) => {
    
    const res = await fetch(
      LETTERS_END_POINT,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...rest }),
        }
      );

      const { data } = await res.json();
  
      return data;
}

export const letterClientApi = {
    getLetters,
    postLetters
  } as const;