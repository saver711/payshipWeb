const triggerPayment = (amount, currency) => {
  Moyasar.init({
    element: ".mysr-form",
    amount: currency === "SAR" ? amount * 100 : amount,
    currency: currency,
    description: "Add Credit to wallet ",
    //   You will ned to hide this key
    publishable_api_key: "pk_test_JoANs5SCVhbcWSEcoANX9Ho4UFt4SF5SSmWqv6UU",
    // language: '@(Util.IsArabic() ? "ar" : "en")',
    callback_url: "@_moyasarPaymentConfiguration.Value.PaymentCallBack",
    methods: ["creditcard"],
    // metadata: {
    //   merchant_id: "@Model.Reference",
    // },
    on_completed: function (payment) {
      console.log(payment)
      $.ajax({
        type: "POST",
        // url: '@Url.Action("AddCredit","Wallet")',
        data: payment,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          if (!data.ok && data.errors) {
            alert(data.errors)
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(jqXHR)
          console.log(textStatus)
          console.log(errorThrown)
          alert(
            "on_completed reject :" +
              jqXHR +
              " " +
              textStatus +
              " " +
              errorThrown
          )
          reject()
        },
      })
    },
  })
}

const paymentTrigger = document.getElementById("paymentTrigger")
const paymentAmountInput = document.getElementById("paymentAmountInput")
const minAmount = 50
paymentTrigger.addEventListener("submit", () => {
  const paymentAmount = +paymentAmountInput.value
// 50 not allowed, 51 allowed
  if (paymentTrigger.classList.contains("customIsValid") && paymentAmount > minAmount)
    triggerPayment(paymentAmount, "SAR")
})
