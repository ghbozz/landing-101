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

const toggleModal = () => {
  const modal = document.querySelector('.modal')
  const close = document.querySelector('.modal-close')
  const projects = document.querySelectorAll('.project-card img')
  projects.forEach((card) => {
    card.addEventListener('click', (event) => {
      modal.classList.add('is-active')
    })
  })
  close.addEventListener('click', (event) => {
    modal.classList.remove('is-active')
  })
}

toggleModal();
initUpdateNavbarOnScroll();
