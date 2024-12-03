import { renderComponents } from './components.js'
import { initAccordion } from './accordion.js'

document.addEventListener('DOMContentLoaded', async () => {
  await renderComponents()
  initAccordion()
})
