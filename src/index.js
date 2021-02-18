import styles from './styles.css';

const inputChangingThemeRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const darkTheme = () => {
  bodyRef.classList.remove('light-theme');
  bodyRef.classList.add('dark-theme');
  localStorage.setItem('theme', JSON.stringify('dark-theme'));
};

const lightTheme = () => {
  bodyRef.classList.remove('dark-theme');
  bodyRef.classList.add('light-theme');
  localStorage.setItem('theme', JSON.stringify('light-theme'));
};

const savedTheme = () => {
  // bodyRef.classList.remove('dark-theme');
  bodyRef.classList.add(`${localStorage.getItem('theme')}`);
};

const changeTheme = event => {
  if (localStorage.getItem('theme')) {
    savedTheme();
  }

  if (event.type === 'click' && inputChangingThemeRef.checked) {
    darkTheme();
  }
  if (event.type === 'click' && !inputChangingThemeRef.checked) {
    lightTheme();
  }
};

inputChangingThemeRef.addEventListener('click', changeTheme);
