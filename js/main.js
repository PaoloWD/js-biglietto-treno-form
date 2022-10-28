const submitBtn = document.querySelector(".btn-outline-primary");

submitBtn.addEventListener("click", function () {
  const fullNameEl = document.querySelector(".full-name");
  const distanceEl = document.querySelector(".distance");
  const distanza = parseInt(distanceEl.value);
  const saleEl = document.querySelector(".sale");

  let ticketPrice = distanza * 0.21;
  const subDistance = document.querySelector("span.distance");
  const subName = document.querySelector("span.full-name");
  const subSale = document.querySelector("span.sale");

  console.log(fullNameEl);
  console.log(distanceEl);
  console.log(saleEl);
  console.log(submitBtn);

  subName.innerHTML = fullNameEl.value;
  console.log(fullNameEl.value);

  subDistance.innerHTML = distanceEl.value;
  console.log(distanceEl.value);

  if (saleEl.value === "20") {
    ticketPrice = ticketPrice * 0.8;
    subSale.innerHTML = ticketPrice.toFixed(2);
  } else if (saleEl.value === "40") {
    ticketPrice = ticketPrice * 0.6;
    subSale.innerHTML = ticketPrice.toFixed(2);
  } else {
    subSale.innerHTML = ticketPrice.toFixed(2);
  }
});
