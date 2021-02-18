import dialogPolyfill from 'dialog-polyfill'
import Typography from 'typography'
import judahTheme from 'typography-theme-judah'
import debounce from 'lodash.debounce'
import { adjustHeight, openDialog } from './utils/functions'

const typography = new Typography(judahTheme)

const debouncedAdjustHeight = debounce(adjustHeight, 500)

typography.injectStyles()

debouncedAdjustHeight()

window.addEventListener('resize', debouncedAdjustHeight)

const aboutElement = document.getElementById('about-open')
const dialogElement = document.getElementById('about-dialog')
dialogPolyfill.registerDialog(dialogElement)
aboutElement.addEventListener('click', openDialog(dialogElement))
