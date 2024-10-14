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
import { Header } from "../Header/Header";

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
  const letters = data?.letters || [];

  const [isReplyOpenMap, setIsReplyOpenMap] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleReply = (index: number) => {
    setIsReplyOpenMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <LetterListPageContainer>
      <TitleContainer>편지함</TitleContainer>
      <LetterListContainer>
        {letters.map((letter: Letter, index) => {
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
              <SenderContainer>from. {sender}</SenderContainer>
              <DateContainer>{formatDate(date as string)}</DateContainer>
              {isReplied && !isReplyOpenMap[index] && (
                <ReplyOpenButton onClick={() => toggleReply(index)}>
                  답장 보기▽
                </ReplyOpenButton>
              )}
              {isReplyOpenMap[index] && (
                <ReplyContainer>
                  <RecipientProfile>↳ {recipient}</RecipientProfile>
                  <ReplyContentContainer>{replyContent}</ReplyContentContainer>
                  <ReplyCloseButton onClick={() => toggleReply(index)}>
                    ▲
                  </ReplyCloseButton>
                </ReplyContainer>
              )}
            </LetterContainer>
          );
        })}
      </LetterListContainer>
      <Header />
    </LetterListPageContainer>
  );
};
