/*Menu Mobile*/

const botao = document.querySelector(".mobile-btn");
botao.addEventListener("click", function () {
  this.classList.toggle("active");
  let menu = document.querySelector(".mobile-menu");
  menu.classList.toggle("active");
});
