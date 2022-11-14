"use strict"
document.addEventListener("DOMContentLoaded", () => {
  const heroCounter__increment = document.querySelectorAll(
    ".heroCounter__increment"
  )
  const heroCounter__decrement = document.querySelectorAll(
    ".heroCounter__decrement"
  )
  // const heroCounter__number = document.querySelector(".heroCounter__number")

  /* //////// functions //////////// */
  /* increment or decrement element's value */
  function decrementOrIncrement(functionality, element) {
    const minValue = +element.dataset.min
    const maxValue = +element.dataset.max

    functionality === "increment" && +element.value < maxValue
      ? element.value++
      : +element.value > minValue &&
        functionality === "decrement" &&
        element.value--
  }

  /* ///////////// using functions ///////////// */

  /* increment number */
  heroCounter__increment.forEach((inc) =>
    inc.addEventListener("click", () => {
      decrementOrIncrement("increment", inc.nextElementSibling)
    })
  )
  /* decrement number */
  heroCounter__decrement
    .forEach((inc) =>
      inc.addEventListener("click", () => {
        decrementOrIncrement("decrement", inc.previousElementSibling)
      })
    )
})
