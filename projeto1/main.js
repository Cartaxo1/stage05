//variáveis
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let xAttempts = 1;

//eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown");

//funções callback
function handleTryClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");

  if (inputNumber.value < 1 || inputNumber.value > 10) {
    alert("Número inválido");
  }

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    screen2.querySelector(
      "h2"
    ).innerText = `Você acertou em ${xAttempts} tentativas.`;
  }
  inputNumber.value = "";
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function enterReset(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}
