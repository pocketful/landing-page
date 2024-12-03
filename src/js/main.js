import { renderComponents } from './components.js'
import { initSwiper } from './swiper.js'
import { initAccordion } from './accordion.js'

document.addEventListener('DOMContentLoaded', async () => {
  await renderComponents()
  initSwiper()
  initAccordion()
})
