

$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/

  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });

  $("#navi a").on("click", function () {
    $("header").removeClass("open");
  });

  /*=================================================
  スムーススクロール
  ===================================================*/

$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();

  const href = $(this).attr("href");

  let $target;
  if (href === "#" || href === "") {
    $target = $("html");
  } else {
    $target = $(href);
  }
  if ($target.length === 0) return;

  const position = $target.offset().top;
  $("html, body").animate({ scrollTop: position }, 600, "swing");
});



$('#navi').on('click', function (e) {

  if ($(e.target).closest('a').length) return;

  $('header').removeClass('open');

  $("html, body").animate({ scrollTop: 0 }, 600, "swing");
});

  /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
   $(window).scroll(function () {
    $(".inview-slide-left").each(function () {
      
      var scroll = $(window).scrollTop();
      
      var target = $(this).offset().top;
      
      var windowHeight = $(window).height();
      
      if (scroll > target - windowHeight + $(this).outerHeight()) {

        $(this).addClass("slidein-left");
      }
    });
  });
  
  $(window).scroll(function () {
    $(".inview-slide-right").each(function () {
      
      var scroll = $(window).scrollTop();
      
      var target = $(this).offset().top;
      
      var windowHeight = $(window).height();
      
      if (scroll > target - windowHeight + $(this).outerHeight()) {

        $(this).addClass("slidein-right");
      }
    });
  });

  $(window).scroll(function () {
    $(".balloon").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {

        $(this).addClass("inview-balloon");
      }
    });
  });

});






