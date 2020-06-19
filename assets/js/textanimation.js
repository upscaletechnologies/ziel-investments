const url = require('url');
const anime = new url.URL('https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js').default;

export default function() {
  // Wrap every letter in a span
  const textWrapper = document.querySelector('.ml16');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime
    .timeline({ loop: true })
    .add({
      targets: '.ml16 .letter',
      translateY: [-100, 0],
      easing: 'easeOutExpo',
      duration: 1400,
      delay: (el, i) => 30 * i,
    })
    .add({
      targets: '.ml16',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1000,
    })
    .init();
}
