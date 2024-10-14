"use client";

import { HeaderContainer } from "./header.styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SideBar } from "../SideBar/SideBar";
import { useSideBar } from "../SideBar/sidebar.hooks";

export const Header = () => {
  const { push: navigate } = useRouter();
  const { isSideBarOpen, openSideBar, closeSideBar } = useSideBar();

  return (
    <>
      <HeaderContainer>
        <Image
          src="https://drive.google.com/uc?export=view&id=1ReLAqA-159E18Ja-viSKzyqYdkQ2Jx9r"
          alt="sideBarIcon"
          width={25}
          height={25}
          onClick={openSideBar}
        />
        <Image
          src="https://drive.google.com/uc?export=view&id=1Q-irLAlcERMXlcGZJ_RlP110b8vA1Ln0"
          alt="homeIcon"
          width={25}
          height={25}
          onClick={() => navigate("/")}
        />
      </HeaderContainer>
      <SideBar isSideBarOpen={isSideBarOpen} closeSideBar={closeSideBar} />
    </>
  );
};
