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
const total = document.querySelector('.total');
const deleteBuy = document.querySelector('.delete-buy');
const finishBtn = document.querySelector('.finish-buy');

// local storage //
console.log(navbarList);
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const SaveLocalStorage = (cartList) => {
	localStorage.setItem(cart, JSON.stringify(cartList));
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
            >Agregar a Carrito</button>
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
	// cardContainer.addEventListener('click', addInsumoCart);
	// cartRenderInsumos.addEventListener('click', handleQuantity);
};

init();

renderInsumoCart = (insumo) => {
	const { img, name, price, quantity, id } = insumo;
	return `
	<div class="product-cart">
	<img class="img-cart" src="${img}" alt="${name}">
	<div class="description-cart">
		<h4 class="title-product-cart">${name}</h4>
		<div class="price-and-quantity">
			<span class="price-art-cart">${price}</span>
			<div class="quantity">
				<button class="sustract-and-rest up">${id}</button>
				<span class="quantity-insumo">${quantity}</span>
				<button class="sustract-and-rest">${id}</button>
			</div>
		</div>
	</div>

	`;
};
