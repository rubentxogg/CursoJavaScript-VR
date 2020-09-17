'use strict'

// Arrays, arreglos, matrices //

var nombre = "Víctor Robles";
var nombres = ["Víctor Robles", "Juan López", "Manolo García", "Alejandro Martín", 52, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

/*
var elemento = parseInt(prompt("Qué elemento del array quieres?", 0));

if(elemento >= nombres.length){
    alert("Introduce el número correcto menor que " + nombres.length);
}else{
    alert("El usuario seleccionado es: " + alert(nombres[elemento]));
}
*/

document.write("<h1>Lenguajes de programación de 2018</h1>");
document.write("<ul>");

/*
for(var i=0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}

lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+" - "+elemento+"</li>");
});
*/

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");

// Búsquedas
var precios = [10, 20, 50, 80, 12];

//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS"); 
var busqueda = precios.some(precio => precio < 10); 

console.log(busqueda);