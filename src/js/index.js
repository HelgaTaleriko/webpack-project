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
// import sliderInit from './scripts/components/sliderInit'
import Swiper, { Navigation, Pagination } from 'swiper'

  new Swiper('.swiper-container', {
    modules: [Navigation, Pagination],
    freeMode:true,
    speed:800,
    keyboard:{
      enabled:true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel:{
      sensitivity:1,
      eventsTarget: '.swiper-slide'

    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 'auto',
      },
      768: {
        slidesPerView:'auto' ,
        enabled: false,
      },
    },
  })


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
