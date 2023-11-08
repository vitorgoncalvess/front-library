import { Button } from "../main";
import useModal from "./useModal";

type Props = {
  children: React.ReactNode;
};

const ModalHeader = ({ children }: Props) => {
  const { onOpenChange } = useModal();
  return (
    <div>
      {children}
      <Button onClick={onOpenChange} isIconOnly>
        X
      </Button>
    </div>
  );
};

export default ModalHeader;
