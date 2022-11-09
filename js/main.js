let nombre = prompt("Cree su usuario. Ingrese su nombre.");
let apellido = prompt("Ingrese su apellido.");
let email = prompt("Ingrese su email.");

const usuario = [
    { nombres: nombre },
    { apellidos: apellido },
    { emails: email }
];
 
console.log(usuario);
alert("Hola " + nombre + " " + apellido + ". Disfrute de sus compras!");

const productos = [
    { articulos: "Celular Xiaomi", precio: 5000},
    { articulos: "Celular Samsung", precio: 5000 },
    { articulos: "Celular Apple", precio: 5000},
    { articulos: "TV Smart Xiaomi", precio: 5000},
    { articulos: "TV Smart Samsung", precio: 5000},
    { articulos: "TV Smart Apple", precio: 5000 }
];

let inicializar = true;
while (inicializar = true) {
    let productoElegido = prompt("En nuestra tienda tenemos Celulares y TV, ¿cual desea buscar? ¿'Celular' o 'TV'?");
    if (productoElegido == "Celular"){
        const celulares = productos.filter( (producto) => producto.articulos.includes ("Celular") );
        console.log(celulares);
    }else if (productoElegido == "TV"){
        const tvs = productos.filter( (producto) => producto.articulos.includes ("TV") );
        console.log(tvs);
    }  

    let finalizar = prompt("¿Desea seguir buscando? Escriba 'Si' o 'No'");

    if(finalizar == "No" || finalizar == "no"){
        break;
    }else{
        continue;
    }
}

let anuncio = prompt("Tenemos novedades! Nuevos productos llegando a la tienda... Para ver, escriba 'Ver'");

function Nuevo (titulo, precio){
    this.titulo = titulo;
    this.precio = precio;
}

const nuevoLanzamiento1 = new Nuevo("Aspiradora Xiaomi", 10000);
const nuevoLanzamiento2 = new Nuevo("Aspiradora Winco", 20000);
const nuevoLanzamiento3 = new Nuevo("Aspiradora Samsung", 30000);

if(anuncio == "Ver" || anuncio == "ver"){
    console.log(nuevoLanzamiento1, nuevoLanzamiento2, nuevoLanzamiento3);
}
    
    





