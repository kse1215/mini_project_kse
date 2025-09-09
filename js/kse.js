window.addEventListener("load", function () {
  // 지구의 목소리
  let earthsVoiceSwiper = document.querySelectorAll(".earths_voice_swiper_box");

  earthsVoiceSwiper.forEach((el) => {
    el.onclick = () => {
      earthsVoiceSwiper.forEach((el) => el.classList.remove("active"));
      el.classList.add("active");
    };
  });
});
