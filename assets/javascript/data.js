const insumos = [
	// Agujas //
	{
		id: 1,
		name: 'agujas n°1',
		price: 500,
		category: 'agujas',
		img: 'https://image.made-in-china.com/155f0j00haUfoGwsASkm/Hot-Selling-Disposable-Tattoo-Supplies-Tattoo-Needle.jpg',
		stock: 54,
	},
	{
		id: 2,
		name: 'agujas n°2',
		price: 600,
		category: 'agujas',
		img: 'https://ae01.alicdn.com/kf/HLB12piwX0fvK1RjSspfq6zzXFXaO/500-Uds-desechables-agujas-para-tatuajes-tradicionales-mezcla-Needles1R-3R-Closing-3R-Loose-5R-5F-7F.jpg',
		stock: 54,
	},
	{
		id: 3,
		name: 'agujas n°3',
		price: 700,
		category: 'agujas',
		img: 'https://m.media-amazon.com/images/I/5175FX8sjOL._SL500_.jpg',
		stock: 54,
	},
	{
		id: 4,
		name: 'agujas n°4',
		price: 500,
		category: 'agujas',
		img: 'https://http2.mlstatic.com/D_NQ_NP_723427-MLA31029634981_062019-O.webp',
		stock: 65,
	},
	{
		id: 5,
		name: 'agujas n°5',
		price: 350,
		category: 'agujas',
		img: 'https://cdn.shopify.com/s/files/1/0636/4495/8979/products/3-4_jpg_0504a314-3108-4683-871a-d7254ae82c2d_533x.jpg?v=1648770979',
		stock: 54,
	},
	{
		id: 6,
		name: 'agujas n°6',
		price: 400,
		category: 'agujas',
		img: 'https://image.made-in-china.com/155f0j00haUfoGwsASkm/Hot-Selling-Disposable-Tattoo-Supplies-Tattoo-Needle.jpg',
		stock: 56,
	},
	{
		id: 7,
		name: 'agujas n°7',
		price: 850,
		category: 'agujas',
		img: 'https://cdn.shopify.com/s/files/1/0636/4495/8979/products/3-4_jpg_0504a314-3108-4683-871a-d7254ae82c2d_533x.jpg?v=1648770979',
		stock: 12,
	},
	// maquinas //
	{
		id: 8,
		name: 'maquina inalambrica',
		price: 60000,
		category: 'maquinas',
		img: 'https://aprenderatatuar.b-cdn.net/wp-content/uploads/2021/05/Solong-Maquina-tatuar-inalambrica-1001x1024.jpg',
		stock: 41,
	},
	{
		id: 9,
		name: 'maquina clasica',
		price: 25000,
		category: 'maquinas',
		img: 'https://ae01.alicdn.com/kf/HTB1RhsqMXXXXXXlXXXXq6xXFXXXX/Rotario-sigilo-m-quina-de-tatuaje-de-aluminio-giratorio-potente-y-constante-para-sombreador-y-delineador.jpg',
		stock: 41,
	},
	{
		id: 10,
		name: 'thunder machine',
		price: 70000,
		category: 'maquinas',
		img: 'https://cosasdetattoos.com/wp-content/uploads/2019/07/cheyenne-thunder.jpg',
		stock: 545,
	},
	{
		id: 11,
		name: 'maquina black',
		price: 30000,
		category: 'maquinas',
		img: 'https://images.squarespace-cdn.com/content/v1/5e2db6ff90968a1bd350e49e/1628200166744-3P84Y315SGZXOA2WHF7D/Untitled.png',
		stock: 4,
	},
	// pigmentos //
	{
		id: 12,
		name: 'pigmentos negros',
		price: 1500,
		category: 'colores',
		img: 'https://http2.mlstatic.com/D_NQ_NP_692217-MLA49655483652_042022-O.jpg',
		stock: 45,
	},
	{
		id: 13,
		name: 'colores fluo',
		price: 2000,
		category: 'colores',
		img: 'https://i0.wp.com/nubo.com.ve/icemanink/wp-content/uploads/sites/4/2019/04/tintas-uv.jpg',
		stock: 84,
	},
	{
		id: 14,
		name: 'pigmentos',
		price: 3500,
		category: 'colores',
		img: 'https://http2.mlstatic.com/D_NQ_NP_659004-MLA48299163406_112021-O.webp',
		stock: 54,
	},
	{
		id: 15,
		name: 'set pigmentos',
		price: 4000,
		category: 'colores',
		img: 'https://http2.mlstatic.com/D_NQ_NP_804760-MLA51602454543_092022-O.jpg',
		stock: 545,
	},
	{
		id: 16,
		name: 'pigmentos',
		price: 2000,
		category: 'colores',
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9yY0pRTsfuxiBuFtZnjNoVPT8bcywfLWYJGttcGyz8wWDXiYngykYQkIbQL057xxSqk&usqp=CAU',
		stock: 6,
	},
	{
		id: 17,
		name: 'pigmentos',
		price: 2200,
		category: 'colores',
		img: 'https://ae01.alicdn.com/kf/H8d5c33e023ec4839939f630ab7257706I.jpg',
		stock: 11,
	},
	{
		id: 18,
		name: 'pigmentos',
		price: 1200,
		category: 'colores',
		img: 'https://http2.mlstatic.com/D_NQ_NP_731128-MLM46965592918_082021-O.webp',
		stock: 54,
	},
	{
		id: 19,
		name: 'pigmentos',
		price: 1200,
		category: 'colores',
		img: 'https://m.media-amazon.com/images/I/61lOU9j1m-L._AC_SL1001_.jpg',
		stock: 555,
	},

	// higiene //
	{
		id: 20,
		name: 'Crema post tatuaje',
		price: 400,
		category: 'higiene',
		img: 'https://halconsupplies.com.ar/wp-content/uploads/2021/08/Crema-post-tattoo-black-lion.jpg',
		stock: 85,
	},
	{
		id: 21,
		name: 'locion post piercing',
		price: 600,
		category: 'higiene',
		img: '/assets/img/productos/locion-post-piercing.jpg',
		stock: 20,
	},

	//fuentes//
	{
		id: 22,
		name: 'Fuente Tatttoo Damhui',
		price: 15000,
		category: 'fuentes',
		img: 'https://http2.mlstatic.com/D_NQ_NP_797162-CBT50721367908_072022-O.jpg',
		stock: 15,
	},
	{
		id: 23,
		name: 'Fuente Compacta',
		price: 27000,
		category: 'fuentes',
		img: 'https://http2.mlstatic.com/D_NQ_NP_737593-MLA41661228431_052020-O.jpg',
		stock: 8,
	},
	{
		id: 24,
		name: 'Fuente Aurora - 2',
		price: 20000,
		category: 'fuentes',
		img: 'https://significadodetatuajes.net/wp-content/uploads/2020/02/fuente-de-alimentaci%C3%B3n-para-maquina-de-tatuar.jpg',
		stock: 20,
	},
	// kits //
	{
		id: 26,
		name: 'Kit tatuador',
		price: 45000,
		category: 'kits',
		img: 'https://m.media-amazon.com/images/I/510SPfFMPEL.jpg',
		stock: 0,
	},
];

const productDivider = (size) => {
	let divider = [];
	for (let i = 0; i < insumos.length; i += size) {
		divider.push(insumos.slice(i, i + size));
	}
	return divider; // array retornado, el array dividido en 6 productos por paginacion
};

const controlInsumos = {
	dividedProduct: productDivider(6), // en cuandos elementos vamos a dividir el array
	nextProductsIndex: 1, //Inicia en en el primer indice 1
	productLimit: productDivider(6).length, // el limite de la ultima paginacion
};
