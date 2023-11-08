// $(function () {
//   $("#js-drawer-icon").on("click", function () {
//     $("#js-drawer-icon").toggleClass("is-checked");
//     $("#js-drawer-content").toggleClass("is-checked");
//   })
// });

// JavaScript

const drawerIcon = document.querySelector("#js-drawer-icon");
const drawerContent = document.querySelector("#js-drawer-content");

document
  .querySelector("#js-drawer-icon").addEventListener("click", function (e) {
  e.preventDefault();
  drawerIcon.classList.toggle("is-checked");
  drawerContent.classList.toggle("is-checked");
  });

$(function () {
  $(".js-accordion").on("click", function (e) {
    e.preventDefault();

    if ($(this).parent().hasClass("is-open")) {
      $(this).parent().removeClass("is-open");
      $(this).next().slideUp();
    } else {
      $(this).parent().addClass("is-open");
      $(this).next().slideDown();
    }
  });
});



const swiper = new Swiper('#js-gallery-swipey', {
  spaceBetween: 82,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '#js-gallery-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#js-gallery-prev',
    prevEl: '#js-gallery-next',
  },

});

$(function () {
  $(".js-modal-open").on("click", function () {
    $("#js-about-modal")[0].showModal();
  })

  $(".js-modal-close").on("click", function () {
    $("#js-about-modal")[0].close();
  })

  $('a[href^="#"]').on("click", function () {
    const speed = 300;
    const id = $(this).attr("href");
    const target = $("#" == id ? "html" : id);
    const position = $(target).offset().top;
    $("html,body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
  })

  $('#js-drawer-content a[href^="#"]').on("click", function () {
    $("#js-drawer-icon").removeClass("is-checked");
    $("#js-drawer-content").removeClass("is-checked");
  })

  $(window).on("scroll", function () {
    if (100 < $(window).scrollTop()) {
      $("#js-pagetop").addClass("is-show");
    } else {
      $("#js-pagetop").removeClass("is-show");
    }
  })
});
