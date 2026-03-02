$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".toggle__btn").on("click", function () {
    $("#header").toggleClass("open"); 
  });


  $("#mask").on("click", function () {
    $("#header").removeClass("open");
  });

  $("#navi a").on("click", function () {
    $("#header").removeClass("open");
  });

  /*=================================================
  スムーススクロール
  ===================================================*/
    $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });
  
  /*=================================================
  PICK UP スライダー
  ===================================================*/

  $(".slick__area").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });

  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/

  $(window).scroll(function () {
    $(".fadein").each(function () {

      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });


});