const productos = [
    {
        id: "celular-01",
        titulo: "Xiaomi Redmi Note 12",
        imagen: "./img/xiaomiRedmiNote12.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celular"
        },
        precio: 150000
    },
    {
        id: "celular-02",
        titulo: "Xiaomi Redmi Note 11",
        imagen: "./img/xiaomiRedmiNote11.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celular"
        },
        precio: 150000
    },
    {
        id: "celular-03",
        titulo: "Xiaomi Redmi Note 10",
        imagen: "./img/xiaomiRedmiNote10.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celular"
        },
        precio: 150000
    },
    {
        id: "celular-04",
        titulo: "Xiaomi Redmi Note 9",
        imagen: "./img/xiaomiRedmiNote9.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celular"
        },
        precio: 150000
    },
    {
        id: "celular-05",
        titulo: "Apple Iphone 14",
        imagen: "./img/iphone14.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celular"
        },
        precio: 150000
    },
    {
        id: "celular-06",
        titulo: "Apple Iphone 13",
        imagen: "./img/iphone13.jpeg",
        categoria: {
            nombre: "Celulares",
            id: "celular"
        },
        precio: 150000
    },
    {
        id: "celular-07",
        titulo: "Apple Iphone 12",
        imagen: "./img/iphone12.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celular"
        },
        precio: 150000
    },
    {
        id: "celular-08",
        titulo: "Apple Iphone 11",
        imagen: "./img/iphone11.jpeg",
        categoria: {
            nombre: "Celulares",
            id: "celular"
        },
        precio: 150000
    },
    {
        id: "tv-01",
        titulo: "Samsung Neo QLED",
        imagen: "./img/samsungQLED.webp",
        categoria: {
            nombre: "TV",
            id: "tv"
        },
        precio: 150000
    },
    {
        id: "tv-02",
        titulo: "Samsung Crystal",
        imagen: "./img/samsungCrystal.webp",
        categoria: {
            nombre: "TV",
            id: "tv"
        },
        precio: 150000
    },
    {
        id: "speaker-01",
        titulo: "JBL Speaker",
        imagen: "./img/jblSpeaker.jpg",
        categoria: {
            nombre: "Speaker",
            id: "speaker"
        },
        precio: 150000
    },
    {
        id: "speaker-02",
        titulo: "Sony Speaker",
        imagen: "./img/sonySpeaker.webp",
        categoria: {
            nombre: "Speaker",
            id: "speaker"
        },
        precio: 150000
    },
    {
        id: "speaker-03",
        titulo: "Beat Speaker",
        imagen: "./img/beatSpeaker.jpeg",
        categoria: {
            nombre: "Speaker",
            id: "speaker"
        },
        precio: 150000
    }
];

const productWrapper = document.querySelector("#jsProducts");

function cargarProductos() {
    productos.forEach(product => {

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

    
}


cargarProductos();