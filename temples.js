const currentyear = document.getElementById('foot');
const today= new Date();
currentyear.textContent = today.getFullYear();
const modifdat = document.getElementById('dat');
modifdat.textContent = today;


const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});