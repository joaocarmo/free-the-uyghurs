import debounce from 'lodash.debounce'
import dialogPolyfill from 'dialog-polyfill'
import judahTheme from 'typography-theme-judah'
import Typography from 'typography'
import {
  adjustHeight,
  globalHandleOnClick,
  openDialog,
} from './utils/functions'
import { MODAL_OPEN_ABOUT_ID, MODAL_OPEN_DIALOG_ID } from './utils/constants'

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
  dialogPolyfill.registerDialog(dialogElement)
  aboutElement.addEventListener('click', openDialog(dialogElement))

  // Handle certain user interactions
  window.addEventListener('click', globalHandleOnClick)
}

app()
