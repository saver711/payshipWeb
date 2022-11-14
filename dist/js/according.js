"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const onChangeElementsHandler = document.querySelectorAll(
    ".onChangeElementHandler"
  )
  const onClickElementsHandler = document.querySelectorAll(
    ".onClickElementHandler"
  )

  /* function to accord onchange */
  function accordingOnChangeFunc(displayWay) {
    const whatToDispose = document.querySelectorAll(`.${this.dataset.dispose}`)
    const whatToShow = document.getElementById(this.value)
    whatToDispose.forEach((element) => (element.style.display = "none"))
    whatToShow.style.display = displayWay
  }

  onChangeElementsHandler.forEach((element) =>
    element.addEventListener("change", () =>
      accordingOnChangeFunc.call(element, "block")
    )
  )

  /* function to accord onclick */
  function accordingOnClickFunc(displayWay) {
    const whatToDispose = document.querySelectorAll(`.${this.dataset.dispose}`)
    const whatToShow = document.getElementById(this.dataset.show)
    whatToDispose.forEach((element) => (element.style.display = "none"))
    whatToShow.style.display = displayWay
  }

  onClickElementsHandler.forEach((element) =>
    element.addEventListener("click", () =>
      accordingOnClickFunc.call(element, "block")
    )
  )
})
