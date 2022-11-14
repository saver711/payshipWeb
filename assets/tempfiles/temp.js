/* placing an order */ //add these to common.scss // these are for old way of handling order (popup way) - in else case
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
          if (form.classList.contains("orderForm"))
            $("#packCompaniesModal").modal("show")

          if (form.classList.contains("packCompaniesForm")) {
            $("#packCompaniesModal").modal("hide")
            $("#summaryModal").modal("show")
          }
        }

        form.classList.add("was-validated")
      },
      false
    )
  })
})()
