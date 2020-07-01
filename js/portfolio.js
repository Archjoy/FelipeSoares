/*Menu Mobile*/

const botao = document.querySelector(".mobile-btn");
botao.addEventListener("click", function () {
  this.classList.toggle("active");
  let menu = document.querySelector(".mobile-menu");
  menu.classList.toggle("active");
});

(function () {
  var $target = $('[data-anime="scroll"]'),
    animationClass = "animate",
    offset = ($(window).height() * 3) / 4;

  function animeScroll() {
    var documentTop = $(document).scrollTop();

    $target.each(function () {
      var itemTop = $(this).offset().top;
      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }

  animeScroll();

  $(document).scroll(
    debounce(function () {
      animeScroll();
    }, 200),
  );
})();
