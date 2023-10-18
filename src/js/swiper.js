import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
// import "swiper/css/navigation";

var swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination],


        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },
        breakpoints:{
  320: {
          slidesPerView: 1,
          },
  768: {
          slidesPerView: 2,
  },
  1440:{
          slidesPerView: 5,
    },
  },
  centeredSlides: true,
  centeredSlidesBounds: true,
        centerInsufficientSlides: true,


      });