let productCart = localStorage.getItem("product-cart");
productCart = JSON.parse(productCart);

const containerEmptyCart = document.querySelector("#empty-cart");
const containerProducts = document.querySelector("#cart-products");
const containerActionsCart = document.querySelector("#cart-actions");
const containerBoughtCart = document.querySelector("#bought-cart");
let botonDelete = document.querySelectorAll(".product-cart-delete");
const botonEmpty = document.querySelector("#cart-action-empty")
const containerTotal = document.querySelector("#total");
const botonBuy = document.querySelector("#cart-action-buy");

function cargarProductos(){
    if (productCart && productCart.length > 0) {

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
                    <small>Price</small>
                    <p>$ ${producto.precio}</p>
                </div>
                <div class="product-cart-cost">
                    <small>Final Price</small>
                    <p>$ ${producto.precio * producto.cantidad}</p>
                </div>
                <button class="product-cart-delete" id="${producto.id}" ><i class="bi bi-trash-fill "></i> </button>
        `;
        
        containerProducts.append(div);
    
        })
    } else {
        containerEmptyCart.classList.remove("disabled");
        containerProducts.classList.add("disabled");
        containerActionsCart.classList.add("disabled");
        containerBoughtCart.classList.add("disabled");
    }
    
    updateBotonDelete();
    updateTotal();
}

cargarProductos();

function updateBotonDelete() {
    botonDelete = document.querySelectorAll(".product-cart-delete");

    botonDelete.forEach(boton => {
        boton.addEventListener("click", productDelete);
    });
}

function productDelete(e) {
    const idBoton = e.currentTarget.id;
    const index = productCart.findIndex(producto => producto.id === idBoton);
    
    productCart.splice(index, 1);
    cargarProductos();

    localStorage.setItem("product-cart", JSON.stringify( productCart) );
}

botonEmpty.addEventListener("click", vaciarCarrito);

// pruebas

function vaciarCarrito(){

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "This will empty your cart",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, empty it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
    
            productCart.length = 0;
    localStorage.setItem("product-cart", JSON.stringify(productCart));
    cargarProductos();

          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your cart is now empty.',
            'success'
          )
    
          
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your cart remains intact',
            'error'
          )
        }
      })
}

function updateTotal(){
    const totalCalulado = productCart.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalulado}`;
}

botonBuy.addEventListener("click", buyCart);
function buyCart(){
    productCart.length = 0;
    localStorage.setItem("product-cart", JSON.stringify(productCart));

    
    containerEmptyCart.classList.add("disabled");
    containerProducts.classList.add("disabled");
    containerActionsCart.classList.add("disabled");
    containerBoughtCart.classList.remove("disabled");
}

