import { Modal } from "bootstrap";
import { useEffect, useState } from "react";

export const useModal = (id: string) => {
  const [modal, setModal] = useState<Modal>();

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) setModal(new Modal(element));
  }, [id]);

  return { modal };
};
