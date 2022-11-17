const form = document.getElementById('form');
const userInput = document.getElementById('user');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const telInput = document.getElementById('tel');
const btnRegister = document.querySelector('.btn-register');
const btnMenu = document.querySelector('.fa-bars');
const navbarList = document.querySelector('.navbar-list');
const overlay = document.querySelector('.overlay');

// chequeos //

const checkUser = () => {
	let valid = false;
	const min = 4;
	const max = 20;

	const userValue = userInput.value.trim();

	if (!isEmpty(userValue)) {
		showError(userInput, 'El usuario es obligatorio');
	} else if (!isBetween(userValue.length, min, max)) {
		showError(
			userInput,
			`El nombre debe tener entre ${min} y ${max} caracteres`
		);
	} else {
		showSuccess(userInput);
		valid = true;
	}
	return valid;
};

const checkemail = () => {
	let valid = false;
	const emailValue = emailInput.value.trim();

	if (!isEmpty(emailValue)) {
		showError(emailInput, 'El email no puede estar vacío');
	} else if (!isEmailValid(emailValue)) {
		showError(emailInput, 'el email no es valido');
	} else {
		showSuccess(emailInput);
		valid = true;
	}
	return valid;
};

const checkPass = () => {
	let valid = false;
	const passValue = passInput.value.trim();

	if (!isEmpty(passValue)) {
		showError(passInput, 'La contraseña está vacía');
	} else if (!isPassSecure(passValue)) {
		showError(passInput, 'La contraseña no cumple con los requisitos');
	} else {
		showSuccess(passInput);
		valid = true;
	}
	return valid;
};

const checkTel = () => {
	let valid = false;
	const telValue = telInput.value.trim();

	if (!isEmpty(telValue)) {
		showError(telInput, 'No escribió su teléfono');
	} else if (!isPhoneValid(telValue)) {
		showError(telInput, 'El telefono ingresado no es valido');
	} else {
		showSuccess(telInput);
		valid = true;
	}
	return valid;
};
//Validaciones //
const isEmailValid = (email) => {
	const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	//   Testear
	return re.test(email);
};

const isPassSecure = (pass) => {
	const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
	//   testeamos
	return re.test(pass);
};

const isPhoneValid = (phone) => {
	const re = /^[0-9]{10}$/;
	// testeamos
	return re.test(phone);
};

//Funcion que verifica un input si está vacío o no //
const isEmpty = (value) => (value === '' ? false : true);
//Funcion que verifica el min y el max //
const isBetween = (length, min, max) =>
	length < min || length > max ? false : true;

//Mostrar error y Success //

const showError = (input, message) => {
	const formField = input.parentElement;
	formField.classList.remove('success');
	formField.classList.add('error');
	const error = formField.querySelector('p');
	error.textContent = message;
};

const showSuccess = (input) => {
	const formField = input.parentElement;
	formField.classList.remove('error');
	formField.classList.add('success');
	const error = formField.querySelector('p');
	error.textContent = '';
};

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

// funcion iniciadora //

const init = () => {
	btnMenu.addEventListener('click', openNavbar);
	window.addEventListener('scroll', closeScroll);
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		let isUserValid = checkUser();
		let isEmailValid = checkemail();
		let isPassSecure = checkPass();
		let isPhoneValid = checkTel();

		let isFormValid =
			isUserValid && isEmailValid && isPassSecure && isPhoneValid;

		if (isFormValid) {
			alert('Su usuario ha sido creado correctamente');
			form.submit();
		}
	});
};

init();
