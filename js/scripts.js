/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let nombreUsuario = prompt("Ingrese su nombre")

let apellidoUsuario = prompt("Ingrese su apellido")

let salida = nombreUsuario + " " + apellidoUsuario + " " + "ha ingresado"

alert(salida)

const listadoNotas = [5, 7, 3];

let sumadorDeNotas = 0;
for(let posicion = 0; posicion < 3; posicion++) { // 0 1 2

    sumadorDeNotas = sumadorDeNotas + listadoNotas[posicion];
    // sumadorDeNotas += sumadorDeNotas[posicion];
}

const promedio = sumadorDeNotas/3;
console.log(promedio); // 5 

if(promedio > 6) {
    console.log("Estas aprobado!! Aprobaste con un:" + promedio);
}else{
    console.log("No aprobaste, te sacaste un:" + promedio)
}

for (let i = 0; i < 10; i++) {
    alert(i);
} 

const producto = "Suculentas"

function agregarAlCarrito() {
    console.log("Agregaste el producto al carrito: " + producto);
}

agregarAlCarrito()
agregarAlCarrito()
agregarAlCarrito()
