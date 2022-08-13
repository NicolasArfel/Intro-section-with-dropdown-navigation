const app = {
  init: () => {
    app.toggleBurger();
  },

  toggleBurger: () => {
    const burger = document.querySelector('.navbar-burger');

    burger.addEventListener('click', () => {
      const navbar = document.querySelector('.navbar-menu');
      if (navbar.classList.contains('is-active')) {
        navbar.classList.remove('is-active');
        burger.classList.remove('is-active');
      } else {
        burger.classList.add('is-active');
        navbar.classList.add('is-active');
        navbar.style.boxShadow = '-50px 0px 0px 80px rgba(0,0,0,0.5)';
      }
    });
  },

};

app.init();
