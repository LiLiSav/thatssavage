export const useModal = (id: string) => {
  const show = () => {
    const dialog = document.getElementById(id);
    if (dialog instanceof HTMLDialogElement) dialog.showModal();
  };

  return { show };
};
