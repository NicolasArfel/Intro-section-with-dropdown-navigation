const app = {
  init: () => {
    app.toggleBurger();
  },

  toggleBurger: () => {
    const burger = document.querySelector('.navbar-burger');
    const main = document.querySelector('.main');
    const navbarItem = document.querySelector('.navbar-item');

    burger.addEventListener('click', () => {
      const navbar = document.querySelector('.navbar-menu');
      if (navbar.classList.contains('is-active')) {
        navbar.classList.remove('is-active');
        burger.classList.remove('is-active');
        main.style.opacity = '1';
        navbarItem.style.opacity = '1';
      } else {
        burger.classList.add('is-active');
        navbar.classList.add('is-active');
        main.style.opacity = '0.2';
        navbarItem.style.opacity = '0.2';
      }
    });
  },

};

app.init();
