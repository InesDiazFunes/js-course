const productCart = JSON.parse(localStorage.getItem("product-cart"));

const containerEmptyCart = document.querySelector("#empty-cart");
const containerProducts = document.querySelector("#cart-products");
const containerActionsCart = document.querySelector("#cart-actions");
const containerBoughtCart = document.querySelector("#bought-cart");


if (productCart) {
    containerEmptyCart.classList.add("disabled");
    containerProducts.classList.remove("disabled");
    containerActionsCart.classList.remove("disabled");
    containerBoughtCart.classList.add("disabled");

    containerProducts.innerHTML = "";

    productCart.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("product-cart");
        div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.titulo}" class="product-cart-img">
            <div class="product-cart-title">
                <small>Title</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="product-cart-amount">
                <small>Amount</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="product-cart-price">
                <small></small>
                <p>${producto.precio}</p>
            </div>
            <div class="product-cart-cost">
                <small>Final Price</small>
                <p>${producto.precio * producto.cantidad}</p>
            </div>
            <button class="product-cart-delete" id="${producto.id}>
                <i class="bi bi-trash-fill "></i>
                </button>
    `;
    
    containerProducts.append(div);

    })
}else{

}