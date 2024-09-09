import { LettersResponse } from "@/types/Letter";

const LETTERS_END_POINT = `${process.env.NEXT_PUBLIC_BASE_URL}/api/letters`;

const getLetters = async (): Promise<LettersResponse> => {
    const res = await fetch(LETTERS_END_POINT, { cache: 'no-store' });
  
    const { data } = await res.json();
  
    return data;
  };

  const postLetters = async ({
    sender,
    recipient,
    letterContent,
  }: {
    sender: string;
    recipient: string;
    letterContent: string;
  }) => {
    try {
      if (!sender) {
        throw new Error("\n보내는 사람을 입력 안해짜나요!!!!!");
      }

      if (!recipient) {
        throw new Error("\n누구한테 보낼 건지 선택해줘. \n 혹시 나?(두근-💕)");
      }

      if (!letterContent) {
        throw new Error("\n편지 내용 입력하슈.");
      }
      
      const res = await fetch(
      LETTERS_END_POINT,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sender,recipient,letterContent}),
        }
      );

      const { data } = await res.json();
  
      return data;

    } catch (error: any) {
      const errorMessage = error.message.startsWith("\n")
        ? error.message
        : "\n편지 전송 실패\n잠시 후 다시 시도해주세요ㅠㅠ";
      throw new Error(errorMessage);
    }
  };


export const letterClientApi = {
    getLetters,
    postLetters
  } as const;