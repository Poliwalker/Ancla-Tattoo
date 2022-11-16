const form = document.getElementById('form');
const userInput = document.getElementById('user');
const passInput = document.getElementById('password');
const btnRegister = document.querySelector('.btn-register');
const btnMenu = document.querySelector('.fa-bars');
const navbarList = document.querySelector('.navbar-list');
const overlay = document.querySelector('.overlay');

const checkUser = () => {
	let valid = false;
	const userName = userInput.value.trim();

	if (!isEmpty(userName)) {
		showError(userInput, 'No ha ingresado caracteres');
	} else {
		showSucces(userInput);
		valid = true;
	}
	return valid;
};

const checkPass = () => {
	let valid = false;
	const passValue = passInput.value.trim();

	if (!isEmpty(passValue)) {
		showError(passInput, 'La contraseña está vacia');
	} else {
		showSucces(passInput);
		valid = true;
	}
	return valid;
};

//Mostrar error y Success //

const showError = (input, message) => {
	const formField = input.parentElement;
	formField.classList.remove('success');
	formField.classList.add('error');
	const error = formField.querySelector('p');
	error.textContent = message;
};

const showSucces = (input) => {
	const formField = input.parentElement;
	formField.classList.remove('error');
	formField.classList.add('success');
	const error = formField.querySelector('p');
	error.textContent = '';
};

//Funcion que verifica un input si está vacío o no //
const isEmpty = (value) => (value === '' ? false : true);
//Funcion que verifica el min y el max //

//Toggle Menu //
const openNavbar = () => {
	navbarList.classList.toggle('open-bars');
	overlay.classList.toggle('show-overlay');
};

const closeScroll = () => {
	if (!navbarList.classList.contains('open-bars')) return;

	navbarList.classList.remove('open-bars');
	overlay.classList.remove('show-overlay');
};

const init = () => {
	btnMenu.addEventListener('click', openNavbar);
	window.addEventListener('scroll', closeScroll);
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		let isUserOk = checkUser();
		let isPassOk = checkPass();

		let validSesion = isUserOk && isPassOk;

		if (validSesion) {
			alert('se ha iniciado sesion correctamente');
			form.submit();
		}
	});
};

init();
