//a) Crea un array con los nombres de cinco frutas. Añade una fruta al principio y otra al final usando métodos de array.

const frutas = ["Manzana", "banana", "pera", "naranja", "uva"];

frutas.unshift("kiwi");   // agrega al principio
frutas.push("mango");     // agrega al final

console.log(frutas);

//b) Dado un array de números del 1 al 5, crea otro array que contenga el doble de cada número usando un bucle `for`.


const numeros = [1, 2, 3 , 4, 5]
const dobles = [];

for (let index = 0; index < numeros.length; index++) {
    dobles.push(numeros[index] * 2);
}

//Recorremos el array original con for.
//En cada vuelta multiplicamos el número por 2.
//Guardamos el resultado en otro array con push().

console.log(dobles);

//c) Crea un array con tres colores. Luego, crea otro array con dos colores más. Combina ambos arrays en uno solo usando el método `concat()`.

const colores = ["Rojo","Verde","Azul"]
const colores2 = ["Amarillo", "Violeta"]

const coloresCombinados = colores1.concat(colores2);

console.log(coloresCombinados);

//concat() une dos o más arrays.
//Devuelve un array nuevo.
//No modifica los arrays originales.

//d) Dado un array de 6 elementos, eliminamos el primero y el último, y mostramos el resultado. ¿Qué método usamos para no modificar el array original?

const elementos = ["a", "b", "c", "d", "e", "f"];

const resultado = elementos.slice(1, elementos.length - 1); //va de 'b' a 'e'

console.log("Array original:", elementos);
console.log("Nuevo array:", resultado);

//slice() devuelve una copia de una parte del array.
//no modifica el array original.