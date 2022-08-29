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
    sumadorDeNotas += sumadorDeNotas[posicion];
}

const promedio = sumadorDeNotas/3;
console.log(promedio); // 5 

if(promedio > 6) {
    console.log("Estas aprobado!! Aprobaste con un:" + promedio); // probando git
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


Ejercicio 1

const username = "Ana";
const password = "password";
const NUMERO = 1234;

const usernameLogin = prompt ("Ingrese el usuario")
const passwordLogin = prompt ("Ingrese el password")


if (usernameLogin === username && passwordLogin === password) {
    alert (username + Numero + password)
} else {
    alert ("401 Unathorized");
}

function cotizador (monto, plazo) {
    valor_cuotas = monto / plazo;
    let intereses;

    if (plazo == 12) {
        intereses = monto * 0.30 / plazo;
    } else if (plazo == 24) {
        intereses = monto * 0.40 / plazo;
    } else if (plazo == 48) {
        intereses = monto * 0.50 / plazo;
    } else if (plazo == 72) {
        intereses = monto * 0.80 / plazo;
    } else {
        console.log("El plazo no es correcto")
    }
    console.log("El monto que usted solicito es de ", monto);
    console.log("La cantidad de ciotas en las que va a devolver es de ", plazo);
    console.log("Su cuota pura es de ", valor_cuotas);
    console.log("Total con intereses (CFT) es ", valor_cuotas + intereses);
    
    let validacion = prompt ("Desea realizar la operacion? SI/NO")
    if (validacion == "SI" || validacion == "si"){
        alert("Su operecion se realizo con exito, a partir de ahora sos un deudor y tu alma es mia")
    } else {
        alert("Muchas gracias! Felicitaciones!")
    }
}

cotizador(
    parseInt(prompt("Ingrese el monto solicitado")),
    parseInt(prompt("Ingrese el plazo en el que quiere devolver lo solicitado. En 12, 24, 48 o 72 meses."))
);