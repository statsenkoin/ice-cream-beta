(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    homeMenuBtn: document.querySelector('[data-menu-home]'),
    aboutMenuBtn: document.querySelector('[data-menu-about]'),
    productsMenuBtn: document.querySelector('[data-menu-products]'),
    contactsMenuBtn: document.querySelector('[data-menu-contacts]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.homeMenuBtn.addEventListener('click', toggleModal);
  refs.aboutMenuBtn.addEventListener('click', toggleModal);
  refs.productsMenuBtn.addEventListener('click', toggleModal);
  refs.contactsMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();
