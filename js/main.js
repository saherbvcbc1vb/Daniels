document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll
  const navbar = document.querySelector(".bg-nav");
  const homeSection = document.querySelector("#home");

  const updateNavbar = () => {
    const homeBottom = homeSection.offsetHeight;
    if (window.scrollY > homeBottom) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", updateNavbar);
  updateNavbar();

  // Typed.js
  var typed = new Typed(".hero-p", {
    strings: ["Larry Daniels ", "Developer", "Designer"],
    typeSpeed: 60,
    loop: true,
    loopCount: true,
    backSpeed: 60,
  });

  // Counters
  const counters = document.querySelectorAll(".card-text1");
  const duration = 3000;
  const options = { root: null, threshold: 0.5 };

  const startCount = (counter) => {
    const target = +counter.getAttribute("data-target");
    let start = 0;
    const increment = target / (duration / 16);
    const update = () => {
      start += increment;
      if (start >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = Math.ceil(start);
        requestAnimationFrame(update);
      }
    };
    update();
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => startCount(counter));
        observer.disconnect();
      }
    });
  }, options);

  const countSection = document.querySelector(".count");
  if (countSection) observer.observe(countSection);
});
