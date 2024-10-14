"use client";

import { SideBar } from "./component/SideBar/SideBar";
import { useSideBar } from "./component/SideBar/sidebar.hooks";
import { Header } from "./component/Header/Header";

export default function Home() {
  const { isSideBarOpen, openSideBar, closeSideBar } = useSideBar();

  return (
    <>
      <Header></Header>
      <SideBar isSideBarOpen={isSideBarOpen} closeSideBar={closeSideBar} />
    </>
  );
}
