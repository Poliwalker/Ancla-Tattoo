const categories = document.querySelector('.categories-container');
const listaCategorias = document.querySelectorAll('.category');
const cardContainer = document.querySelector('.card-container');
const btnVerMas = document.querySelector('.btn-ver-mas');
const cartIcon = document.querySelector('.fa-cart-shopping');
const barsIcon = document.querySelector('.fa-bars');
const navbarList = document.querySelector('.navbar-list');
const cartContainer = document.querySelector('.cart-market');
const cartRenderInsumos = document.querySelector('.product-cart-container');
const overlay = document.querySelector('.overlay');
const total = document.querySelector('.total-cart');
const deleteBuy = document.querySelector('.delete-buy');
const finishBtn = document.querySelector('.finish-buy');
const modal = document.querySelector('.modal');

// local storage //
console.log(navbarList);
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const SaveLocalStorage = (cartList) => {
	localStorage.setItem('cart', JSON.stringify(cartList));
};

// renderizado de los productos al contenedor de productos //

const renderInsumo = (insumo) => {
	const { id, name, description, price, category, img } = insumo;
	return `
    <div class="card">
        <div class="card-img">
            <img src="${img}" alt="">
        </div>
        <div class="card-data">
            <h3 class="card-title">${name}</h3>
            <p class="card-p">${description}</p>
        </div>
        <div class="card-price-add">
            <span class="price">${price}$</span>
            <button class="add-cart" data-id='${id}'
            data-name='${name}'
            data-price='${price}'
            data-img='${img}'
            data-category='${category}'
            >Agregar</button>
        </div>
    </div>
    `;
};

const renderError = () => {
	return `La categoria seleccionada se encuentra sin stock`;
};

const sinStock = () => {
	if (insumos.filter((insumo) => insumo.stock === 0)) {
		cardContainer.innerHTML = renderError();
		return;
	}
};

const renderInsumos = (index = 0, category = undefined) => {
	if (!category) {
		renderdividedInsumos(index);
		return;
	}
	renderizadoInsumosFiltrados(category);
};

// logica filtrado - filtrado categorias//

const renderdividedInsumos = (index = 0) => {
	cardContainer.innerHTML += controlInsumos.dividedProduct[index]
		.map(renderInsumo)
		.join('');
};

const renderizadoInsumosFiltrados = (category) => {
	const insumosList = insumos.filter((insumo) => insumo.category === category);

	cardContainer.innerHTML = insumosList.map(renderInsumo).join('');
};

const printBtnForCategory = (categoriaSeleccionada) => {
	const categories = [...listaCategorias];
	categories.forEach((categoryBtn) => {
		if (categoryBtn.dataset.category !== categoriaSeleccionada) {
			categoryBtn.classList.remove('activo');
			return;
		}
		categoryBtn.classList.add('activo');
	});
};

const cambioEstadoBtnMas = (category) => {
	if (!category) {
		btnVerMas.classList.remove('hidden');
		return;
	}
	btnVerMas.classList.add('hidden');
};

const cambioEstadoFiltro = (e) => {
	const categoriaSeleccionada = e.target.dataset.category;
	printBtnForCategory(categoriaSeleccionada);
	cambioEstadoBtnMas(categoriaSeleccionada);
};
const funcionAplicacionFiltro = (e) => {
	if (!e.target.classList.contains('category')) return;
	cambioEstadoFiltro(e);
	if (!e.target.dataset.category) {
		cardContainer.innerHTML = '';
		renderInsumos();
	} else {
		renderInsumos(0, e.target.dataset.category);
		controlInsumos.nextProductsIndex = 1;
	}
};

const isTheLast = () =>
	controlInsumos.nextProductsIndex === controlInsumos.productLimit;

const mostrarMasProductos = () => {
	renderInsumos(controlInsumos.nextProductsIndex);
	controlInsumos.nextProductsIndex++;
	if (isTheLast()) {
		btnVerMas.classList.add('hidden');
	}
};

// toggle //

const openNavbar = () => {
	navbarList.classList.toggle('open-bars');
	if (cartContainer.classList.contains('open-cart')) {
		cartContainer.classList.remove('open-cart');
		return;
	}
	overlay.classList.toggle('show-overlay');
};

const ToggleCart = () => {
	cartContainer.classList.toggle('open-cart');
	if (navbarList.classList.contains('open-bars')) {
		navbarList.classList.remove('open-bars');
		return;
	}
	overlay.classList.toggle('show-overlay');
};

const closeScroll = () => {
	if (
		!navbarList.classList.contains('open-bars') &&
		!cartContainer.classList.contains('open-cart')
	)
		return;

	navbarList.classList.remove('open-bars');
	cartContainer.classList.remove('open-cart');
	overlay.classList.remove('show-overlay');
};

const closeMenu = (e) => {
	if (!e.target.classList.contains('item-list')) return;
	navbarList.classList.remove('open-bars');
	overlay.classList.remove('show-overlay');
};

const closeOverlay = () => {
	navbarList.classList.remove('open-bars');
	overlay.classList.remove('show-overlay');
	cartContainer.classList.remove('open-cart');
};
// Carrito //

