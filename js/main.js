//validiamo i dati inseriti
let ticketPriceSale;
let fullNameEl = document.querySelector(".full-name");
let distanceEl = document.querySelector(".distance");
let saleEl = document.querySelector(".sale");
const submitBtn = document.querySelector(".btn-outline-primary");
const ticketPrice = (distanceEl * 0.21).toFixed(2);
const subDistance = document.querySelector("span.distance");
const subName = document.querySelector("span.full-name");
const subSale = document.querySelector("span.sale");

console.log(fullNameEl);
console.log(distanceEl);
console.log(saleEl);
console.log(ticketPriceSale);
console.log(submitBtn);

submitBtn.addEventListener("click", function () {
  subName.innerHTML = fullNameEl.value;
  console.log(fullNameEl.value);

  subDistance.innerHTML = distanceEl.value;
  console.log(distanceEl.value);

  if (saleEl.value === 20) {
    ticketPrice = ticketPrice * 0.8;
    subSale.innerHTML = ticketPriceSale.value;
  }
  if (saleEl.value === 40) {
    ticketPrice = ticketPrice * 0.6;
  }
});
