import { createContext } from "react";

type Props = Methods & {
  children: React.ReactNode;
};

type Methods = {
  isOpen: boolean;
  onOpenChange: () => void;
};

type ModalType = Methods;

export const ModalContext = createContext<ModalType>({
  isOpen: false,
  onOpenChange: () => {},
});

const Modal = ({ isOpen, onOpenChange, children }: Props) => {
  return (
    <ModalContext.Provider value={{ isOpen, onOpenChange }}>
      {children}
    </ModalContext.Provider>
  );
};

export default Modal;
