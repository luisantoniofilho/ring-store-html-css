// Selecting elements
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const mobileNavLinks = document.querySelectorAll(".main-nav-link");
const meetCollectionBtn = document.querySelector(".meet-collection-btn");
const buyBtn = document.querySelectorAll(".best-btn-buy");
const ctaSection = document.querySelector(".section-cta");

////////////////////////////////////////////
// Make mobile navigation work
function toggleMenu() {
  document.querySelector(".main-header").classList.toggle("nav-open");
}

// Open menu
openMenuBtn.addEventListener("click", toggleMenu);

// Close menu
closeMenuBtn.addEventListener("click", toggleMenu);

// CLose menu when mobile nav clicked
mobileNavLinks.forEach(function (link) {
  link.addEventListener("click", toggleMenu);
});

////////////////////////////////////////////
// Smooth navigation
const navLinks = document.querySelector(".main-nav-list");

navLinks.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("main-nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const goToCtaSection = () => ctaSection.scrollIntoView({ behavior: "smooth" });

meetCollectionBtn.addEventListener("click", (e) => {
  e.preventDefault();
  goToCtaSection();
});

buyBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    goToCtaSection();
  })
);
