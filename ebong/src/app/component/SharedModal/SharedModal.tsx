"use client";

import {
  ModalContainer,
  ModalBackdrop,
  ModalImgContainer,
  ModalMessageContainer,
  ModalButtonContainer,
  ModalLeftButton,
  ModalRightButton,
} from "./sharedModal.styled";
import Image from "next/image";

export const SharedModal = () => {
  return (
    <>
      <ModalContainer>
        <ModalImgContainer>
          <Image
            src="https://drive.google.com/uc?export=view&id=149XDtE4x1iVD8JaNgBbOZSjUiVYsDS2Y"
            alt="postIcon"
            layout="fill"
          />
        </ModalImgContainer>
        <ModalMessageContainer>
          편지를 보냈어용
          <br />
          {/* 24시간 안에 편지가 도착해용
          <br />
          편지함으로 이동할까요? */}
        </ModalMessageContainer>
        <ModalButtonContainer>
          <ModalLeftButton>네</ModalLeftButton>
          <ModalRightButton>아니오</ModalRightButton>
        </ModalButtonContainer>
      </ModalContainer>
      <ModalBackdrop />
    </>
  );
};
