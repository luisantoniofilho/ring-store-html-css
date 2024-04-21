'use strict';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Selecting elements
const navLinks = document.querySelector('.main-nav-list');
const mobileNavLinks = document.querySelectorAll('.main-nav-link');
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const meetCollectionBtn = document.querySelector('.meet-collection-btn');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
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

// Clear form fields

///////////////////////////////////////
// Slider
const slider = function () {
  let curSlide = 2;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(2);
    createDots();

    activateDot(2);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
