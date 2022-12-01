const element = document.getElementById("container");
const currentYear = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
  showBirthDay();
  showExperience();
});

function showBirthDay() {
  const birthday = document.querySelector(".birthday");
  const birthYear = JSON.parse(birthday.getAttribute("data-born"));
  const age = currentYear - birthYear;
  document.getElementById("year").innerHTML = " " + age + " ";
}

function showExperience() {
  const started = document.querySelector(".started");
  const startYear = JSON.parse(started.getAttribute("data-started"));
  const time = currentYear - startYear;
  document.getElementById("startedYear").innerHTML = " " + time + " ";
}

function playClick() {
  document.getElementById("clickAudio").pause();
  document.getElementById("clickAudio").currentTime = 0;
  document.getElementById("clickAudio").play();
}

function playHover() {
  document.getElementById("hoverAudio").pause();
  document.getElementById("hoverAudio").currentTime = 0;
  setTimeout(() => {
    document.getElementById("hoverAudio").play();
  }, 200)
}

function needBtn() {
  var element = document.querySelector("#up-icn");
  element.classList.remove("hide");
  element.classList.add("show");
}

function noNeedBtn() {
  var element = document.querySelector("#up-icn");
  element.classList.remove("show");
  element.classList.add("hide");
}

function enableGrad() {
  document.documentElement.style.setProperty(
    "--bg-grad",
    "linear-gradient(to left, #003cff2d 0%, #ff000031 100%)"
  );
}

function disableGrad() {
  document.documentElement.style.setProperty("--bg-grad", "none");
}
