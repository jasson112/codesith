import Swiper, { Navigation, Pagination } from 'swiper';
// Import PrismJS package
import Prism from 'prismjs';

// Import PrismJS extensions
import 'prismjs/themes/prism-twilight.css';
import 'prismjs/components/prism-scss';

// Import Prism JS
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

Prism.highlightAll();

Swiper.use([Navigation, Pagination]);

// eslint-disable-next-line no-unused-vars
const swiperExp = new Swiper('.experience__list', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: '.experience-next',
    prevEl: '.experience-prev',
  },
  pagination: {
    el: '.experience-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
      loop: true,
    },
  },
});

// eslint-disable-next-line no-unused-vars
const swiperBlog = new Swiper('.blog__list', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: '.blog-next',
    prevEl: '.blog-prev',
  },
  pagination: {
    el: '.blog-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
