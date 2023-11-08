import { HTMLAttributes, createContext, useEffect, useState } from "react";
import { tv } from "tailwind-variants";

type Props = Methods &
  Styles &
  HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
  };

type Styles = {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  position?: "top" | "center" | "bottom" | "left" | "right";
  classNames?: {
    base?: string;
    header?: string;
    body?: string;
    footer?: string;
    exitButton?: string;
  };
  exitButton?: boolean;
  animation?: boolean;
};

type Methods = {
  isOpen?: boolean;
  onOpenChange?: () => void;
};

type ModalType = Methods & {
  fade: boolean;
};

export const ModalContext = createContext<ModalType & Styles>({
  isOpen: false,
  onOpenChange: () => {},
  fade: false,
  size: "sm",
  radius: "sm",
  position: "center",
  classNames: {
    base: "",
    body: "",
    exitButton: "",
    footer: "",
    header: "",
  },
  exitButton: true,
});

const modalVariants = tv({
  base: "min-h-screen flex fixed inset-0 bg-black bg-opacity-30 modal-enter overflow-auto p-6",
  variants: {
    exit: {
      true: "modal-exit",
    },
    position: {
      top: "pt-8 justify-center items-start",
      center: "items-center justify-center",
      bottom: "pb-8 justify-center items-end",
      left: "pl-8 items-center justify-start",
      right: "pr-8 items-center justify-end",
    },
  },
});

export const Modal = ({ isOpen, onOpenChange, children, ...props }: Props) => {
  const [fade, setFade] = useState(false);
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setFade(false);
    if (!isOpen) {
      setFade(true);
      setTimeout(() => {
        setOpen(false);
      }, 70);
    } else {
      setOpen(true);
    }
  }, [isOpen]);

  if (open)
    return (
      <ModalContext.Provider value={{ isOpen, onOpenChange, fade, ...props }}>
        <div
          {...props}
          className={modalVariants({
            exit: fade,
            position: props.position || "center",
          })}
        >
          {children}
        </div>
      </ModalContext.Provider>
    );
};
