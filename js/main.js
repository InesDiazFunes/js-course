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


let usuario = prompt("Cree su usuario. Ingrese su nnombre.");
console.log(usuario);