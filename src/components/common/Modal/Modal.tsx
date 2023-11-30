import React from "react";
import { closeIcon } from "@/assets";

type TModal = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
};

export function Modal({ children, isOpen, onClose }: TModal) {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } w-full h-screen fixed z-50 top-0 left-0 items-center justify-center bg-black bg-opacity-60`}
    >
      <button onClick={onClose} className="absolute right-8 top-8">
        <img src={closeIcon} className="w-8" alt="" />
      </button>
      <div className="w-[80%] bg-white h-[80vh] rounded-md">{children}</div>
    </div>
  );
}
