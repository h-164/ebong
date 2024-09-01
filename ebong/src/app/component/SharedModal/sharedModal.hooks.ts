import { useState } from "react";

interface SharedModal {
    isModalOpen: boolean;
    message: string;
    openModal: (message: string) => void;
    closeModal: () => void;
  }
  
export const useModal =  (): SharedModal =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState("");
  
    const openModal = (message:string) => {
      setIsModalOpen(true);
      setMessage(message)
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setMessage("")
    };
  
    return {
      isModalOpen,
      message,
      openModal,
      closeModal,
    };
  };