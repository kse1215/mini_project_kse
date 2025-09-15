window.addEventListener("load", function () {
  const buttons = document.querySelectorAll(".goods_btn");
  const mainImg = document.querySelector("#goods_img");
  const tabImg = this.document.querySelector("#tab_thumb_img")
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("active");
      });
      // 버튼에 저장된 data-img속성값 가져오기
      const newImg = btn.dataset.img;
      mainImg.src = newImg;
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      } else {
        btn.classList.add("active");
      }
      const tabThumbImg = btn.dataset.img;
      tabImg.src = tabThumbImg;
    });
  });
});
