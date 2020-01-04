const pressButton = document.querySelector("#button");
const passText = document.querySelector("#GenerateText");
pressButton.addEventListener("keypress", () => {
  let x = event.which || event.keycode;
  passText.innerHTML = x;
});
