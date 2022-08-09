function toggleBurger() {
  const burger = document.querySelector('.navbar-burger');

  burger.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-menu');
    if (navbar.classList.contains('is-active')) {
      navbar.classList.remove('is-active');
      burger.classList.remove('is-active');
    } else {
      burger.classList.add('is-active');
      navbar.classList.add('is-active');
    }
  });
}

toggleBurger();
