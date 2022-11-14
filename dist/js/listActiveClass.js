/* function to change active class in list of elements */

function changeActiveClass(className) {
    Array.from(this.parentElement.children).forEach((element) =>
    element.classList.remove("active")
    )
    this.classList.add(className)
}

const userProfileNavigation = document.querySelector(".userProfileNavigation")

const listChildren = Array.from(userProfileNavigation.children)

listChildren.forEach((item) =>
  item.addEventListener("click", () => changeActiveClass.call(item, "active"))
)
