import { useState } from "react";

interface SideBar {
    isSideBarOpen: boolean;
    openSideBar: () => void;
    closeSideBar: () => void;
  }
  
export const useSideBar =  (): SideBar =>{
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  
    const openSideBar = () => {
      setIsSideBarOpen(true);
    };
  
    const closeSideBar = () => {
      setIsSideBarOpen(false);
    };
  
    return {
      isSideBarOpen,
      openSideBar,
      closeSideBar,
    };
  };