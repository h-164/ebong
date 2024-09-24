"use client";

import { Letter } from "@/types/Letter";
import { useLetterList } from "./LetterListHooks";
import {
  ContentContainer,
  LetterContainer,
  LetterListContainer,
  LetterListPageContainer,
  RecipientContainer,
  RecipientProfile,
  ReplyCloseButton,
  ReplyContainer,
  ReplyContentContainer,
  ReplyOpenButton,
  SenderContainer,
  TimeContainer,
  TitleContainer,
} from "./LetterList.styled";
import { useState } from "react";

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
          const [isReplyOpen, setIsReplyOpen] = useState(false);
          const toggleReply = () => {
            setIsReplyOpen((prevEsReplyOpen: boolean) => !prevEsReplyOpen);
          };

          return (
            <LetterContainer key={index}>
              <RecipientContainer>to. {recipient}</RecipientContainer>
              <ContentContainer>{letterContent}</ContentContainer>
              <TimeContainer>{date}</TimeContainer>
              <SenderContainer>from. {sender}</SenderContainer>
              {isReplied && !isReplyOpen && (
                <ReplyOpenButton onClick={toggleReply}>
                  답장 보기▽
                </ReplyOpenButton>
              )}
              {isReplyOpen && (
                <ReplyContainer>
                  <RecipientProfile>↳ {recipient}</RecipientProfile>
                  <ReplyContentContainer>{replyContent}</ReplyContentContainer>
                  <ReplyCloseButton onClick={toggleReply}>▲</ReplyCloseButton>
                </ReplyContainer>
              )}
            </LetterContainer>
          );
        })}
      </LetterListContainer>
    </LetterListPageContainer>
  );
};
