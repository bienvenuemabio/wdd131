const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

const lastmodified = document.querySelector("#lastModified");
alert(document.lastModified);
lastmodified.textContent = new Date(document.lastModified);

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});