// a) Crea una función que reciba un número indefinido de argumentos y devuelva la suma de todos ellos usando el spread operator.
function sumarTodos(...numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma;
}

console.log("a)", sumarTodos(1, 2, 3));
console.log("a)", sumarTodos(10, 20, 30, 40));


// b) Dado un array de números, usa el spread operator para encontrar el número máximo.
const numeros = [4, 9, 2, 15, 7];
const maximo = Math.max(...numeros);

console.log("b)", maximo);


// c) Combina dos objetos en uno solo utilizando el spread operator.
const persona = {
    nombre: "Ezequiel",
    edad: 22
};

const datosExtra = {
    ciudad: "La Plata",
    profesion: "Estudiante"
};

const personaCompleta = {
    ...persona,
    ...datosExtra
};

console.log("c)", personaCompleta);


// d) Tenemos un array con subarrays (por ejemplo: [1, [2, 3], [4]]). Usamos el spread operator para combinar todo en un solo array plano.(tip: no alcanza solo con spread)
const datos = [1, [2, 3], [4]];
const plano = [].concat(...datos);

console.log("d)", plano);