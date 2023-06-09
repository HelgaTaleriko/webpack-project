import Swiper, { Navigation, Pagination } from 'swiper'

 function sliderInit() {
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
})}

