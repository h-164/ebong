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
  DateContainer,
  TitleContainer,
} from "./LetterList.styled";
import { useState } from "react";

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const date = new Date(dateString);
  return date.toLocaleString("ko-KR", options).replace(/,/g, "");
};

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
            setIsReplyOpen((prevIsReplyOpen) => !prevIsReplyOpen);
          };

          return (
            <LetterContainer key={index}>
              <RecipientContainer>to. {recipient}</RecipientContainer>
              <ContentContainer>{letterContent}</ContentContainer>
              <SenderContainer>from. {sender}</SenderContainer>
              <DateContainer>{formatDate(date as string)}</DateContainer>
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
