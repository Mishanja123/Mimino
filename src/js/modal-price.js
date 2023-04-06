// (() => {
  //   const refs = {
    //     openModalBtn: document.querySelector("[data-modal-price-open]"),
    //     closeModalBtn: document.querySelector("[data-modal-price-close]"),
    //     modal: document.querySelector("[data-modal-price]"),
    //   };
    //   refs.openModalBtn.addEventListener("click", toggleModal);
    //   refs.closeModalBtn.addEventListener("click", toggleModal);

    //   function toggleModal() {
      //     refs.modal.classList.toggle("is-hidden");
      //   }

      // })();

      (() => {
        const refs = {
          openModalTableBtn: document.querySelector("[modal-price-open]"),
          closeModalTableBtn: document.querySelector("[modal-price-close]"),
          modal: document.querySelector("[modal-price]"),
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
          openModalTableBtn: document.querySelector("[modal-price-open-1]"),
          modal: document.querySelector("[modal-price]"),
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
          openModalTableBtn: document.querySelector("[modal-price-open-2]"),
          modal: document.querySelector("[modal-price]"),
        };
        refs.openModalTableBtn.addEventListener("click", toggleModal);
        refs.closeModalTableBtn.addEventListener("click", toggleModal);

        function toggleModal() {
          refs.modal.classList.toggle("active");
          console.log(refs);
        }

      })();