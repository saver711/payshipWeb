$(function () {
  $('input[name="datefilter"]').daterangepicker(
    {
      // startDate: moment().startOf("hour"),
      // endDate: moment().startOf("hour").add(32, "hour"),
      autoUpdateInput: false,
      locale: {
        format: "DD/MM/YYYY",
        cancelLabel: "مسح",
        applyLabel: "إختيار",
      },
    },
    /* what to do after clicking apply? */
    function (start, end, label) {
      console.log(
        "A new date selection was made: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD")
      )
    }
  )
})

$('input[name="datefilter"]').on(
  "apply.daterangepicker",
  function (ev, picker) {
    $(this).val(
      picker.startDate.format("DD/MM/YYYY") +
        " - " +
        picker.endDate.format("DD/MM/YYYY")
    )
  }
)

/* what to do after clicking cancel? */
$('input[name="datefilter"]').on(
  "cancel.daterangepicker",
  function (ev, picker) {
    $(this).val("")
  }
)
