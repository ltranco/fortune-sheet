import React from "react";
declare const ModalContext: React.Context<{
    component: React.ReactNode;
    showModal: (c: React.ReactNode) => void;
    hideModal: () => void;
}>;
declare const ModalProvider: React.FC;
export { ModalContext, ModalProvider };
