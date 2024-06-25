class FormView {
  _form = document.querySelector('.form');
  _modalWindow = document.querySelector('.modal');
  _overlay = document.querySelector('.modal__overlay');
  _closeModalBtn = document.querySelector('.modal__btn-close');

  addHandlerClick() {
    this._closeModalBtn.addEventListener('click', () => {
      this._openCloseModal();
    });
  }

  addHandlerSubmit() {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      this._clearForm();
      this._openCloseModal();
    });
  }

  addHandlerKeydown() {
    this._form.addEventListener('keydown', e => {
      if (
        !this._modalWindow.classList.contains('hidden') &&
        e.key === 'Escape'
      ) {
        this._openCloseModal();
      }
    });
  }

  // Clear form fields
  _clearForm() {
    this._form.querySelector('#full-name').value = '';
    this._form.querySelector('#email').value = '';
    this._form.querySelector('#select-where').selectedIndex = 0; // Reinicia a seleção do dropdown
  }

  // Toggle modal and overlay visibility
  _openCloseModal() {
    this._modalWindow.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }
}

export default new FormView();
