var darkColor = "#121212";
function isDark() {
  document.body.style.transition = "0ms";
  var values = window.localStorage.getItem("value");
  if (values === null || values.length === 0) {
    document.getElementById("light-logo").style.display = "none";
    document.getElementById("dark-logo").style.display = "block";
    document.documentElement.style.setProperty(
      "--toggle-color",
      "rgb(0, 0, 0)"
    );
    document.getElementById("btn-1").style.display = "block";
    document.getElementById("btn-2").style.display = "none";
    document.body.style.backgroundColor = "rgb(256, 256, 256)";
    document.documentElement.style.setProperty(
      "--bg-grad",
      "linear-gradient(to left, #003cff2d 0%, #ff000031 100%)"
    );
  }
  if (localStorage.getItem("value") == "true") {
    document.getElementById("light-logo").style.display = "block";
    document.getElementById("dark-logo").style.display = "none";
    document.documentElement.style.setProperty(
      "--toggle-color",
      "rgb(256, 256, 256)"
    );
    document.getElementById("btn-1").style.display = "none";
    document.getElementById("btn-2").style.display = "block";
    document.body.style.backgroundColor = darkColor;
    document.documentElement.style.setProperty("--bg-grad", "none");
  } else if (localStorage.getItem("value") == "false") {
    document.getElementById("light-logo").style.display = "none";
    document.getElementById("dark-logo").style.display = "block";
    document.documentElement.style.setProperty(
      "--toggle-color",
      "rgb(0, 0, 0)"
    );
    document.getElementById("btn-1").style.display = "block";
    document.getElementById("btn-2").style.display = "none";
    document.body.style.backgroundColor = "rgb(256, 256, 256)";
    document.documentElement.style.setProperty(
      "--bg-grad",
      "linear-gradient(to left, #003cff2d 0%, #ff000031 100%)"
    );
  }
}

function toggleDark() {
  document.getElementById("light-logo").style.display = "block";
  document.getElementById("dark-logo").style.display = "none";
  document.documentElement.style.setProperty(
    "--toggle-color",
    "rgb(256, 256, 256)"
  );
  document.getElementById("btn-1").style.display = "none";
  document.getElementById("btn-2").style.display = "block";
  document.body.style.backgroundColor = darkColor;
  localStorage.setItem("value", "true");
  document.body.style.transition = "150ms";
  document.documentElement.style.setProperty("--bg-grad", "none");
}

function toggleLight() {
  document.documentElement.style.setProperty("--toggle-color", "rgb(0, 0, 0)");
  document.getElementById("light-logo").style.display = "none";
  document.getElementById("dark-logo").style.display = "block";
  document.getElementById("btn-1").style.display = "block";
  document.getElementById("btn-2").style.display = "none";
  document.body.style.backgroundColor = "rgb(256, 256, 256)";
  localStorage.setItem("value", "false");
  document.body.style.transition = "150ms";
  document.documentElement.style.setProperty(
    "--bg-grad",
    "linear-gradient(to left, #003cff2d 0%, #ff000031 100%)"
  );
}

window.addEventListener("DOMContentLoaded", (event) => {
  isDark();
  document.getElementById("btn-1").addEventListener("click", toggleDark);
  document.getElementById("btn-2").addEventListener("click", toggleLight);
});
