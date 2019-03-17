const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight - 200) {
        navbar.classList.remove('transparent-nav');
      } else {
        navbar.classList.add('transparent-nav');
      }
    });
  }
}

initUpdateNavbarOnScroll()
