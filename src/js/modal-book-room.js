(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-room-open]"),
    closeModalBtn: document.querySelector("[data-modal-room-close]"),
    modal: document.querySelector("[data-modal-room]"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("active");
    console.log(refs);
  }

})();

(
  () => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-room-open-1]"),
      // closeModalBtn: document.querySelector("[data-modal-room-close]"),
      modal: document.querySelector("[data-modal-room]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("active");
    }

  }

)();



