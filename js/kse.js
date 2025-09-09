window.addEventListener("load", function () {
  // 지구의 목소리
  let earthsVoiceSwiper = document.querySelectorAll(".earths_voice_swiper_box");

  earthsVoiceSwiper.forEach((el) => {
    el.onclick = () => {
      earthsVoiceSwiper.forEach((el) => el.classList.remove("active"));
      el.classList.add("active");
    };
  });

  // 지구수비대

  // 스와이퍼 ex
  var swiper = new Swiper(".earths_protector_swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true, // ✅ 가운데 정렬
    slidesPerView: 2, // ✅ 3장만 보이게
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 2.5,
      slideShadows: true,
    },
    loop: true, // 무한 반복
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
