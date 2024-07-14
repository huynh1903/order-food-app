import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, close, className }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
  }, [open]);

  return createPortal(
    <div className="w-full h-full z-10 fixed" >
      <div className={`${className} absolute z-30`} ref={dialog}>{children}</div>
      <div className="w-full h-full bg-slate-300/50 absolute top-0 left-0" onClick={close}></div>
    </div>,
    document.getElementById("modal")
  );
}
