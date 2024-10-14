"use client";
import {
  SideBarContainer,
  SideBarBackdrop,
  SideBarButton,
  CloseButton,
} from "./sideBar.styled";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SideBarProps {
  isSideBarOpen: boolean;
  closeSideBar: () => void;
}

export const SideBar = ({ isSideBarOpen, closeSideBar }: SideBarProps) => {
  const { push: navigate } = useRouter();
  if (!isSideBarOpen) return null;

  return (
    <>
      <SideBarContainer>
        <SideBarButton onClick={() => navigate("/vote")}>
          <>인기투표</>
          <Image
            src="https://drive.google.com/uc?export=view&id=1V2fKuNjgEh88vWhmaGUZQxqSf7BkDpip"
            alt="voteIcon"
            width={60}
            height={60}
          />
        </SideBarButton>
        <SideBarButton onClick={() => navigate("/writeLetter")}>
          <>편지 쓰기</>
          <Image
            src="https://drive.google.com/uc?export=view&id=1x7M7bB_On4dZZZW-ITuUPYa48uUwXOlh"
            alt="postIcon"
            width={60}
            height={65}
          />
        </SideBarButton>
        <SideBarButton onClick={() => navigate("/letterList")}>
          <>편지함</>
          <Image
            src="https://drive.google.com/uc?export=view&id=14NbDR_JtFnwfOBfw1ZXOTv2BKedPYvSl"
            alt="letterIcon"
            width={55}
            height={50}
          />
        </SideBarButton>
        <CloseButton onClick={closeSideBar}>닫기</CloseButton>
      </SideBarContainer>
      <SideBarBackdrop />
    </>
  );
};
