const submitBtn = document.querySelector(".btn-outline-primary");
const resetBtn = document.querySelector(".btn-outline-danger");
const inputs = document.querySelectorAll("input");
const options = document.querySelectorAll("option");
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
  if (distanceEl.value == "" || fullNameEl.value == "") {
    alert("Compila tutti i campi");
  } else {
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
      offert.innerHTML = `Non hai diritto ad alcuno sconto`;
    }

    const max10 = Math.ceil(Math.random() * 5);
    randomNum.innerHTML = max10;

    const max100000 = Math.ceil(Math.random() * 100000);
    randomCarriage.innerHTML = max100000;
  }
});

resetBtn.addEventListener("click", function () {
  document.getElementById("show").style.display = "none";
  document.querySelector(".sale").value = "0";
  document.querySelector(".distance").value = "";
  document.querySelector(".full-name").value = "";
  document.querySelector("span.full-name").innerHTML = "";
  document.querySelector(".random").innerHTML = "";
  document.querySelector(".carriage").innerHTML = "";
  document.querySelector("span.sale").innerHTML = "";
  document.querySelector(".offert").innerHTML = "";
});
