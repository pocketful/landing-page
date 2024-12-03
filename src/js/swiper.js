export const initSwiper = () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.swiper__button--prev',
      nextEl: '.swiper__button--next',
    },
  })
  return swiper
}
