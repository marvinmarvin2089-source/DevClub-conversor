const convertButton = document.querySelector(".convert-button")
const fromSelect = document.querySelector("#from-currency")
const toSelect = document.querySelector(".to-currency")
const amountInput = document.querySelector(".amount")

const fromBoxes = document.querySelectorAll(".from-value")
const toBoxes = document.querySelectorAll(".to-value")
const currencyBoxes = document.querySelectorAll(".currency-box")

// taxas fixas (exemplo)
// depois você pode trocar por API
const rates = {
  BRL: 1,
  USD: 5.0,
  EUR: 5.4,
  GBP: 6.3,
  JPY: 0.034,
  AUD: 3.3,
  CAD: 3.7,
  CNY: 0.7,
  MXN: 0.29,
  ZAR: 0.27,
  KRW: 0.0038,
  KPW: 0.0038,
  THB: 0.14,
  VND: 0.00021,
  KES: 0.036
}

// símbolos
const symbols = {
  BRL: "R$",
  USD: "US$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  AUD: "A$",
  CAD: "C$",
  CNY: "¥",
  MXN: "M$",
  ZAR: "R$",
  KRW: "₩",
  KPW: "₩",
  THB: "฿",
  VND: "₫",
  KES: "ksh"
}

function hideAllFrom() {
  fromBoxes.forEach(el => {
    el.closest(".currency-box").style.display = "none"
  })
}

function hideAllTo() {
  toBoxes.forEach(el => {
    el.closest(".currency-box").style.display = "none"
  })
}

function convert() {
  const amount = Number(amountInput.value)
  if (!amount) return

  const fromCurrency = fromSelect.value
  const toCurrency = toSelect.value

  // esconder todas
  hideAllFrom()
  hideAllTo()

  // mostrar moeda FROM selecionada
  document
    .querySelector(`.currency-box[data-currency="${fromCurrency}"] .from-value`)
    .closest(".currency-box")
    .style.display = "flex"

  // mostrar moeda TO selecionada
  document
    .querySelector(`.currency-box[data-currency="${toCurrency}"] .to-value`)
    .closest(".currency-box")
    .style.display = "flex"

  // conversão
  const valueInBRL = amount * rates[fromCurrency]
  const convertedValue = valueInBRL / rates[toCurrency]

  // atualizar valores
  document.querySelector(
    `.currency-box[data-currency="${fromCurrency}"] .from-value`
  ).innerText = `${symbols[fromCurrency]} ${amount.toFixed(2)}`

  document.querySelector(
    `.currency-box[data-currency="${toCurrency}"] .to-value`
  ).innerText = `${symbols[toCurrency]} ${convertedValue.toFixed(2)}`
}

convertButton.addEventListener("click", convert)

function showInitialCurrencies() {
  hideAllFrom()
  hideAllTo()

  const fromCurrency = fromSelect.value
  const toCurrency = toSelect.value

  // mostrar FROM inicial
  document
    .querySelector(`.currency-box[data-currency="${fromCurrency}"] .from-value`)
    .closest(".currency-box")
    .style.display = "flex"

  // mostrar TO inicial
  document
    .querySelector(`.currency-box[data-currency="${toCurrency}"] .to-value`)
    .closest(".currency-box")
    .style.display = "flex"
}

// quando a página carrega
showInitialCurrencies()

