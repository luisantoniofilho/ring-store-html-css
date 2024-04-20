'use strict';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Selecting elements
const navLinks = document.querySelector('.main-nav-list');
const mobileNavLinks = document.querySelectorAll('.main-nav-link');
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const meetCollectionBtn = document.querySelector('.meet-collection-btn');
const buyBtn = document.querySelectorAll('.best-btn-buy');
const ctaSection = document.querySelector('.section-cta');
const ctaForm = document.querySelector('.cta-form');
const modalWindow = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.btn-close-modal');
const overlay = document.querySelector('.overlay');

////////////////////////////////////////////
// Smooth navigation
navLinks.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.classList.contains('main-nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const goToCtaSection = function () {
  ctaSection.scrollIntoView({ behavior: 'smooth' });
};

meetCollectionBtn.addEventListener('click', e => {
  e.preventDefault();
  goToCtaSection();
});

buyBtn.forEach(btn =>
  btn.addEventListener('click', e => {
    e.preventDefault();
    goToCtaSection();
  })
);

////////////////////////////////////////////
// MENU

// Activate mobile menu
function toggleMenu() {
  document.querySelector('.main-header').classList.toggle('nav-open');
  openMenuBtn.classList.toggle('hidden');
  closeMenuBtn.classList.toggle('hidden');
}

// Open menu
openMenuBtn.addEventListener('click', toggleMenu);

// Close menu
closeMenuBtn.addEventListener('click', toggleMenu);

// CLose menu when mobile nav clicked
mobileNavLinks.forEach(function (link) {
  link.addEventListener('click', toggleMenu);
});

////////////////////////////////////////////
// Modal Window
const openCloseModal = function () {
  modalWindow.classList.toggle('hidden');
  // closeModalBtn.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

ctaForm.addEventListener('submit', function (e) {
  e.preventDefault();
  openCloseModal();
});

closeModalBtn.addEventListener('click', function () {
  openCloseModal();
});
