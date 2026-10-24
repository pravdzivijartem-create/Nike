const open = document.getElementById("open");
const open1 = document.getElementById("open1");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

open.addEventListener("click", () => {
  modal.style.display = "block";
})

open1.addEventListener("click", () => {
  modal.style.display = "block";
})

close.addEventListener("click", () => {
  modal.style.display = "none";
})

const modal2 = document.getElementById("modal2");
const open2 = document.getElementById("open2");
const close2 = document.getElementById("close2");

open2.addEventListener("click", () => {
  modal2.style.display = "block";
})

close2.addEventListener("click", () => {
  modal2.style.display = "none";
})

close2.addEventListener("click", () => {
  modal.style.display = "none";
})