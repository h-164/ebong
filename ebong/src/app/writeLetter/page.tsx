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
        <Image
          src="https://drive.google.com/uc?export=view&id=1x7M7bB_On4dZZZW-ITuUPYa48uUwXOlh"
          alt="postIcon"
          width={220}
          height={250}
          style={{
            position: "absolute",
            top: "10%",
            left: "30%",
            transform: "translateX(-40%)",
            zIndex: "10",
          }}
        />
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
        <Image
          src="https://drive.google.com/uc?export=view&id=14NbDR_JtFnwfOBfw1ZXOTv2BKedPYvSl"
          alt="letterIcon"
          width={130}
          height={110}
        />
      </DownConatiner>
    </WriteLetterPageConatiner>
  );
}
