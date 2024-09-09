"use client";

import { useState } from "react";
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
import { useModal } from "../component/SharedModal/sharedModal.hooks";
import { letterClientApi } from "@/lib/client-api/letters";
import { useMutation } from "@tanstack/react-query";

export default function WriteLetter() {
  const { mutate } = useMutation({
    mutationFn: letterClientApi.postLetters,
    onSuccess: () => {
      openSuccessModal(
        "편지를 보냈어용\n24시간 안에 답장이 도착해요\n편지함으로 이동할까요?"
      );
    },
    onError: (error) => {
      openErrorModal(`${error}`);
    },
  });

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

  const { push: navigate } = useRouter();

  const {
    isModalOpen: isSuccessModalOpen,
    openModal: openSuccessModal,
    closeModal: closeSuccessModal,
    message: successMessage,
  } = useModal();
  const {
    isModalOpen: isErrorModalOpen,
    openModal: openErrorModal,
    closeModal: closeErrorModal,
    message: errorMessage,
  } = useModal();

  const handlePostLetter = () => {
    const { sender, recipient, content } = letter;
    mutate({ sender, recipient, letterContent: content });
  };

  const navigateLetterList = () => {
    navigate("/letterList");
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
      <SharedModal
        imgUrl="https://drive.google.com/uc?export=view&id=149XDtE4x1iVD8JaNgBbOZSjUiVYsDS2Y"
        message={successMessage}
        isModalOpen={isSuccessModalOpen}
        closeModal={closeSuccessModal}
        leftButton={true}
        rightButton={true}
        leftButtonMessage="네"
        rightButtonMessage="아니오"
        clickLeftButton={navigateLetterList}
      />
      <SharedModal
        imgUrl="https://drive.google.com/uc?export=view&id=149XDtE4x1iVD8JaNgBbOZSjUiVYsDS2Y"
        message={errorMessage}
        isModalOpen={isErrorModalOpen}
        closeModal={closeErrorModal}
        leftButton={true}
        leftButtonMessage="확인"
      />
    </WriteLetterPageConatiner>
  );
}
