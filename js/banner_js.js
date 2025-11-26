(function() {
  const groupBanner = document.querySelector(".group-banner");
  let banners = document.querySelectorAll(".group-banner__banner");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  const firstClone = banners[0].cloneNode(true);
  const lastClone = banners[banners.length - 1].cloneNode(true);

  firstClone.id = "first-clone";
  lastClone.id = "last-clone";

  groupBanner.appendChild(firstClone);
  groupBanner.prepend(lastClone);

  banners = document.querySelectorAll(".group-banner__banner");
  const total = banners.length;
  let index = 1;

  function getBannerWidth() {
    return banners[index].clientWidth;
  }

  function setTranslate() {
    groupBanner.style.transform = `translateX(-${getBannerWidth() * index}px)`;
  }
  setTranslate();

  function nextBanner() {
    if (index >= total - 1) return;
    index++;
    groupBanner.style.transition = "transform 0.5s ease-in-out";
    setTranslate();
  }

  function prevBanner() {
    if (index <= 0) return;
    index--;  
    groupBanner.style.transition = "transform 0.5s ease-in-out";
    setTranslate();
  }

  groupBanner.addEventListener("transitionend", () => {
    if (banners[index].id === "first-clone") {
      groupBanner.style.transition = "none";
      index = 1;
      setTranslate();
    }
    if (banners[index].id === "last-clone") {
      groupBanner.style.transition = "none";
      index = total - 2;
      setTranslate();
    }
  });

  nextBtn.addEventListener("click", nextBanner);
  prevBtn.addEventListener("click", prevBanner);

  let autoSlide = setInterval(nextBanner, 4000);

  document.querySelector(".carousel-banner").addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
  });

  document.querySelector(".carousel-banner").addEventListener("mouseleave", () => {
    autoSlide = setInterval(nextBanner, 4000);
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      groupBanner.style.transition = "none";
      setTranslate();
    }, 200);
  });
})();