import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

const dataSource = new ProductData();
const listElement = document.querySelector('#product-list');
const tentList = new ProductList('Tents', dataSource, listElement);

tentList.init();
