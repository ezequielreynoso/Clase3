// a) Dado un objeto con propiedades de una persona, usa destructuring para extraer el nombre y la edad en variables separadas.
const persona = {
    nombre: "Ezequiel",
    edad: 22,
    ciudad: "La Plata"
};

const { nombre, edad } = persona;

console.log("a)");
console.log(nombre);
console.log(edad);


// b) Utiliza destructuring en una función para extraer las propiedades de un objeto pasado como argumento.
function mostrarPersona({ nombre, edad, ciudad }) {
    console.log("b)");
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Ciudad: ${ciudad}`);
}

const persona2 = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Buenos Aires"
};

mostrarPersona(persona2);


// c) Dado un array con información de una ciudad (nombre, país, población), usa destructuring para asignar cada elemento a una variable.
const ciudad = ["La Plata", "Argentina", 800000];

const [nombreCiudad, pais, poblacion] = ciudad;

console.log("c)");
console.log(nombreCiudad);
console.log(pais);
console.log(poblacion);