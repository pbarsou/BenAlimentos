window.onload = () => {

  const productsContainer = document.getElementById("products-list");
  async function getProducts() {
    const response = await fetch("https://bendevoficial.com/api/mentoria/produtos").then(res => {
      return res.json();
    });
    console.log(response);
    response.map(produto => {
      productsContainer.innerHTML += `<a class="product-item" href="./produto.html?name=${produto.productName}">
                                        <img src="${produto.productImage}" alt="${produto.productName}"/>
                                        <div class="product-item-name">
                                        <h2>${produto.productName}</h2>                                       
                                        </div>
                                      </a>`
    });
  }

  getProducts();
}

