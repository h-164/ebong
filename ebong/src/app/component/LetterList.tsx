"use client";

import { Letter } from "@/types/Letter";
import { useContext } from "react";
import { LetterContext } from "@/provider/letter-provider";

export const LetterList = () => {
  const { letters } = useContext(LetterContext);
  const lettersArray = letters;

  return (
    <>
      {lettersArray?.map((letter: Letter, index) => (
        <div key={index}>
          <h3>to.{letter.recipient}</h3>
          <p>{letter.letterContent}</p>
          <p>{letter.date}</p>
          <h3>from.{letter.sender}</h3>
          {letter.isReplied && (
            <p>
              ↳{letter.recipient}:{letter.replyContent}
            </p>
          )}
        </div>
      ))}
    </>
  );
};
