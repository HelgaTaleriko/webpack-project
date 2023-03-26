import '../scss/style.scss'
// import * as func from './scripts/button_onOpen_onClose'
import {
  readMore,
  openCallMobile,
  openCallAboutUs,
  openChatAboutUs,
  openChatMobile,
  upDownBrands,
  upDownTech
} from './scripts/components/button_onOpen_onClose'
import sliderInit from './scripts/components/sliderInit'

const func = {
  readMore,
  upDownBrands,
  upDownTech
}
window.func = func

openCallAboutUs()
openChatAboutUs()
openCallMobile()
openChatMobile()
sliderInit()
