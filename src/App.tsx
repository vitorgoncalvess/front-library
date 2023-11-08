import { Button } from "../lib/main";
import Modal from "../lib/modal/Modal";
import ModalBody from "../lib/modal/ModalBody";
import ModalContent from "../lib/modal/ModalContent";
import ModalFooter from "../lib/modal/ModalFooter";
import ModalHeader from "../lib/modal/ModalHeader";
import useModal from "../lib/modal/hook/useModal";

function App() {
  const { isOpen, onOpen, onOpenChange } = useModal();
  return (
    <div>
      <Button onClick={onOpen}>Abrir Modal</Button>
      <Modal size="md" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Notificações</ModalHeader>
              <ModalBody>
                <div className="min-h-[400px] opacity-50 flex items-center justify-center">
                  Nenhuma notificação encontrada.
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Fechar</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
