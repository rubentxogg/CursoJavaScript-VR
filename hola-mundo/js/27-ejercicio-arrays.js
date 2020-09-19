'use strict'

/*
1. Pida 6 números por pantalla y los meta en un array.
2. Mostrar el array entero / todos sus elementos en el cuerpo de la página y en la consola.
3. Ordenarlo y mostrarlo.
4. Invertir su orden y mostrarlo.
5. Mostrar cuantos elementos tiene el array.
6. Búsqueda de un valor introducido por el usuario y que nos diga si está en el array y su índice.
    (se valorará el uso de funciones)
*/

//var numeros = new Array(6);

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    numeros.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}

//Pedir 6 números
var numeros = [];

for(var i=0; i<=5; i++){
    numeros[i] = parseInt(prompt("Introduce un número", 0));
    //numeros.push(parseInt(prompt("Introduce un número", 0)));
}

//Mostrar en el cuerpo de la página
mostrarArray(numeros);

//Mostrar el array en la consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, "ordenados");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros,"revertido");

//Cuantos elementos tiene un array

//Contar elementos
document.write("<h1>El array tiene: "+numeros.length+" elementos</h1>");

//Búsqueda
var busqueda = parseInt(prompt("Busca un número: ", 0));

var posicion = numeros.findIndex( numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<hr><h1>ENCONTRADO</h1>");
    document.write("<h1>Posición de la búsqueda: "+posicion+"</h1>");
}else{
    document.write("<hr>No encontrado");
}

