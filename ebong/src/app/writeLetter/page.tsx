"use client";

import { useContext, useState } from "react";
import { LetterContext } from "@/provider/letter-provider";
import {
  WriteLetterPageConatiner,
  UpContainer,
  DownConatiner,
  Letter,
  LetterFont,
  LetterContentTextarea,
  LetterRecipientContainer,
  LetterSenderContainer,
  SenderInput,
  RecipientSelect,
  PostIconContainer,
  LetterIconContainer,
  PostButtonContainer,
  PostFont,
} from "./writeLetterPage.styled";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WriteLetter() {
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");
  const [letterContent, setLetterContent] = useState("");

  const { writeLetter } = useContext(LetterContext);

  const { push } = useRouter();

  const handlePostLetter = async () => {
    try {
      await writeLetter({ sender, recipient, letterContent });
      push("/letterList");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <WriteLetterPageConatiner>
      <UpContainer>
        <PostIconContainer>
          <Image
            src="https://drive.google.com/uc?export=view&id=1x7M7bB_On4dZZZW-ITuUPYa48uUwXOlh"
            alt="postIcon"
            layout="fill"
          />
        </PostIconContainer>
      </UpContainer>
      <DownConatiner>
        <Letter>
          <LetterRecipientContainer>
            <LetterFont>To.</LetterFont>
            <RecipientSelect
              id="bongs"
              name="bongs"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            >
              <option value="일봉이">일봉이</option>
              <option value="이봉이">이봉이</option>
              <option value="삼봉이">삼봉이</option>
              <option value="오봉이">오봉이</option>
              <option value="육봉이">육봉이</option>
              <option value="칠봉이">칠봉이</option>
              <option value="팔봉이">팔봉이</option>
              <option value="씩씩작가">씩씩작가</option>
            </RecipientSelect>
          </LetterRecipientContainer>
          <LetterContentTextarea
            value={letterContent}
            onChange={(e) => setLetterContent(e.target.value)}
          ></LetterContentTextarea>
          <LetterSenderContainer>
            <LetterFont>From.</LetterFont>
            <SenderInput
              value={sender}
              onChange={(e) => setSender(e.target.value)}
            ></SenderInput>
          </LetterSenderContainer>
        </Letter>
        <PostButtonContainer>
          <LetterIconContainer>
            <Image
              src="https://drive.google.com/uc?export=view&id=14NbDR_JtFnwfOBfw1ZXOTv2BKedPYvSl"
              alt="letterIcon"
              layout="fill"
              onClick={handlePostLetter}
            />
          </LetterIconContainer>
          <PostFont>보내기</PostFont>
        </PostButtonContainer>
      </DownConatiner>
    </WriteLetterPageConatiner>
  );
}
