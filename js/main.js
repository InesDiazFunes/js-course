// function Producto(titulo, color, precio){
//     this.titulo = titulo;
//     this.color = color;
//     this.precio = precio;
// }

// const producto1 = new Producto("Sillon", "Rojo", 50000);
// const producto2 = new Producto("Cama", "Blanco", 160000);

// console.log(producto2);

// class Producto {
//     constructor(titulo, color, precio) {
//         this.titulo = titulo;
//         this.color = color;
//         this.precio = precio;
//     }
// }

// const producto1 = new Producto("Silloncito", "Rojo", 5000);
// console.log(producto1);

// class Persona {
//     constructor(nombre, edad, nacionalidad) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.nacionalidad = nacionalidad;
//         this.saludar = function(){console.log("Hola, soy " + this.nombre)}
//     }
// }

// const persona1 = new Persona("Ine", 20, "Argentina");
// console.log(persona1);
// persona1.saludar();

// const array = [];

// const numeros = [1,2,3,4,5];
// const booleanos = [true, false, true];
// const mezcla = ["Sillon", 1 , 2, true];

// "Armario", "Escritorio", "Cama", "Puerta"

// const productos = ["Sillon", "Silla", "Mesa", "Ropero"];
// console.log(productos);
// console.log(productos[2]);
// for (let i = 0; i < 4 ; i++){
//     console.log(productos[i]);
// }
    
// for (let i = 0; i < productos.length ; i++){
//     console.log(productos[i]);
//         }
// console.log(productos.length);

// productos.push("Armario"); //(Agrear un elemento al final del Array)
// productos.unshift("Armario"); //(Agregar  un elemento al principio del Array)
// productos.shift(); //(Eliminar un elemento al principio del Array)
// productos.pop(); //(Eliminar un elemento al final del Array)
// productos.splice(1, 1); //(Eliminar cualquier elemento segun posicion en Array)
//console.log(productos.join(", ")); // (Generar una string con los elementos del Array)

// const producto2 = ["Puerta", "Ventana", "Cama"];
// const productoFinal = productos.concat(producto2); //(Unir dos Arrays)

//const productosComedor = productos.slice(0, 2); // (Generar una copia de parte del Array)

//console.log(productos.indexOf("Silla")); //Saber el numero de indice de nuestro elemento
// console.log(productos.includes("Espejo")); //(Saber si un elemento existe en nuestro Array) (Posiblemente mi fav hasta ahora)
// console.log(productos.reverse()); //(Invertir el orden de nuestro Array)
//productos.reverse(); console.log(productos.reverse()); (Se puede llamar como una funcion tambien)

// const productos = [
//     { nombre: "Mesa", precio:3000 },
//     { nombre: "Silla de Plástico", precio:3500 },
//     { nombre: "Silla de Madera", precio:2000 },
//     { nombre: "Ventana", precio:2500 },
//     { nombre: "Puerta", precio:4000 }
// ];

// const mascotas = ["Gato", "Perro", "Huron"];

// const amimales = [
//     { nombre: "Gato", color: "Naranja" },
//     { nombre: "Perro", color: "Negro" },
//     { nombre: "Ganzo", color: "Gris" },
//     { nombre: "Carpincho", color: "Marron" },
//     { nombre: "Gato", color: "Manchado" },
//     { nombre: "Raton", color: "Blanco" }
// ];

// console.log(productos);

// let productoElegido = prompt("Ingrese el producto que quiere comprar");

// console.log( productos.find( (producto) => producto.nombre === productoElegido ) ); //(Recorrer el Array y retornar el primer elemento que cumpla con una condicion)

// const sillas = productos.filter((producto) => producto.nombre.includes  ("Silla")); //HERMOSO POR FAVOR; ESTO ES HERMOSO 
// console.log(sillas);

// const nombres = productos.map((producto) => producto.nombre); // (Recorrer el Array y retornar un Array nuevo con los elementos llamados transformados del Array original)
// console.log(nombres);

// const preciosActualizados = productos.map((producto) => {
//     return{
//         nombre: producto.nombre,
//         precio: producto.precio *1.5
//     }
// })
// console.log(productos);
// console.log(preciosActualizados);










let nombre = prompt("Cree su usuario. Ingrese su nombre.");
let apellido = prompt("Ingrese su apellido.");
let email = prompt("Ingrese su email.");

const usuario = [
    { nombres: nombre },
    { apellidos: apellido },
    { emails: email }
];
 
console.log(usuario);

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
    
    




// console.log(productoFinal); //(Recorrer el Array y retornar el primer elemento que cumpla con una condicion)

