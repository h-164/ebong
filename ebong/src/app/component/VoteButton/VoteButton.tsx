"use client";

import { ButtonContainer } from "./voteButton.styled";

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const VoteButton = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
};
