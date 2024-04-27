let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");

function toggleShow(id) {
  let text = document.getElementById(id);
  text.classList.toggle("show");
}

button1.addEventListener("click", function () {
  toggleShow("paragraph1");
});
button2.addEventListener("click", function () {
  toggleShow("paragraph2");
});
button3.addEventListener("click", function () {
  toggleShow("paragraph3");
});
button4.addEventListener("click", function () {
  toggleShow("paragraph4");
});
button5.addEventListener("click", function () {
  toggleShow("paragraph5");
});
