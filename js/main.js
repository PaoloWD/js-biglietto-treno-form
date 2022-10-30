const submitBtn = document.querySelector(".btn-outline-primary");
const resetBtn = document.querySelector(".btn-outline-danger");
function show() {
  document.getElementById("show").style.display = "block";
}

submitBtn.addEventListener("click", function () {
  const fullNameEl = document.querySelector(".full-name");
  const distanceEl = document.querySelector(".distance");
  const distanceCost = parseInt(distanceEl.value);
  const saleEl = document.querySelector(".sale");
  const offert = document.querySelector(".offert");
  const randomNum = document.querySelector("span.random");
  const randomCarriage = document.querySelector("span.carriage");

  let ticketPrice = distanceCost * 0.21;
  const subName = document.querySelector("span.full-name");
  const subSale = document.querySelector("span.sale");
  subName.innerHTML = fullNameEl.value;
  if (saleEl.value === "20") {
    ticketPrice = ticketPrice * 0.8;
    subSale.innerHTML = ticketPrice.toFixed(2);
    offert.innerHTML = `20%`;
  } else if (saleEl.value === "40") {
    ticketPrice = ticketPrice * 0.6;
    subSale.innerHTML = ticketPrice.toFixed(2);
    offert.innerHTML = `40%`;
  } else {
    subSale.innerHTML = ticketPrice.toFixed(2);
    offert.innerHTML = `0%`;
  }

  const max10 = Math.ceil(Math.random() * 5);
  randomNum.innerHTML = max10;

  const max100000 = Math.ceil(Math.random() * 100000);
  randomCarriage.innerHTML = max100000;
});
