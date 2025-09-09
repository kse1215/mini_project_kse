$(function () {
  // 탭 메뉴
  $(".news_contents > li > p").click(function () {
    // console.log(this);
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
});
