import useModal from "./useModal";

type Props = {
  children: (onClose: () => void) => React.ReactNode;
};

const ModalContent = ({ children }: Props) => {
  const { onOpenChange } = useModal();

  if (!onOpenChange) {
    throw new Error("ModalContent deve somente ser usado dentro de um Modal");
  }

  return <div>{children(onOpenChange)}</div>;
};

export default ModalContent;
