'use strict';

////////////////////////////////////////////
// Selecting elements

// Navigation
const header = document.querySelector('.header');
const navLinks = document.querySelector('.header__nav-list');
const mobileNavLinks = document.querySelectorAll('.header__nav-link');
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const buyBtn = document.querySelectorAll('.btn-buy');

// Gallery section
const sliderEl = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const images = sliderEl.querySelectorAll('.gallery__ring-img');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

// CTA section
const ctaSection = document.querySelector('.section-cta');
const form = document.querySelector('.form');
const modalWindow = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__btn-close');
const overlay = document.querySelector('.overlay');

// FOOTER
const footer = document.querySelector('.footer');
const footerLinks = document.querySelectorAll('.footer__link');

const currentYear = new Date().getFullYear();
const copyright = `<p class="footer__copyright">Copyright &copy; ${currentYear} by Luis Antonio</p>`;
footer.insertAdjacentHTML('beforeend', copyright);

////////////////////////////////////////////
// Smooth navigation
navLinks.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.classList.contains('header__nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const goToCtaSection = function () {
  ctaSection.scrollIntoView({ behavior: 'smooth' });
};

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
  header.classList.toggle('nav-open');
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
// Form/Modal Window

// Clear form fields
function clearForm() {
  form.querySelector('#full-name').value = '';
  form.querySelector('#email').value = '';
  form.querySelector('#select-where').selectedIndex = 0; // Reinicia a seleção do dropdown
}

const openCloseModal = function () {
  modalWindow.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

document.addEventListener('keydown', function (e) {
  if (!modalWindow.classList.contains('hidden'))
    if (e.key === 'Escape') openCloseModal();
});

closeModalBtn.addEventListener('click', function () {
  openCloseModal();
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  openCloseModal();
  clearForm();
});

///////////////////////////////////////
// Slider
const slider = function () {
  let curSlide = 3;
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

  const increaseSizeCurSlide = function (curSlide) {
    images.forEach(img => img.classList.remove('current'));
    const slide = document.querySelector(`.slide--${curSlide + 1}`);
    slide.querySelector('.gallery__ring-img').classList.add('current');
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    updateSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    updateSlide(curSlide);
  };

  const updateSlide = function (slideNum) {
    goToSlide(slideNum);
    activateDot(slideNum);
    increaseSizeCurSlide(slideNum);
  };

  const init = function () {
    goToSlide(3);
    createDots();

    activateDot(3);
    increaseSizeCurSlide(3);
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
      goToSlide(+slide);
      activateDot(+slide);
      increaseSizeCurSlide(+slide);
      curSlide = +slide;
    }
  });

  sliderEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('gallery__ring-img')) {
      const slideEl = e.target;
      const slideValue = +slideEl.closest('.slide').classList[1].slice(7) - 1;
      curSlide = slideValue;
      updateSlide(slideValue);
    }
  });
};
slider();

// FOOTER LINKS
footer.addEventListener('click', function (e) {
  if (e.target.classList.contains('footer__link')) {
    e.preventDefault();

    const href = e.target.getAttribute('href');
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
});

console.log('All functions working!');
