import { FC, useId, useEffect, useRef } from "react";

// Define the props for the Modal component
interface ModalContentProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

interface ModalProps extends ModalContentProps {
  visible: boolean;
}

/**
 * ModalContent component to render the content of the modal.
 */
const ModalContent: FC<ModalContentProps> = ({ title, onClose, children }) => {
  return (
    <div className="modal-box bg-base-50 px-4 py-2">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg text-white">{title}</h3>
        <button className="btn btn-circle" onClick={onClose}>
          X
        </button>
      </div>
      <div className="divider m-0"></div>
      {children}
    </div>
  );
};

/**
 * Modal component to display a modal dialog.
 */
export const Modal: FC<ModalProps> = ({
  title,
  children,
  visible,
  onClose,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const modalId = useId();

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    if (visible) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [visible]);

  return (
    <dialog ref={modalRef} id={modalId} className="modal" onCancel={onClose}>
      <ModalContent title={title} onClose={onClose}>
        {children}
      </ModalContent>
    </dialog>
  );
};

export default Modal;
