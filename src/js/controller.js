import formView from './views/formView.js';
import navigationView from './views/navigationView.js';
import sliderView from './views/sliderView.js';
import footerView from './views/footerView.js';

const init = function () {
  navigationView.addHandlerClick();

  formView.addHandlerClick();
  formView.addHandlerSubmit();
  formView.addHandlerKeydown();

  sliderView.addHandlerClick();
  sliderView.createDots();
  sliderView.goToSlide(3);
  sliderView.activateDot(3);
  sliderView.increaseSizeCurSlide(3);

  footerView.addHandlerClick();
  footerView.insertCopyright();
};

init();
