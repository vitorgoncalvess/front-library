import { tv } from "tailwind-variants";
import useModal from "./useModal";
import { twMerge } from "tailwind-merge";

type Props = {
  children?: (onClose: () => void) => React.ReactNode;
};

const modalVariants = tv({
  base: "flex relative flex-col items-start bg-white p-4 gap-4",
  variants: {
    size: {
      sm: "w-[300px]",
      md: "w-[400px]",
      lg: "w-[500px]",
      xl: "w-[600px]",
      "2xl": "w-[700px]",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    fade: {
      true: "modal-content-exit",
    },
    enter: {
      true: "modal-content-enter",
    },
  },
});

export const ModalContent = ({ children }: Props) => {
  const {
    onOpenChange,
    size = "sm",
    radius = "xl",
    classNames,
    fade,
    animation = true,
  } = useModal();

  if (!onOpenChange) {
    throw new Error("ModalContent deve somente ser usado dentro de um Modal");
  }

  if (!children) return;
  return (
    <div
      className={twMerge(
        modalVariants({
          size: size,
          radius: radius,
          fade: animation && fade,
          enter: animation,
        }),
        classNames?.base
      )}
    >
      {children(onOpenChange)}
    </div>
  );
};
