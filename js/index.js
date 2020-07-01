function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}
const titulo = document.querySelector("p");
typeWriter(titulo);

/*Menu Mobile*/

const botao = document.querySelector(".mobile-btn");
botao.addEventListener("click", function () {
  this.classList.toggle("active");
  let menu = document.querySelector(".mobile-menu");
  menu.classList.toggle("active");
});
