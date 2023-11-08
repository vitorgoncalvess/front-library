import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onOpenChange() {
    setIsOpen(false);
  }

  return {
    isOpen,
    onOpen,
    onOpenChange,
  };
};
