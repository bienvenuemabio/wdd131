const currentyear = document.getElementById("currentyear"); // Get the span element
const today = new Date(); // Get the current date
currentyear.textContent = today.getFullYear();
//document.getElementById('currentyear').textContent = new Date().getFullYear();
 