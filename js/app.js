// let loader = document.getElementById('preloader');
// window.addEventListener('load', function () {
//   loader.style.display = 'none';
// });

const modal = document.querySelector('.main-modalmm');
const previews = document.querySelectorAll('.main-image img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

previews.forEach((preview) => {
  preview.addEventListener('click', () => {
    modal.classList.add('open');
    original.classList.add('open');
    // Dynamic change text and image
    const originalSrc = preview.getAttribute('data-original');
    original.src = originalSrc;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('main-modalmm')) {
    modal.classList.remove('open');
    original.classList.remove('open');
  }
});

//////////////////// SCROLLING ANIMATION
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#features');

btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();

  section1.scrollIntoView({ behavior: 'smooth' });
});
