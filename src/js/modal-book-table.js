(() => {
  const refs = {
    openModalTableBtn: document.querySelector("[modal-table-open]"),
    closeModalTableBtn: document.querySelector("[modal-table-close]"),
    modal: document.querySelector("[modal-table]"),
  };
  refs.openModalTableBtn.addEventListener("click", toggleModal);
  refs.closeModalTableBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("active");
    console.log(refs);
  }

})();

(() => {
  const refs = {
    openModalTableBtn: document.querySelector("[modal-table-open-1]"),
    modal: document.querySelector("[modal-table]"),
  };
  refs.openModalTableBtn.addEventListener("click", toggleModal);
  refs.closeModalTableBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("active");
    console.log(refs);
  }

})();

// const btns = document.querySelectorAll("[data-target]");

// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     document.querySelector(btn.dataset.target).classList.add("active")
//   })
// });


// const close_btns = document.querySelectorAll("[.modal-close]");

// close_btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     document.querySelector(btn.dataset.target).classList.remove("active")
//   })
// })