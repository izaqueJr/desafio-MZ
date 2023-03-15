import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./global.css";

const Modal = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const modal = sessionStorage.getItem("modal");
    if (modal) {
      setOpen(false);
    }
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal className="dialog__portal">
        <Dialog.Overlay className="dialog__overlay" />
        <Dialog.Content className="dialog__content">
          <Dialog.Close className="dialog__close-container">
            <button
              className="dialog__close-button"
              aria-label="Close"
              onClick={() => {
                sessionStorage.setItem("dialog", "true");
              }}
            >
              Fechar
            </button>
          </Dialog.Close>

          <form className="dialog__form">
            <img src="/images/icons/newsletter-mail-icon.png" alt="" />
            <Dialog.Title className="dialog__title">
              Bem Vindo à MAEZTRA
            </Dialog.Title>
            <Dialog.Description className="dialog__description">
              Receba em Primeira mão
              <br />
              <span>desconto e ofertas exclusivas </span>
            </Dialog.Description>
            <div className="dialog__input-container">
              <input
                name="email"
                placeholder="Digite seu e-mail"
                className="dialog__email"
              />{" "}
            </div>

            <div className="dialog__button-container">
              <button className="dialog__send-button">
                <span>Enviar</span>
                <img src="/images/icons/icon-send.png" alt="" />
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
