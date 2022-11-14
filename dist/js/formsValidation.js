
;(() => {
  "use strict"

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation")

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        /* preventDefault in all cases */
        event.preventDefault()
        event.stopPropagation()

        if (!form.checkValidity()) {
          console.log("form not valid")
        } else {
          console.log("form is valid")
          form.classList.add("customIsValid")
        }

        form.classList.add("was-validated")
      },
      false
    )
  })
})()
