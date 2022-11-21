
const productos = [
    {
        id: "celular-01",
        titulo: "Xiaomi Redmi Note 12",
        imagen: "./img/xiaomiRedmiNote12.jpg",
        categoria: {
            nombre: "Celulares",
            id: "Phones"
        },
        precio: 150000
    },
    {
        id: "celular-02",
        titulo: "Xiaomi Redmi Note 11",
        imagen: "./img/xiaomiRedmiNote11.jpg",
        categoria: {
            nombre: "Celulares",
            id: "Phones"
        },
        precio: 150000
    },
    {
        id: "celular-03",
        titulo: "Xiaomi Redmi Note 10",
        imagen: "./img/xiaomiRedmiNote10.jpg",
        categoria: {
            nombre: "Celulares",
            id: "Phones"
        },
        precio: 150000
    },
    {
        id: "celular-04",
        titulo: "Xiaomi Redmi Note 9",
        imagen: "./img/xiaomiRedmiNote9.jpg",
        categoria: {
            nombre: "Celulares",
            id: "Phones"
        },
        precio: 150000
    },
    {
        id: "celular-05",
        titulo: "Apple Iphone 14",
        imagen: "./img/iphone14.jpg",
        categoria: {
            nombre: "Celulares",
            id: "Phones"
        },
        precio: 150000
    },
    {
        id: "celular-06",
        titulo: "Apple Iphone 13",
        imagen: "./img/iphone13.jpeg",
        categoria: {
            nombre: "Celulares",
            id: "Phones"
        },
        precio: 150000
    },
    {
        id: "celular-07",
        titulo: "Apple Iphone 12",
        imagen: "./img/iphone12.jpg",
        categoria: {
            nombre: "Celulares",
            id: "Phones"
        },
        precio: 150000
    },
    {
        id: "celular-08",
        titulo: "Apple Iphone 11",
        imagen: "./img/iphone11.jpeg",
        categoria: {
            nombre: "Celulares",
            id: "Phones"
        },
        precio: 150000
    },
    {
        id: "tv-01",
        titulo: "Samsung Neo QLED",
        imagen: "./img/samsungQLED.webp",
        categoria: {
            nombre: "TV",
            id: "Tv"
        },
        precio: 150000
    },
    {
        id: "tv-02",
        titulo: "Samsung Crystal",
        imagen: "./img/samsungCrystal.webp",
        categoria: {
            nombre: "TV",
            id: "Tv"
        },
        precio: 150000
    },
    {
        id: "speaker-01",
        titulo: "JBL Speaker",
        imagen: "./img/jblSpeaker.jpg",
        categoria: {
            nombre: "Speaker",
            id: "Speaker"
        },
        precio: 150000
    },
    {
        id: "speaker-02",
        titulo: "Sony Speaker",
        imagen: "./img/sonySpeaker.webp",
        categoria: {
            nombre: "Speaker",
            id: "Speaker"
        },
        precio: 150000
    },
    {
        id: "speaker-03",
        titulo: "Beat Speaker",
        imagen: "./img/beatSpeaker.jpeg",
        categoria: {
            nombre: "Speaker",
            id: "Speaker"
        },
        precio: 150000
    }
];

const productWrapper = document.querySelector("#jsProducts");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAdd = document.querySelectorAll(".product-add");
const numerito = document.querySelector("#cart-amount");

function cargarProductos(productosElegidos) {

    productWrapper.innerHTML = "";
    productosElegidos.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
        <img class="product-img" src="${product.imagen}" alt="${product.title}">
        <div class="product-details">
            <h3 class="product-title">${product.titulo}</h3>
            <p class="product-price">${product.precio}</p>
            <button class="product-add" id="${product.id}">Add</button>
        </div>
        `;
        productWrapper.append(div);
    })
    updateBotonAdd();

}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "All") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Home"
            cargarProductos(productos);
        }
    })
})

function updateBotonAdd(){
    botonesAdd = document.querySelectorAll(".product-add");

    botonesAdd.forEach(boton => {
        boton.addEventListener("click", agregarCarrito);
    });
}

let productCart;

const productCartLS = JSON.parse(localStorage.getItem("product-cart"));

if(productCartLS){
    productCart = productCartLS;
    updateNumerito();
} else {
    productCart = [];
}

function agregarCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productAdded = productos.find(producto => producto.id === idBoton);

    if (productCart.some(producto => producto.id === idBoton)) {
        const index = productCart.findIndex(producto => producto.id === idBoton);
        productCart[index].cantidad++;
    } else {
        productAdded.cantidad = 1;
        productCart.push(productAdded);
    }

    updateNumerito();

    localStorage.setItem("product-cart", JSON.stringify(productCart));
}

function updateNumerito(){
    let newNumerito = productCart.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = newNumerito;
}
