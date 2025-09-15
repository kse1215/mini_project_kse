window.addEventListener("load", () => {
  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);
  // Parallax Layers
  document
    .querySelectorAll("[data-parallax-layers]")
    .forEach((triggerElement) => {
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
          triggerElement.querySelectorAll(
            `[data-parallax-layer="${layerObj.layer}"]`
          ),
          {
            yPercent: layerObj.yPercent,
            ease: "none",
          },
          idx === 0 ? undefined : "<"
        );
      });
    });
  /* Lenis */
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {

      return arguments.length ? lenis.scrollTo(value) : lenis.scroll.instance.scroll;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };

    },
  });
  // 헤더메뉴 스크롤했을때 나오게하기
  const header = document.querySelector(".header");
  const hamburger = document.querySelector(".hamburger");
  const changePoint = document.querySelector("#slogan");

  window.addEventListener("scroll", () => {
    const sectionTop = changePoint.offsetTop - 50;
    if (window.scrollY >= sectionTop) {
      header.classList.add("scroll");
      hamburger.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
      hamburger.classList.remove("scroll");
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
});
