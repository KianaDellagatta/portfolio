// Globale constanter
const overlay = document.querySelector("#overlay_container");
const picture = document.querySelector("#picture_container");
const camera1 = document.querySelector("#polaroid_container");
const camera2 = document.querySelector("#polaroid_container2");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log(sidenVises);
  // klik på start_knap
  document.querySelector("#start_knap").addEventListener("click", startSpil);
}

function startSpil() {
  console.log(startSpil);

  // Add the "print" and "fald2" animations to the overlay

  overlay.classList.add("fald2");

  // Add "print" animation to the picture as well
  picture.classList.add("print");

  // Fade out camera elements
  camera1.classList.add("fade");
  camera2.classList.add("fade");
}
