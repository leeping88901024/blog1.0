import hasTouch from './utils/hasTouch';

class App {
  constructor() {
    this.demos = document.querySelectorAll('.frame__demo');

    this.isMobile = hasTouch();
  }

  onHide(hideMethod) {
    this.demos.forEach((demo) => {
      demo.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('.frame__demo--current')) return;
        hideMethod(() => {
          window.location = e.target.href;
        });
      });
    });
  }
}

export default new App();