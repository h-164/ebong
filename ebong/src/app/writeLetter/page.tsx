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
import { SharedModal } from "../component/SharedModal/SharedModal";
import { useModal } from "@/provider/shared-modal-provider";

export default function WriteLetter() {
  const [letter, setLetter] = useState({
    recipient: "",
    sender: "",
    content: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLetter({
      ...letter,
      [name]: value,
    });
  };

  const { writeLetter } = useContext(LetterContext);

  const { push: navigate } = useRouter();

  const { openModal } = useModal();

  const handlePostLetter = async () => {
    const { sender, recipient, content } = letter;
    try {
      await writeLetter({ sender, recipient, letterContent: content });
      setModalId("sendLetter");
      openModal();
    } catch (error) {
      setModalId("error");
      setErrMessage(`${error}`);
      openModal();
    }
  };

  const navigateLetterList = () => {
    navigate("/letterList");
  };

  const [modalId, setModalId] = useState("");

  const [errMessage, setErrMessage] = useState("");

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
              name="recipient"
              value={letter.recipient}
              onChange={handleChange}
            >
              <option value="" disabled hidden />
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
            name="content"
            value={letter.content}
            onChange={handleChange}
          ></LetterContentTextarea>
          <LetterSenderContainer>
            <LetterFont>From.</LetterFont>
            <SenderInput
              name="sender"
              value={letter.sender}
              onChange={handleChange}
            ></SenderInput>
          </LetterSenderContainer>
        </Letter>
        <PostButtonContainer>
          <LetterIconContainer>
            <Image
              src="https://drive.google.com/uc?export=view&id=14NbDR_JtFnwfOBfw1ZXOTv2BKedPYvSl"
              alt="defaultIcon"
              layout="fill"
              className="defaultImage"
              onClick={handlePostLetter}
            />
            <Image
              src="https://drive.google.com/uc?export=view&id=1swwEafymTDpfMH1WGRVvG7VVciYneat0"
              alt="hoverIcon"
              layout="fill"
              className="hoverImage"
              onClick={handlePostLetter}
            />
          </LetterIconContainer>
          <PostFont>보내기</PostFont>
        </PostButtonContainer>
      </DownConatiner>
      {modalId === "sendLetter" && (
        <SharedModal
          imgUrl="https://drive.google.com/uc?export=view&id=149XDtE4x1iVD8JaNgBbOZSjUiVYsDS2Y"
          message={
            "편지를 보냈어용\n24시간 안에 답장이 도착해요\n편지함으로 이동할까요?"
          }
          leftButton={true}
          rightButton={true}
          leftButtonMessage="네"
          rightButtonMessage="아니오"
          clickLeftButton={navigateLetterList}
          clickRightButton={undefined}
        />
      )}
      {modalId === "error" && (
        <SharedModal
          imgUrl="https://drive.google.com/uc?export=view&id=149XDtE4x1iVD8JaNgBbOZSjUiVYsDS2Y"
          message={errMessage}
          leftButton={true}
          rightButton={false}
          leftButtonMessage="확인"
          rightButtonMessage=""
          clickLeftButton={undefined}
          clickRightButton={undefined}
        />
      )}
    </WriteLetterPageConatiner>
  );
}
