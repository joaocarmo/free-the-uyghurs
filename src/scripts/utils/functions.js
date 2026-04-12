import { TIMELINE_START_HREF } from './constants'

export const debounce = (fn, ms) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
}

export const adjustHeight = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

export const openDialog = (dialogElement) => {
  const handleClickOutside = (clickEvent) => {
    const rect = dialogElement.getBoundingClientRect()
    const isInDialog =
      rect.top <= clickEvent.clientY &&
      clickEvent.clientY <= rect.top + rect.height &&
      rect.left <= clickEvent.clientX &&
      clickEvent.clientX <= rect.left + rect.width

    if (!isInDialog) {
      dialogElement.close()
    }
  }

  return (event) => {
    event.preventDefault()
    if (typeof dialogElement.showModal === 'function') {
      dialogElement.showModal()
      dialogElement.addEventListener('click', handleClickOutside)
      dialogElement.addEventListener(
        'close',
        () => dialogElement.removeEventListener('click', handleClickOutside),
        { once: true },
      )
    }
  }
}

export const globalHandleOnClick = (event) => {
  const link = event.target.closest('a')

  if (link?.hash === TIMELINE_START_HREF) {
    event.preventDefault()
    const startTimelineElement = document.querySelector(TIMELINE_START_HREF)

    if (startTimelineElement) {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      startTimelineElement.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
        inline: 'start',
      })
    }
  }
}
