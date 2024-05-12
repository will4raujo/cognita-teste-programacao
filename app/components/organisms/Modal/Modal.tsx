import './Modal.css';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const Modal = ({ isOpen, children }: ModalProps) => {
  const showModal = isOpen ? 'block' : 'hidden';

  return (
    <div className={`modal-container ${showModal}`}>
      {children}
    </div>
  );
}

export default Modal;