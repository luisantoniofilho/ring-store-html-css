// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Function to close the mobile navigation
function closeMobileNavigation() {
  headerEl.classList.remove("nav-open");
}

// Select all links in the mobile navigation
const mobileNavLinks = document.querySelectorAll(".main-nav-link");

// Add click event to each link
mobileNavLinks.forEach(function (link) {
  link.addEventListener("click", closeMobileNavigation);
});
