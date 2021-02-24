import template from '../hbs_files/template.hbs';
import menuJSON from '../json_files/menu.json';

const ulRef = document.querySelector('.js-menu');
const markup = template(menuJSON);
ulRef.insertAdjacentHTML('beforeend', markup);

console.log(menuJSON);
