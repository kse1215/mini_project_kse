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
      slideShadows: false,
    },
    loop: true, // 무한 반복
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    // 반응형 설정
    breakpoints: {
      1920:{
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      390: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
  const link = this.document.querySelector(".event_link");
  link.addEventListener("click", () => {
    this.window.location.href = "event.html";
  });
});
