import template from '../hbs files/template.hbs';
import menuJSON from '../json files/menu.json';

const ulRef = document.querySelector('.js-menu');
const markup = template(menuJSON);
ulRef.insertAdjacentHTML('beforeend', markup);

console.log(menuJSON);
