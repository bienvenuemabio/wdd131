const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const last = document.querySelector("#last");
last.textContent = new Date();

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});