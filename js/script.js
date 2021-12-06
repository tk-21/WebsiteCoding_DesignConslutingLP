/* ハンバーガーメニュー */
$(function () {
  $(".burger_btn").on("click", function () {
    $(this).toggleClass("close");
    $(".header_nav").fadeToggle(400);
    if ($(this).hasClass("close")) {
      $("html").addClass("scroll-prevent");
    } else {
      $("html").removeClass("scroll-prevent");
    }
  });
});

/* パララックス */
$(function () {
  var target1 = $(".fv_pc");
  var targetPosOT1 = target1.offset().top;
  var targetFactor = 0.3;
  var windowH = $(window).height();
  var scrollYStart1 = targetPosOT1 - windowH;
  $(window).on("scroll", function () {
    var scrollY = $(this).scrollTop();
    if (scrollY > scrollYStart1) {
      target1.css(
        "background-position-y",
        (scrollY - targetPosOT1) * targetFactor + "px"
      );
    } else {
      target1.css("background-position", "right bottom");
    }
  });
});

/* アコーディオン */
$(function () {
  $(".ac_parent").on("click", function () {
    $(this).next().slideToggle();
    //openクラスをつける
    $(this).toggleClass("open");
    //クリックされていないac_parentのopenクラスを取る
    $(".ac_parent").not(this).removeClass("open");

    // 一つ開くと他は閉じるように
    $(".ac_parent").not($(this)).next(".ac_child").slideUp();
  });
});

/* スムーススクロールでページトップへ */
$(function () {
  $(".page_top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});

/* ボタンをフッターの上で止める */
// $(function () {
//   $(window).on("scroll", function () {
//     documentHeight = $(document).height();
//     scrollPosition = $(this).height() + $(this).scrollTop();
//     footerHeight = $(".footer").innerHeight();

//     if (documentHeight - scrollPosition <= footerHeight) {
//       $(".fix_btn").css({
//         position: "absolute",
//         bottom: footerHeight + 20,
//       });
//     } else {
//       $(".fix_btn").css({
//         position: "fixed",
//         bottom: 40,
//       });
//     }
//   });
// });
