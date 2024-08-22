"use client";

import { Letter } from "@/types/Letter";
import { useContext } from "react";
import { LetterContext } from "@/provider/letter-provider";

export const LetterList = () => {
  const { letters } = useContext(LetterContext);

  return (
    <>
      {letters?.map((letter: Letter, index) => {
        const {
          recipient,
          letterContent,
          date,
          sender,
          isReplied,
          replyContent,
        } = letter;

        return (
          <div key={index}>
            <h3>to. {recipient}</h3>
            <p>{letterContent}</p>
            <p>{date}</p>
            <h3>from. {sender}</h3>
            {isReplied && (
              <p>
                ↳ {recipient}: {replyContent}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
};
