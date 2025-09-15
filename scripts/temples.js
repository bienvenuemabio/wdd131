const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

const lastmodified = document.querySelector("#lastModified");
alert(document.lastModified);
lastmodified.textContent = new Date(document.lastModified);
