const input = document.querySelector('input');
const pageAll = document.querySelector('body');

const toggleThemeMode = () => {
	pageAll.classList.toggle('dark');
};

input.onchange = toggleThemeMode;
