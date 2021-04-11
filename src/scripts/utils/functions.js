import { TIMELINE_START_HREF } from './constants'

export const adjustHeight = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

export const openDialog = (dialogElement) => (event) => {
  event.preventDefault()

  if (typeof dialogElement.showModal === 'function') {
    dialogElement.showModal()

    dialogElement.addEventListener('click', (clickEvent) => {
      const rect = dialogElement.getBoundingClientRect()
      const isInDialog =
        rect.top <= clickEvent.clientY &&
        clickEvent.clientY <= rect.top + rect.height &&
        rect.left <= clickEvent.clientX &&
        clickEvent.clientX <= rect.left + rect.width

      if (!isInDialog) {
        dialogElement.close()
      }
    })
  }
}

export const globalHandleOnClick = (event) => {
  if (event?.target?.tagName?.toUpperCase() === 'A') {
    const url = new URL(event?.target?.href)

    if (url.hash === TIMELINE_START_HREF) {
      event.preventDefault()
      const startTimelineElement = document.querySelector(TIMELINE_START_HREF)
      startTimelineElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      })
    }
  }
}
