class NavigationView {
  // NAVIGATION
  _header = document.querySelector('.header');
  _navLinks = document.querySelector('.header__nav-list');
  _mobileNavLinks = document.querySelectorAll('.header__nav-link');
  _openMenuBtn = document.querySelector('.open-menu-btn');
  _closeMenuBtn = document.querySelector('.close-menu-btn');

  // CTA
  ctaSection = document.querySelector('.section-cta');
  buyBtn = document.querySelectorAll('.btn-buy');

  addHandlerClick() {
    // Open menu
    this._openMenuBtn.addEventListener('click', this.toggleMenu.bind(this));

    // Close menu
    this._closeMenuBtn.addEventListener('click', this.toggleMenu.bind(this));

    // Close menu when mobile nav clicked
    this._mobileNavLinks.forEach(link => {
      link.addEventListener('click', this.toggleMenu.bind(this));
    });

    this._navLinks.addEventListener('click', e => {
      e.preventDefault();

      if (e.target.classList.contains('header__nav-link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
      }
    });

    this.buyBtn.forEach(btn =>
      btn.addEventListener('click', e => {
        e.preventDefault();
        this.goToCtaSection();
      })
    );
  }

  // Activate mobile menu
  toggleMenu() {
    this._header.classList.toggle('nav-open');
    this._openMenuBtn.classList.toggle('hidden');
    this._closeMenuBtn.classList.toggle('hidden');
  }

  // Smooth navigation
  goToCtaSection() {
    this.ctaSection.scrollIntoView({ behavior: 'smooth' });
  }
}

export default new NavigationView();
