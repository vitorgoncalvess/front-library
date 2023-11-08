import { twMerge } from "tailwind-merge";
import { Button } from "../main";
import useModal from "./useModal";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const ModalHeader = ({ children, className }: Props) => {
  const { onOpenChange, classNames, exitButton = true } = useModal();
  return (
    <div
      className={twMerge(
        "flex items-start w-full min-h-[30px]",
        classNames?.header,
        className
      )}
    >
      <div className="text-xl font-medium">{children}</div>
      {exitButton && (
        <Button
          className={twMerge(
            "w-7 h-7 font-medium absolute top-2 right-2",
            classNames?.exitButton
          )}
          onClick={onOpenChange}
          isIconOnly
        >
          X
        </Button>
      )}
    </div>
  );
};
