let loader = document.getElementById('preloader');
window.addEventListener('load', function () {
  loader.style.display = 'none';
});

// Modal window
const modal = document.querySelector('.modalmm');
const previews = document.querySelectorAll('.image img');
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
  if (e.target.classList.contains('modalmm')) {
    modal.classList.remove('open');
    original.classList.remove('open');
  }
});

// ABOUT Page Animation

const hero = document.querySelector('.hero');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: '0%' }, { height: '90%', ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: '100%' },
    { width: '80%', ease: Power2.easeInOut }
  )

  // .fromTo(
  //   slider,
  //   1.2,
  //   { x: "-100%" },
  //   { x: "0%", ease: Power2.easeInOut },
  //   "-=1.2"
  // )
  .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
  // .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5');
