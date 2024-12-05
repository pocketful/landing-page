let swiperInstance = null

export const initSwiper = () => {
  // Destroy existing instance if it exists
  if (swiperInstance) {
    swiperInstance.destroy(true, true)
  }

  // Create new instance
  swiperInstance = new Swiper('.swiper', {
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

  return swiperInstance
}

// Debounced resize handler
let resizeTimeout
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    initSwiper()
  }, 250)
})
