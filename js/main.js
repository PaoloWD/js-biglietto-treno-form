//validiamo i dati inseriti
let ticketPriceSale;
let fullNameEl = document.querySelector(".full-name");
let distanceEl = document.querySelector(".distance");
let saleEl = document.querySelector(".sale");
const submitBtn = document.querySelector(".btn-outline-primary");
const ticketPrice = (distanceEl * 0.21).toFixed(2);

console.log(fullNameEl);
console.log(distanceEl);
console.log(saleEl);
console.log(ticketPriceSale);
console.log(submitBtn);

submitBtn.addEventListener("click", function () {
  const distance = document.querySelector(".distance");
  distance.innerHTML = distanceEl.value;
  console.log(distance.value);
});
