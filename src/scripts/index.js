// Scripts
import Typography from 'typography'
import judahTheme from 'typography-theme-judah'
import debounce from 'lodash.debounce'
import { adjustHeight } from './utils/functions'

const typography = new Typography(judahTheme)

const debouncedAdjustHeight = debounce(adjustHeight, 500)

typography.injectStyles()

debouncedAdjustHeight()

window.addEventListener('resize', debouncedAdjustHeight)
