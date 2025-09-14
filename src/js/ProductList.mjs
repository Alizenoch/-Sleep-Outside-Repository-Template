function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="product_pages/${product.Id}">
      <h2 class="card__brand">${product.Brand}</h2>
      <h3 class="card__name">${product.Name}</h3>
      <p class="product-card__price">$${product.Pricing.Price}</p>
    </a>
  </li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    const filtered = list.filter(p => p.SidewalkName === this.category);
    this.renderList(filtered);
  }

  renderList(products) {
    this.listElement.innerHTML = products.map(productCardTemplate).join('');
  }
}
