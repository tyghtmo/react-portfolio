var btn = document.getElementById("themeSwitch");

btn.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  document.getElementById("nav").classList.toggle("navbar-dark");
  document.getElementById("nav").classList.toggle("navbar-light");

  document.getElementById("themeSwitch").classList.toggle("btn-outline-dark");
  document.getElementById("themeSwitch").classList.toggle("btn-outline-light");
  document.getElementById("resume-btn").classList.toggle("btn-outline-dark");
  document.getElementById("resume-btn").classList.toggle("btn-outline-light");
  
});
