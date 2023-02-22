// 헤더 스크롤 구현

let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 300);

function hasScrolled() {
  // 동작 구현
  let st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }
  lastScrollTop = st;
}

// sec01 메인 슬라이드

const swiper01 = new Swiper(".swiper01", {
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // 페이지네이션에 어떻게 글씨?
  // renderBullet: function (index, className) {
  //   return (
  //     '<span class="' + className + '">' + "BAEXANG" + (index + 1) + "</span>"
  //   );
  // },
});

// sec02 슬라이드

const swiper02 = new Swiper(".swiper02", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination02",
    clickable: true,
    dynamicBullets: true,
  },
});

// sec02 hover 이벤트

$(".swiper02 img").mouseover(function () {
  $(".cardCart").addClass("active");
});
$(".swiper02 img").mouseout(function () {
  $(".cardCart").removeClass("active");
});
