export const initAccordion = () => {
  const accordionItems = document.querySelectorAll('.faqs-question')

  accordionItems.forEach((item) => {
    const trigger = item.querySelector('.faqs-question__wrapper')
    const content = item.querySelector('.faqs-question__text-wrapper')
    const arrow = item.querySelector('.faqs-question__image')

    trigger.addEventListener('click', () => {
      const isActive = content.classList.contains('faqs-question__text-wrapper--active')

      // close all accordions
      accordionItems.forEach((otherItem) => {
        const otherContent = otherItem.querySelector('.faqs-question__text-wrapper')
        const otherArrow = otherItem.querySelector('.faqs-question__image')

        otherContent.classList.remove('faqs-question__text-wrapper--active')
        otherArrow.classList.remove('faqs-question__image--active')
      })

      // toggle clicked accordion
      if (!isActive) {
        content.classList.add('faqs-question__text-wrapper--active')
        arrow.classList.add('faqs-question__image--active')
      }
    })
  })
}
