// a) Dado un array de números, utiliza `filter()` para obtener un nuevo array solo con los números pares.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

console.log("a)", pares);


// b) Crea un array de objetos representando estudiantes con propiedades de nombre, edad y califi cación. Usa `map()` para obtener un nuevo array solo con los nombres y las edades de los estudiantes.
const estudiantes = [
    { nombre: "Ana", edad: 20, calificacion: 9 },
    { nombre: "Luis", edad: 22, calificacion: 8 },
    { nombre: "Sofía", edad: 21, calificacion: 10 }
];

const nombresYEdades = estudiantes.map(function(estudiante) {
    return {
        nombre: estudiante.nombre,
        edad: estudiante.edad
    };
});

console.log("b)", nombresYEdades);


// c) Dado el array de objetos con nombre y edad anterior, usamos find() para obtener la primera persona mayor de 25 años.
const personas = [
    { nombre: "Pedro", edad: 23 },
    { nombre: "María", edad: 27 },
    { nombre: "Juan", edad: 30 }
];

const mayorDe25 = personas.find(function(persona) {
    return persona.edad > 25;
});

console.log("c)", mayorDe25);


// d) Utiliza `reduce()` para calcular la suma de todos los números en un array.
const numeros2 = [10, 20, 30, 40];

const sumaTotal = numeros2.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

console.log("d)", sumaTotal);