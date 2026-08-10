const button = document.getElementById("clickButton");
const message = document.getElementById("message");

let count = 0;

button.addEventListener("click", function () {
  count++;
  message.textContent = "Clicked " + count + " time(s)";
});
