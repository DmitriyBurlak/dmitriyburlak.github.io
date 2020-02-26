let man = document.querySelector('.man');
let social = document.querySelector('.social');
let header = document.querySelector('.header__inner');
let rus = document.querySelector('.main__rus').children;
let eng = document.querySelector('.main__eng').children;

let showLoad = () => {
  man.classList.add('show');
  social.classList.add('show');
  header.classList.add('show');
  for (var i = 0; i < eng.length; i++) eng[i].classList.add('show');
};
document.querySelector('.rus').addEventListener('click', () => {
  for (var i = 0; i < rus.length; i++) rus[i].classList.add('show');
  for (var i = 0; i < eng.length; i++) eng[i].classList.remove('show');
});
document.querySelector('.eng').addEventListener('click', () => {
  for (var i = 0; i < eng.length; i++) eng[i].classList.add('show');
  for (var i = 0; i < rus.length; i++) rus[i].classList.remove('show');
});

window.addEventListener('load', (e) => {
  showLoad();
})