/* Obteniendo el ul */
// 1ra forma var ul = document.getElementsByTagName('ul')[0];
// var ul = document.querySelector('ul');
// var ul = document.getElementsById('ul-di');
// var ul = document.getElementsByName('ul-name')[0];

var ul = document.querySelectorAll('ul')[0];
for (var i = 0; i < ul.children.length;i++) {
  console.log(ul.children[i].textContent);
}

var padre = ul.firstElementChild.parentElement;
var hijo = document.createElement('li');
hijo.textContent = 'item nuevo';
var hermano = padre.firstChild;
// padre.appendChild(hijo);
padre.insertBefore(hijo, hermano);

var hijonew = document.createElement('li');
hijonew.textContent = 'nuevo nuevo';
var hermanotwo = padre.children[3];
padre.insertBefore(hijonew, hermanotwo);