const renderInsumoCart = (insumo) => {
	const { img, name, price, quantity, id } = insumo;
	return `
	
	<div class="insumo-cart">
	<div class="description-cart">
	<img class="img-cart" src="${img}" alt="${name}">
	<div class="description">
	<h4 class="title-product-cart">${name}</h4>
		<div class="price-and-quantity">
			<span class="price-art-cart">${price}</span>
			<div class="quantity">
				<button class="sustract-and-rest down" data-id='${id}'>-</button>
				<span class="quantity-insumo">${quantity}</span>
				<button class="sustract-and-rest up" data-id='${id}'>+</button>
			</div>
		</div>
	</div>
	</div>


	`;
};

const addInsumoCart = () => {
	if (!cart.length) {
		cartRenderInsumos.innerHTML = `<p class="empty">No hay insumos cargados al carrito</p>`;
		return;
	}
	cartRenderInsumos.innerHTML = cart.map(renderInsumoCart).join('');
};

const cartTotal = () => {
	return cart.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0);
};

const showTotal = () => {
	total.innerHTML = `${cartTotal().toFixed(2)} $`;
};

const disableButtons = (btn) => {
	if (!cart.length) {
		btn.classList.add('disabled');
	} else {
		btn.classList.remove('disabled');
	}
};

const createInsumoData = (id, name, price, img) => {
	return { id, name, price, img };
};

const existingInsumoCart = (insumo) => {
	return cart.find((item) => item.id === insumo.id);
};

const addUnitToInsumo = (insumo) => {
	cart = cart.map((cartInsumo) => {
		return cartInsumo.id === insumo.id
			? { ...cartInsumo, quantity: cartInsumo.quantity + 1 }
			: cartInsumo;
	});
};

const createCartInsumo = (insumo) => {
	cart = [...cart, { ...insumo, quantity: 1 }];
};

const showModal = (msg) => {
	modal.classList.add('active-modal');
	modal.textContent = msg;
	setTimeout(() => {
		modal.classList.remove('active-modal');
	}, 2000);
};

const checkCartState = () => {
	SaveLocalStorage(cart);
	addInsumoCart(cart);
	showTotal(cart);
	disableButtons(deleteBuy);
	disableButtons(finishBtn);
};

const addInsumo = (e) => {
	if (!e.target.classList.contains('add-cart')) return;
	const { id, name, price, img } = e.target.dataset;
	const insumo = createInsumoData(id, name, price, img);

	if (existingInsumoCart(insumo)) {
		addUnitToInsumo(insumo);
		showModal('SE AÑADIO UN PRODUCTO AL CARRITO');
	} else {
		createCartInsumo(insumo);
		showModal('Se agrego un producto al carrito');
	}
	checkCartState();
};

// añadir y sacar productos desde el carrito //

const removeInsumoFromCart = (existingInsumo) => {
	cart = cart.filter((insumo) => insumo.id !== existingInsumo.id);
	checkCartState();
};

const removeInsumoUnit = (existingInsumo) => {
	cart = cart.map((insumo) => {
		return insumo.id === existingInsumo.id
			? { ...insumo, quantity: Number(insumo.quantity - 1) }
			: insumo;
	});
};

const restInsumoBtn = (id) => {
	const existingCartInsumo = cart.find((item) => item.id === id);
	if (existingCartInsumo.quantity === 1) {
		if (window.confirm('desea eliminar el insumo del carrito')) {
			removeInsumoFromCart(existingCartInsumo);
		}
		return;
	}
	removeInsumoUnit(existingCartInsumo);
};

const addPlusBtnEvent = (id) => {
	const existingCartInsumo = cart.find((item) => item.id === id);
	addUnitToInsumo(existingCartInsumo);
};

const handleQuantity = (e) => {
	if (e.target.classList.contains('down')) {
		restInsumoBtn(e.target.dataset.id);
	} else if (e.target.classList.contains('up')) {
		addPlusBtnEvent(e.target.dataset.id);
	}

	checkCartState();
};

const resetCart = () => {
	cart = [];
	checkCartState();
};

const completeAction = (acceptMsg, sucessMsg) => {
	if (!cart.length) return;
	if (window.confirm(acceptMsg)) {
		resetCart();
		alert(sucessMsg);
	}
};

const completeBuy = () => {
	completeAction(
		'¿Desea finalizar su compra?',
		'Gracias por su compra, el Ancla Tatto los ama'
	);
};

const deleteCart = () => {
	completeAction(
		'¿Desea vaciar el carrito?',
		'Ya no hay productos en el carrito'
	);
};

// funcion iniciadora

const init = () => {
	renderInsumos();
	categories.addEventListener('click', funcionAplicacionFiltro);
	btnVerMas.addEventListener('click', mostrarMasProductos);
	cartIcon.addEventListener('click', ToggleCart);
	barsIcon.addEventListener('click', openNavbar);
	window.addEventListener('scroll', closeScroll);
	navbarList.addEventListener('click', closeMenu);
	overlay.addEventListener('click', closeOverlay);
	document.addEventListener('DOMContentLoaded', addInsumoCart);
	document.addEventListener('DOMContentLoaded', showTotal);
	cartRenderInsumos.addEventListener('click', handleQuantity);
	disableButtons(deleteBuy);
	disableButtons(finishBtn);
	cardContainer.addEventListener('click', addInsumo);
	finishBtn.addEventListener('click', completeBuy);
	deleteBuy.addEventListener('click', deleteCart);
};

init();
