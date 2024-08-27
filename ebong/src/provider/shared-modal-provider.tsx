"use client";

import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from "react";

interface ModalContextValue {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const defaultModalContextValue: ModalContextValue = {
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
};

const ModalContext = createContext<ModalContextValue>(defaultModalContextValue);

export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
