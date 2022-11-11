const categories = document.querySelector('.categories-container');
const listaCategorias = document.querySelectorAll('.category');
const cardContainer = document.querySelector('.card-container');
const btnVerMas = document.querySelector('.btn-ver-mas');
const cartIcon = document.querySelector('.fa-cart-shopping');
const cartContainer = document.querySelector('.cart-market');
// local storage //

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
            <span class="price">${price}</span>
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

// filtrado categorias //

const renderdividedInsumos = (index = 0) => {
	cardContainer.innerHTML += controlInsumos.dividedProduct[index]
		.map(renderInsumo)
		.join('');
};

const renderizadoInsumosFiltrados = (category) => {
	const insumosList = insumos.filter((insumo) => insumo.category === category);

	cardContainer.innerHTML = insumosList.map(renderInsumo).join('');
};

// logica filtrado //

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

// funcion iniciadora

const init = () => {
	renderInsumos();
	categories.addEventListener('click', funcionAplicacionFiltro);
	btnVerMas.addEventListener('click', mostrarMasProductos);
};

init();
