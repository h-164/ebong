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
      const { letter } = await letterClientApi.postLetters({
        sender,
        recipient,
        letterContent,
      });

      setLetters((prev) => [...prev, letter]);
    } catch (error) {
      throw new Error("편지 전송 실패\n잠시 후 다시 시도해주세요ㅠㅠ");
    }
  };

  return (
    <LetterContext.Provider value={{ letters, writeLetter }}>
      {children}
    </LetterContext.Provider>
  );
}
