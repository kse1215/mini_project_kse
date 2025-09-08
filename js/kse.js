window.addEventListener("load", function () {
  // 지구의 목소리
  let earthsVoiceSwiper = document.querySelectorAll(".earths_voice_swiper_box");

  earthsVoiceSwiper.forEach((el) => {
    el.onclick = () => {
      earthsVoiceSwiper.forEach((el) => el.classList.remove("active"));
      el.classList.add("active");
    };
  });

  // 슬로건
  const images = document.querySelectorAll(".bg_img");
  const container = document.querySelector(".slogan_bg_imgs");
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  const placed = []; // 이미 배치된 좌표 저장

  images.forEach(img => {
    let valid = false;
    let x, y;

    const imgWidth = img.offsetWidth || 150;
    const imgHeight = img.offsetHeight || 150;

    let attempts = 0;
    const maxAttempts = 100; // 최대 100번까지 시도

    while (!valid && attempts < maxAttempts) {
      attempts++;

      // 랜덤 좌표 생성
      x = Math.random() * (containerWidth - imgWidth);
      y = Math.random() * (containerHeight - imgHeight);

      // 기존 이미지와 충돌 검사
      valid = true;
      for (let pos of placed) {
        const overlapX = !(x + imgWidth < pos.x || pos.x + pos.w < x);
        const overlapY = !(y + imgHeight < pos.y || pos.y + pos.h < y);

        if (overlapX && overlapY) {
          valid = false;
          break;
        }
      }
    }

    // 만약 100번 시도해도 못 찾으면 그냥 마지막 좌표로 강제 배치
    // (약간 겹칠 수 있음)
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    placed.push({ x, y, w: imgWidth, h: imgHeight });
  });
});
