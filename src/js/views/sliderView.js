class SliderView {
  _dotContainer = document.querySelector('.dots');
  _sliderEl = document.querySelector('.slider');
  _slides = document.querySelectorAll('.slide');
  _images = this._sliderEl.querySelectorAll('.gallery__ring-img');
  _curSlide = 3;
  _maxSlide = this._slides.length;
  _btnLeft = document.querySelector('.slider__btn--left');
  _btnRight = document.querySelector('.slider__btn--right');

  addHandlerClick() {
    this._btnRight.addEventListener('click', this.nextSlide.bind(this));
    this._btnLeft.addEventListener('click', this.prevSlide.bind(this));

    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });

    this._dotContainer.addEventListener('click', e => {
      if (e.target.classList.contains('dots__dot')) {
        const slide = +e.target.dataset.slide;
        this.goToSlide(slide);
        this.activateDot(slide);
        this.increaseSizeCurSlide(slide);
        this.curSlide = slide;
      }
    });

    this._sliderEl.addEventListener('click', e => {
      if (e.target.classList.contains('gallery__ring-img')) {
        const slideEl = e.target.closest('.slide');
        const slideValue = +slideEl.classList[1].slice(7) - 1;
        this.curSlide = slideValue;
        this.updateSlide(slideValue);
      }
    });
  }

  createDots() {
    this._slides.forEach((_, i) => {
      this._dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  }

  activateDot(slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      ?.classList.add('dots__dot--active');
  }

  goToSlide(slide) {
    this._slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  }

  increaseSizeCurSlide(curSlide) {
    this._images.forEach(img => img.classList.remove('current'));
    const slide = document.querySelector(`.slide--${curSlide + 1}`);
    slide?.querySelector('.gallery__ring-img')?.classList.add('current');
  }

  nextSlide() {
    this.curSlide = (this.curSlide + 1) % this._maxSlide;
    this.updateSlide(this.curSlide);
  }

  prevSlide() {
    this.curSlide = (this.curSlide - 1 + this._maxSlide) % this._maxSlide;
    this.updateSlide(this.curSlide);
  }

  updateSlide(slideNum) {
    this.goToSlide(slideNum);
    this.activateDot(slideNum);
    this.increaseSizeCurSlide(slideNum);
  }
}

export default new SliderView();
