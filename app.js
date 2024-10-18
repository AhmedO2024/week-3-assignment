const cookieBtn = document.getElementById("cookie-btn");
const cookieDisplay = document.getElementById("cookie-display");
const cpsDisplay = document.getElementById("cps-display");
const upgradeBtn = document.getElementById("upgrade-btn");
const autoBtn = document.getElementById("auto-btn");
const resetBtn = document.getElementById("reset-btn");
const biteSound = document.getElementById("bite-sound");
const upgradeSound = document.getElementById("upgrade-sound");
const autoSound = document.getElementById("auto-sound");
const resetSound = document.getElementById("reset-sound");
const alertSound = document.getElementById("alert-sound");

let cookies = Number(localStorage.getItem("cookies")) || 0;
let cps = Number(localStorage.getItem("cps")) || 0;
let clickPower = Number(localStorage.getItem("clickPower")) || 1;

cookieDisplay.textContent = cookies;
cpsDisplay.textContent = cps;

function updateLocalStorage() {
  localStorage.setItem("cookies", cookies);
  localStorage.setItem("cps", cps);
  localStorage.setItem("clickPower", clickPower);
}

setInterval(function () {
  cookies = cookies + cps;
  cookieDisplay.textContent = cookies;
  updateLocalStorage();
}, 1000);

cookieBtn.addEventListener("click", function () {
  cookies += clickPower;
  cookieDisplay.textContent = cookies;
  updateLocalStorage();
  biteSound.play();
});

upgradeBtn.addEventListener("click", function () {
  if (cookies >= 50) {
    clickPower += 1;
    cookies -= 50;
    cookieDisplay.textContent = cookies;
    updateLocalStorage();
    upgradeSound.play();
  } else {
    alertSound.play();
    alert("You don't have enough cookies to upgrade!");
  }
});

autoBtn.addEventListener("click", function () {
  if (cookies >= 100) {
    cps += 1;
    cookies -= 100;
    cookieDisplay.textContent = cookies;
    cpsDisplay.textContent = cps;
    updateLocalStorage();
    autoSound.play();
  } else {
    alertSound.play();
    alert("You don't have enough cookies to purchase an auto clicker!");
  }
});
resetBtn.addEventListener("click", function () {
  cps = 0;
  cookies = 0;
  clickPower = 1;
  cookieDisplay.textContent = cookies;
  cpsDisplay.textContent = cps;
  updateLocalStorage();
  resetSound.play();
});
