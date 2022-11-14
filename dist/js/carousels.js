"use strict"
/* splide */
// const sharedOptions = {
//   type: "loop",
//   direction: 'rtl',
//   autoplay: true,
//   perPage:2,
//   perMove: 1,
//   interval: 500,
//   gap: "1rem",
//   pagination: false,
//   isNavigation: false,
//   arrows: false,
// }

const sharedOptions = {
  loop: true,
  dots: false,
  autoplay: true,
  rtl: true,
  nav: false,
}

document.addEventListener("DOMContentLoaded", () => {
  /* splide */
  // new Splide(".companies1Slider", sharedOptions).mount()

$(".companies1Slider").owlCarousel({
  ...sharedOptions,
  items: 2,
  margin: 10,
  autoplayTimeout: 2000,
  responsive: {
    1200: {
      items: 6,
    },
    992: {
      items: 5,
    },
    768: {
      items: 4,
    },
    576: {
      items: 3,
    },
  },
})
$(".partnersSlider").owlCarousel({
  ...sharedOptions,
  items: 3,
  margin: 10,
  autoplayTimeout: 2000,
  responsive: {
    1200: {
      items: 8,
    },
    992: {
      items: 7,
    },
    768: {
      items: 6,
    },
    576: {
      items: 5,
    },
    400: {
      items: 4,
    },
  },
})

$(".howToUseSlider").owlCarousel({
  ...sharedOptions,
  items: 1,
  mouseDrag: false,
  touchDrag: false,
  slideTransition: "ease-in-out",
  autoplayTimeout: 2500
  // margin: 10,
})
  
})
