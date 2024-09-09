"use client";

import { Letter } from "@/types/Letter";
import { useQuery } from "@tanstack/react-query";
import { letterClientApi } from "@/lib/client-api/letters";

export const LetterList = () => {
  const { data } = useQuery({
    queryKey: ["letters"],
    queryFn: letterClientApi.getLetters,
  });

  const letters = data?.letters;
  console.log(letters);

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
