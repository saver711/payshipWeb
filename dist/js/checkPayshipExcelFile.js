/* check for file input */
const excelForm = document.getElementById("excelForm")
const excelFileUpload = document.getElementById("excelFileUpload")
const customBtn = document.getElementById("custom-button")
const customTxt = document.getElementById("custom-text")

/* function to check input value based on data-pattern attr */
function checkInputRegex(element) {
  const regex = new RegExp(element.dataset.pattern)
  if (element.type === "file") {
    if (!element.value.slice(element.value.lastIndexOf(`\\`) + 1).match(regex))
      return false
    return regex.test(
      element.value.slice(element.value.lastIndexOf(`\\`) + 1).match(regex)[0]
    )
  }
  return regex.test(element.value)
}

excelFileUpload.addEventListener("change", () => {
  const regex = new RegExp(excelFileUpload.dataset.pattern)

  excelForm.querySelector(".invalid-feedback").style.display = "none"

  if (excelFileUpload.value) {
    customTxt.innerHTML = excelFileUpload.value.slice(
      excelFileUpload.value.lastIndexOf(`\\`) + 1
    )
  } else {
    customTxt.innerHTML = "لم تختار ملف للآن."
  }
})

customBtn.addEventListener("click", function () {
  excelFileUpload.click()
})

excelForm.addEventListener(
  "submit",
  (event) => {
    if (!excelForm.checkValidity() || !checkInputRegex(excelFileUpload)) {
      event.preventDefault()
      event.stopPropagation()
      excelForm.querySelector(".invalid-feedback").style.display = "block"
    }

    excelForm.classList.add("was-validated")
  },
  false
)
