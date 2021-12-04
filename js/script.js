const elHamburgerBtn = document.querySelector(".sitenav_hamburger");
const elHeader = document.querySelector(".sitenav");
elHamburgerBtn.addEventListener("click", () => {
  elHeader.classList.toggle("sitenav--open");
});
