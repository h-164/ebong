"use client";

import { Letter } from "@/types/Letter";
import { useLetterList } from "./LetterListHooks";
import {
  ContentContainer,
  LetterContainer,
  LetterListContainer,
  LetterListPageContainer,
  RecipientContainer,
  SenderContainer,
  TimeContainer,
  TitleContainer,
} from "./LetterList.styled";

export const LetterList = () => {
  const { data } = useLetterList();
  const letters = data?.letters;

  return (
    <LetterListPageContainer>
      <TitleContainer>편지함</TitleContainer>
      <LetterListContainer>
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
            <LetterContainer key={index}>
              <RecipientContainer>to. {recipient}</RecipientContainer>
              <ContentContainer>{letterContent}</ContentContainer>
              <TimeContainer>{date}</TimeContainer>
              <SenderContainer>from. {sender}</SenderContainer>
              {isReplied && (
                <p>
                  ↳ {recipient}: {replyContent}
                </p>
              )}
            </LetterContainer>
          );
        })}
      </LetterListContainer>
    </LetterListPageContainer>
  );
};
