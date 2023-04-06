(() => {
  const refs = {
    openModalTableBtn: document.querySelector("[data-modal-table-open]"),
    closeModalTableBtn: document.querySelector("[data-modal-table-close]"),
    modal: document.querySelector("[data-modal-table]"),
  };
  refs.openModalTableBtn.addEventListener("click", toggleModal);
  refs.closeModalTableBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    console.log(refs);
  }

})();