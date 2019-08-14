console.log('hello you ❤️');

document
  .querySelectorAll('.header__nav a')
  .map(i => i.classList.toggle('actif'));

document.querySelectorAll('.header__nav a')[0].classList.add('actif');
