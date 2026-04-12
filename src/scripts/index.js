import Typography from 'typography'
import judahTheme from 'typography-theme-judah'
import { MODAL_OPEN_ABOUT_ID, MODAL_OPEN_DIALOG_ID } from './utils/constants'
import {
  adjustHeight,
  debounce,
  globalHandleOnClick,
  openDialog,
} from './utils/functions'

const app = () => {
  // Setup some UI stuff
  const typography = new Typography(judahTheme)
  typography.injectStyles()

  // Handle changes in the viewport
  const debouncedAdjustHeight = debounce(adjustHeight, 500)
  debouncedAdjustHeight()
  window.addEventListener('resize', debouncedAdjustHeight)

  // Handle the modal actions
  const aboutElement = document.getElementById(MODAL_OPEN_ABOUT_ID)
  const dialogElement = document.getElementById(MODAL_OPEN_DIALOG_ID)
  aboutElement.addEventListener('click', openDialog(dialogElement))

  // Handle certain user interactions
  window.addEventListener('click', globalHandleOnClick)
}

app()
