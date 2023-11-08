import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const ModalBody = ({ children, className }: Props) => {
  return <div className={twMerge("w-full", className)}>{children}</div>;
};

export default ModalBody;
