import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const ModalBody = ({ children, className }: Props) => {
  return <div className={twMerge("w-full", className)}>{children}</div>;
};
