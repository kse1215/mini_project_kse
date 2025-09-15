window.addEventListener("load", function () {
  // fixed 버튼
  const fixedBtn = this.document.querySelector(".fixed_btn");
  const goTopBtn = this.document.querySelector(".go_top_btn");
  this.window.addEventListener("scroll", () => {
    if (this.document.documentElement.scrollTop > 1845) {
      fixedBtn.classList.add("active");
    } else {
      fixedBtn.classList.remove("active");
    }
  });
  goTopBtn.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // 후원하기 따라다니기
  const camInner = document.querySelector(".cam_inner");
  const camSponsor = document.querySelector(".cam_sponsor");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const wrapTop = camInner.offsetTop;
    const wrapBottom = wrapTop + camInner.offsetHeight - camSponsor.offsetHeight;
    // 스크롤에 따른 새 top 위치
    let newTop = scrollY - wrapTop + 100;

    // 부모 영역 위/아래 벗어나지 않게 제한
    if (newTop < 100) newTop = 100;
    if (scrollY + 100 > wrapBottom) newTop = wrapBottom - wrapTop;

    camSponsor.style.top = newTop + "px";
  });

  // 후원하기 탭
  const camSponsorBtns = document.querySelectorAll(".cam__sponsor_btn");
  // tabs을 순서대로 반복되게
  camSponsorBtns.forEach((sponsorbtn, index) => {
    // tab을 "클릭"했을때
    sponsorbtn.addEventListener("click", () => {
      // tabs에 있는 class를 다 지우고
      camSponsorBtns.forEach((t) => {
        t.classList.remove("active");
      });
      // 클릭한 tab에만 class를 더해라
      sponsorbtn.classList.add("active");
    });
  });

  // 스토리 안내사항 탭
  const camWrapBtns = this.document.querySelectorAll(".cam_wrap_btn");
  const tabContents = this.document.querySelectorAll(".cam_content");
  // tabs을 순서대로 반복되게
  camWrapBtns.forEach((wrapbtn, index) => {
    // tab을 "클릭"했을때
    wrapbtn.addEventListener("click", () => {
      // tabs에 있는 class를 다 지우고
      camWrapBtns.forEach((t) => {
        t.classList.remove("active");
      });
      // 클릭한 tab에만 class를 더해라
      wrapbtn.classList.add("active");

      // tabContents에 있는 class를 다지우고
      tabContents.forEach((tc) => {
        tc.classList.remove("active");
      });
      // tabs와 같은 순서에 있는 tabContent에 class를 더해라
      tabContents[index].classList.add("active");
    });
  });
});
