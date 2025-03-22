import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  preloadImages: false,
  lazy: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //         slidesPerView: 2,
  //         spaceBetween: 20
  //     },
  //     // when window width is >= 575px
  //     575: {
  //         slidesPerView: 3,
  //         spaceBetween: 30
  //     },
  //     // when window width is >= 767px
  //     767: {
  //         slidesPerView: 4,
  //         spaceBetween: 40
  //     },
  //     // when window width is >= 992px
  //     992: {
  //         slidesPerView: 5,
  //         spaceBetween: 50
  //     },
  // },

  // pagination: {
  //     el: '.swiper-pagination',
  // },

  // navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  // },

  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },
});
