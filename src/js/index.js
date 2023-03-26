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

const func = {
  readMore,
  openCallMobile,
  openCallAboutUs,
  openChatAboutUs,
  openChatMobile,
  upDownBrands,
  upDownTech
}

openCallAboutUs()
openChatAboutUs()
openCallMobile()
openChatMobile()
window.func = func
import sliderInit from './scripts/components/sliderInit'
sliderInit()
