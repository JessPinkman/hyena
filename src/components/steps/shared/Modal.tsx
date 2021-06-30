import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Modal = ({ children }: IProps) => {
  return (
    <div className="modal">
      <div className="modal_body">{children}</div>
    </div>
  );
};

export default Modal;
