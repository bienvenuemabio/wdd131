const currentyear = document.getElementById('foot');
const today= new Date();
currentyear.textContent = today.getFullYear();
const modifdat = document.getElementById('dat');
modifdat.textContent = today;