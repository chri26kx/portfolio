const menu = document.querySelector("#menu");
const menuknap = document.querySelector(".menuknap");

window.addEventListener("load", sidenVises);

// Siden vises kald "sidenVises"
function sidenVises() {
  console.log("sidenVises");

  // Gør menuknappen klikbar --> Ved Klik kald toggleMenu
  menuknap.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");

  //   Toggle klassen "hidden"
  menu.classList.toggle("hidden");

  //   Se efter om #menu har klassen "hidden"
  let erSkjult = menu.classList.contains("hidden");

  //   Hvis det er sandt vis "☰" - Ellers vis "x"
  if (erSkjult == true) {
    menuknap.textContent = "☰";
  } else {
    menuknap.textContent = "x";
  }
}
