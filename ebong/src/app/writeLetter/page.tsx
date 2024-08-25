"use client";

// import { useContext } from "react";
// import { LetterContext } from "@/provider/letter-provider";
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

export default function WriteLetter() {
  // const { writeLetter } = useContext(LetterContext);

  // const onSubmit = async () => {
  //   try {
  //     await writeLetter({ sender, recipient, letterContent });
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

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
            <RecipientSelect id="animals" name="animals">
              <option value="일봉이">일봉이</option>
              <option value="이봉이">이봉이</option>
              <option value="삼봉이">삼봉이</option>
            </RecipientSelect>
          </LetterRecipientContainer>
          <LetterContentTextarea></LetterContentTextarea>
          <LetterSenderContainer>
            <LetterFont>From.</LetterFont>
            <SenderInput></SenderInput>
          </LetterSenderContainer>
        </Letter>
        <PostButtonContainer>
          <LetterIconContainer>
            <Image
              src="https://drive.google.com/uc?export=view&id=14NbDR_JtFnwfOBfw1ZXOTv2BKedPYvSl"
              alt="letterIcon"
              layout="fill"
            />
          </LetterIconContainer>
          <PostFont>보내기</PostFont>
        </PostButtonContainer>
      </DownConatiner>
    </WriteLetterPageConatiner>
  );
}
