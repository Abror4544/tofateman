$(function () {
  var swiper = new Swiper(".screenSwiper", {
    loop: false,
    spaceBetween: 21,
    breakpoints: {
      280: {
        slidesPerView: 2.8,
      },
      767: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 7,
      }
    }
  });


  let target = document.querySelectorAll(".footer-menu__title");
  let menu = document.querySelectorAll(".footer-menu__list");

  for (let i = 0; i < target.length; i++) {
    target[i].addEventListener("click", () => {
      if (menu[i].classList.contains("active")) {
        menu[i].classList.remove("active");
      } else {
        menu[i].classList.add("active");
      }
    });
  }

  $(".bar").click(() => {
    $(".header-menu").css("left", "0");
    $("body").addClass("fixed");
  });
  $(".close").click(() => {
    $(".header-menu").css("left", "-100%");
    $("body").removeClass("fixed");
  });  

  let link = $(".header-menu__link");

  link.on("click", function (e) {
    if($(window).width() <= 1100){
      $(".header-menu").css("left", "-100%");
      $("body").removeClass("fixed");
    }
    link.removeClass("active");
    let selector = $(this).addClass("active").attr("href");
    let target = $(selector);
    $("html, body").animate({ scrollTop: target.offset().top - 70 }, 500);
  });
});
