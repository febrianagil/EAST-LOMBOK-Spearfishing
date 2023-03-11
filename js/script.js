// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//Ketika menu di klick
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik Diluar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
