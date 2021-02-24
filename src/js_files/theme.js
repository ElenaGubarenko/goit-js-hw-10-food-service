const inputChangingThemeRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const checkboxRef = document.querySelector('#theme-switch-toggle');

const darkTheme = () => {
  bodyRef.classList.remove('light-theme');
  localStorage.setItem('theme', 'dark-theme');
  bodyRef.classList.add('dark-theme');
};

const lightTheme = () => {
  bodyRef.classList.remove('dark-theme');
  localStorage.setItem('theme', 'light-theme');
  bodyRef.classList.add('light-theme');
};

const savedTheme = () => {
  bodyRef.classList.add(`${localStorage.getItem('theme')}`);
  if (`${localStorage.getItem('theme')}` === 'dark-theme') {
    inputChangingThemeRef.checked = 'true';
  }
};
savedTheme();

const changeTheme = event => {
  if (inputChangingThemeRef.checked) {
    darkTheme();
  } else if (!inputChangingThemeRef.checked) {
    lightTheme();
  }
};

inputChangingThemeRef.addEventListener('change', changeTheme);
