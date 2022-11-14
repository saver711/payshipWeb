"use strict"

/* ////// functions //////// */
/* function to loop class over list of elements - the class sticks over the elements
----- 1st round
item1.active
----- 2nd round
item1.active
item2.active
----////////// and so on
*/

function loopClassOverListOfElements(elementsClass, className) {
  const elements = document.querySelectorAll(`.${elementsClass}`)
  let index = 1 // set it to 0 if the first element doesn't has <className> class
  let interval
  interval = setInterval(() => {
    if (index < elements.length) {
      elements[index].classList.add(className)
      index++
    } else if (index === elements.length) {
      ;[...elements].slice(1).forEach((element) => {
        element.classList.remove(className)
      })
      index = 1
    }
  }, 2500)
}

loopClassOverListOfElements("stepper__item", "active")
