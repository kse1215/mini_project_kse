window.addEventListener("load", () => {
  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);
  // Parallax Layers
  document.querySelectorAll("[data-parallax-layers]").forEach((triggerElement) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 0%",
        end: "100% 0%",
        scrub: 0,
      },
    });
    const layers = [
      { layer: "1", yPercent: 70 },
      { layer: "2", yPercent: -80 },
    ];
    layers.forEach((layerObj, idx) => {
      tl.to(
        triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
        {
          yPercent: layerObj.yPercent,
          ease: "none",
        },
        idx === 0 ? undefined : "<"
      );
    });
  });
  /* Lenis */
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // 헤더메뉴 스크롤했을때 나오게하기
  const header = document.querySelector(".header");
  const changePoint = 3240;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= changePoint) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });

  // 메뉴 클릭하면 해당 영역으로 스크롤
  const headerScrolls = document.querySelectorAll(".header_menu > li > a");
  const moScrolls = document.querySelectorAll(".mo_menu > li > a");
  headerScrolls.forEach((scroll) => {
    scroll.addEventListener("click", function (e) {
      e.preventDefault(); // 기본 이동 막기
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
  moScrolls.forEach((scroll) => {
    scroll.addEventListener("click", function (e) {
      e.preventDefault(); // 기본 이동 막기
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // 햄버거 클릭했을 때 모바일 메뉴 보이기
  const hamburger = document.querySelector(".hamburger");
  const moblieMenu = document.querySelector(".moblie_menu");
  const moClose = document.querySelector(".mo_close");
  hamburger.addEventListener("click", function () {
    if (!moblieMenu.classList.contains("active")) {
      moblieMenu.classList.add("active");
    }
  });
  moClose.addEventListener("click", function () {
    moblieMenu.classList.remove("active");
    const moMenus = document.querySelectorAll(".mo_menu > li > a");
    moMenus.forEach((momenu, index) => {
      if (momenu.classList.contains("active")) {
        momenu.classList.remove("active");
      }
    });
  });
  // 모바일 메뉴에서 마우스 아웃 했을 때 메뉴 사라지기
  moblieMenu.addEventListener("mouseleave", function () {
    moblieMenu.classList.remove("active");
    moMenus.forEach((momenu, index) => {
      if (momenu.classList.contains("active")) {
        momenu.classList.remove("active");
      }
    });
  });

  // 모바일 메뉴 클릭했을 때 클래스 더하기
  const moMenus = document.querySelectorAll(".mo_menu > li > a");
  moMenus.forEach((momenu, index) => {
    // tab을 "클릭"했을때
    momenu.addEventListener("click", () => {
      // tabs에 있는 class를 다 지우고
      moMenus.forEach((m) => {
        m.classList.remove("active");
      });
      // 클릭한 tab에만 class를 더해라
      momenu.classList.add("active");
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
  const camSponsorBtns = document.querySelectorAll(".cam_btn");
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
});
