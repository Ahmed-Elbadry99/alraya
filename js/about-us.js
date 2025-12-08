//! =========================================== AboutUs ===========================================
// Numbers Counter
const nums = document.querySelectorAll(".numberData");
const section = document.querySelector(".numbers");
let started = false;

function startCount(el) {
  let goal = +el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

window.addEventListener("scroll", () => {
  // اتأكدي إن السيكشن متعرف وموجود
  if (!section) return;

  // لو السيكشن دخل الشاشة
  if (window.scrollY >= section.offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => startCount(num));
      started = true; // مهم يتحط جوه نفس الشرط
    }
  }
});

//! AOS library
AOS.init();

$(".workTeam-carousel").owlCarousel({
  loop: true,
  margin: 20,
  // autoplay: true,
  autoplayTimeout: 2500,
  autoplaySpeed: 2500,
  dots: true,
  nav: false,
  rtl: true,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    1200: { items: 3 },
  },
});
