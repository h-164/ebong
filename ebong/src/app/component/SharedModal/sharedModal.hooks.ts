import { useState } from "react";

interface SharedModal {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
  }
  
export const useModal =  (): SharedModal =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return {
      isModalOpen,
      openModal,
      closeModal,
    };
  };