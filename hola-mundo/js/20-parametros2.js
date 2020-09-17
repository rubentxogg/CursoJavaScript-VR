'use strict'

//Parámetros rest y spread

function listadoFrutas(fruta1,fruta2, ...resto_de_frutas){
    //console.log("Fruta 1: ", fruta1, "\nFruta 2: ", fruta2);
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas)
}

listadoFrutas("Naranja", "Manzana", "Sandía", "Pera", "Melón", "Coco");

var frutas = ["Naranja","Manzana"]
listadoFrutas( ...frutas, "Sandía", "Pera", "Melón", "Coco");