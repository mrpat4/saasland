const menuBtn = document.querySelector(".mobile-nav-btn");
const menuNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");
const navBtn = document.querySelector(".mobile-nav-btn");

const open = () => {
  menuNav.classList.toggle("show-mobile-nav");
  body.style.overflowY = "hidden";
  navBtn.style.display = "none";
};
menuBtn.addEventListener("click", open);

menuBtn.addEventListener("touchstart", () => {
  if (menuNav.classList.contains("show-mobile-nav")) {
    menuBtn.removeEventListener("click", open);
  } else {
    menuBtn.addEventListener("click", open);
  }
});

document.addEventListener("mousedown", () => {
  if (menuNav.classList.contains("show-mobile-nav")) {
    menuNav.classList.remove("show-mobile-nav");
    body.style.overflowY = "scroll";
    navBtn.style.display = "block";
  }
});
