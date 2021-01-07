var btn = document.getElementById("themeSwitch");

btn.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  var nav = document.getElementById("nav");
  nav.classList.toggle("navbar-dark");
  nav.classList.toggle("navbar-light");

  var themeBtn = document.getElementById("themeSwitch");
  themeBtn.classList.toggle("btn-dark");
  themeBtn.classList.toggle("btn-light");
  if(themeBtn.innerHTML === "Light Mode") {
    themeBtn.innerHTML = "Dark Mode"
  } else {
      themeBtn.innerHTML = "Light Mode"
  }

  var resumeBtn = document.getElementById("resume-btn");
  resumeBtn.classList.toggle("btn-outline-dark");
  resumeBtn.classList.toggle("btn-outline-light");
});
