'use strict'

// Pruebas con Let y var
var numero = 40;
console.log(numero); //valor 40

// Prueba con var
if(true){
    var numero = 50;
    console.log(numero); //valor 50 
}

console.log(numero); //valor 50

// Prueba con let
var texto = "Curso JS victorroblesweb.es";
console.log(texto); // valor "

if(true){
    let texto = "Curso Laravel 5 victorroblesweb.es"
    console.log(texto);
}

console.log(texto);