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

interface SharedModalProps {
  imgUrl: string;
  message: string;
  leftButton?: boolean;
  rightButton?: boolean;
  leftButtonMessage?: string;
  rightButtonMessage?: string;
  clickLeftButton?: () => void;
  clickRightButton?: () => void;
  imgSize?: { width?: string; height?: string };
  isModalOpen: boolean;
  closeModal: () => void;
}

export const SharedModal = ({
  isModalOpen,
  closeModal,
  imgUrl,
  message,
  leftButton = false,
  rightButton = false,
  leftButtonMessage = "",
  rightButtonMessage = "",
  clickLeftButton = () => {
    undefined;
  },
  clickRightButton = () => {
    undefined;
  },
  imgSize = { width: "100px", height: "130px" },
}: SharedModalProps) => {
  if (!isModalOpen) return null;

  const handleLeft = () => {
    closeModal();
    if (clickLeftButton) clickLeftButton();
  };

  const handleRight = () => {
    closeModal();
    if (clickRightButton) clickRightButton();
  };

  return (
    <>
      <ModalContainer>
        <ModalImgContainer style={imgSize}>
          <Image src={imgUrl} alt="modalImg" fill />
        </ModalImgContainer>
        <ModalMessageContainer>
          {message.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </ModalMessageContainer>
        {(leftButton || rightButton) && (
          <ModalButtonContainer>
            {leftButton && (
              <ModalLeftButton onClick={handleLeft}>
                {leftButtonMessage}
              </ModalLeftButton>
            )}
            {rightButton && (
              <ModalRightButton onClick={handleRight}>
                {rightButtonMessage}
              </ModalRightButton>
            )}
          </ModalButtonContainer>
        )}
      </ModalContainer>
      <ModalBackdrop onClick={closeModal} />
    </>
  );
};
