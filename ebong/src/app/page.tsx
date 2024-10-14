"use client";

import { SideBar } from "./component/SideBar/SideBar";
import { useSideBar } from "./component/SideBar/sidebar.hooks";

export default function Home() {
  const { isSideBarOpen, openSideBar, closeSideBar } = useSideBar();

  return (
    <>
      <SideBar isSideBarOpen={isSideBarOpen} closeSideBar={closeSideBar} />
    </>
  );
}
