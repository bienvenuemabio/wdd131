const input = Document.querySelector('favchap');
const button = document.querySelector('button');
const list = document.querySelector('_______');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);