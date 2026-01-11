function updateTeller() {
  let winkelwagen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
  let totaalAantal = winkelwagen.reduce((sum, p) => sum + p.aantal, 0);

  let teller = document.getElementById("cart-count");
  if (teller) {
    teller.innerText = totaalAantal;
  }
}

updateTeller();
