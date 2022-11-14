"use strict"
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger_menu")
  const closeMenu = document.querySelector(".close_menu")
  const sideNav = document.querySelector(".sideNav")

  /* /////////// functions //////// */
  /* function to play with classList */
  function configureClassList(element, method, classText) {
    element.classList[method](classText)
  }

  /* function to change css property of any element */
  function changeCssProperty(element, property, newVal) {
    element.style[property] = newVal
  }
  /* function to handle clicking outside */
  function handleClickOutside(callback) {
    window.addEventListener("click", callback)
  }
  /* open sideNav */
  burgerMenu.addEventListener("click", () => {
    changeCssProperty(sideNav, "right", 0)
    configureClassList(sideNav, "add", "sideNavOpened")
  })

  /* close sideNav */
  closeMenu.addEventListener("click", () => {
    changeCssProperty(sideNav, "right", "-300px")
    configureClassList(sideNav, "remove", "sideNavOpened")
  })

  /* click outside sideNav */
  const whatToDoForSideNavWhenClickOutside = ({ target }) => {
    if (!target.closest(".sideNav") && !target.closest(".burger_menu ")) {
      changeCssProperty(sideNav, "right", "-300px")
      configureClassList(sideNav, "remove", "sideNavOpened")
    }
  }

  handleClickOutside(whatToDoForSideNavWhenClickOutside)

  // burgerMenu.addEventListener("click", () =>
  //   configureClassList(sideNav, "remove", "closed")
  // )
  // closeMenu.addEventListener("click", () =>
  //   configureClassList(sideNav, 'add', "closed")
  // )
})
