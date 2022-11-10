const categories = document.querySelector('.categories-container');
const listaCategorias = document.querySelectorAll('.btn-category');
const cardContainer = document.querySelector('.card-container');
const btnVerMas = document.querySelector('.btn-ver-mas');
const cartIcon = document.querySelector('.fa-cart-shopping');
const cartContainer = document.querySelector('.cart-market');
// local storage //

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const SaveLocalStorage = (insumosList) => {
	localStorage.setItem(cart, JSON.stringify(insumosList));
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

const renderInsumos = (index = 0, category = undefined) => {
	if (!category) {
		renderdividedInsumos(index);
		return;
	}
};

// filtrado categorias //

const renderdividedInsumos = (index = 0) => {
	cardContainer.innerHTML =
		controlInsumos.dividedProduct[index].map(renderInsumo);
};

// funcion iniciadora

const init = () => {
	renderInsumos();
};

init();
