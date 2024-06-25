class FooterView {
  _footer = document.querySelector('.footer');
  _footerLinks = document.querySelectorAll('.footer__link');

  addHandlerClick() {
    this._footer.addEventListener('click', e => {
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
  }

  insertCopyright() {
    const currentYear = new Date().getFullYear();
    const copyright = `<p class="footer__copyright">Copyright &copy; ${currentYear} by Luis Antonio</p>`;
    this._footer.insertAdjacentHTML('beforeend', copyright);
  }
}

export default new FooterView();
