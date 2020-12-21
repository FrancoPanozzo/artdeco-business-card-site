// Functionality to open and close the navigation menu
const navToggleBtn = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

navToggleBtn.addEventListener('click', () => {
  const navIsFixed = Array.from(navbar.classList).includes('fixed');
  navbar.classList.toggle('active');
  if (!navIsFixed) {
    navbar.classList.add('fixed');
  }
  handleScroll();
});

const debounce = (fn) => {
  let frame;
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

// Fucntionality to fix the navbar when scrolled
const handleScroll = () => {
  // don't action if the navbar is on active state
  if (Array.from(navbar.classList).includes('active')) return;
  if (navbar.className)
    if (window.scrollY > 50) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
};

document.addEventListener('scroll', handleScroll, { passive: true });

// Observer method for fixing navbar
// const navbar = document.querySelector('.navbar');
// const sectionOne = document.querySelector('#about');

// const sectionOneOptions = {
//   rootMargin: '-200px 0px 0px 0px',
// };

// const sectionOneObserver = new IntersectionObserver(function (
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       navbar.classList.remove('fixed');
//     } else {
//       navbar.classList.add('fixed');
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

// Functionality to close the navbar when a nav link is clicked
const closeNavbar = (e) => {
  // Checks if an acnhor tag is clicked
  if (e.target.tagName.toLowerCase() !== 'a') return;
  navbar.classList.remove('active');
};

document.querySelector('.navbar ul').addEventListener('click', closeNavbar);
