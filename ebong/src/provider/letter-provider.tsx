"use client";

import { letterClientApi } from "@/lib/client-api/letters";
import { Letter } from "@/types/Letter";
import { PropsWithChildren, createContext, useState } from "react";

interface LettersContextValue {
  letters: Letter[];
  writeLetter: (pros: {
    sender: string;
    recipient: string;
    letterContent: string;
  }) => Promise<void>;
}

const defaultLettersContextValue: LettersContextValue = {
  letters: [],
  writeLetter: (pros: {
    sender: string;
    recipient: string;
    letterContent: string;
  }) => Promise.resolve(),
};

export const LetterContext = createContext<LettersContextValue>(
  defaultLettersContextValue
);

interface Props extends PropsWithChildren {
  initialLetters: Letter[];
}

export default function LettersProvider({ children, initialLetters }: Props) {
  const [letters, setLetters] = useState(initialLetters);

  const writeLetter = async ({
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

      const { letter } = await letterClientApi.postLetters({
        sender,
        recipient,
        letterContent,
      });

      setLetters((prev) => [...prev, letter]);
    } catch (error: any) {
      const errorMessage = error.message.startsWith("\n")
        ? error.message
        : "\n편지 전송 실패\n잠시 후 다시 시도해주세요ㅠㅠ";
      throw new Error(errorMessage);
    }
  };

  return (
    <LetterContext.Provider value={{ letters, writeLetter }}>
      {children}
    </LetterContext.Provider>
  );
}
