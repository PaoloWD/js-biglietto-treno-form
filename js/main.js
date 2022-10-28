const submitBtn = document.querySelector(".btn-outline-primary");

submitBtn.addEventListener("click", function () {
  const fullNameEl = document.querySelector(".full-name");
  const distanceEl = document.querySelector(".distance");
  const distanceCost = parseInt(distanceEl.value);
  const saleEl = document.querySelector(".sale");
  const offert = document.querySelector(".offert");
  let ticketPrice = distanceCost * 0.21;
  const subDistance = document.querySelector("span.distance");
  const subName = document.querySelector("span.full-name");
  const subSale = document.querySelector("span.sale");
  subName.innerHTML = fullNameEl.value;
  subDistance.innerHTML = distanceEl.value;
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
    offert.innerHTML = `Non hai diritto a nessun sconto`;
  }
});
