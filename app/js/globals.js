import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.work__list', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
