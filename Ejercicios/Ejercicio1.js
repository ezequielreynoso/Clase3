//a) Declara una variable usando `let` para almacenar tu edad y otra 
// usando `const` para tu nombre. Luego, intenta reasignar valores 
// a ambas y explica qué sucede.

let edad = 30;
const nombre = "Ezequiel";

console.log("Edad inicial:", edad);
console.log("Nombre inicial:", nombre);

edad = 23; // esto se puede hacer porque let permite reasignar
//nombre = "Juan"; 
// //esto da error porque las const no se pueden reasignar
console.log("Edad nueva:", edad);

//Crea un bucle que incremente una variable declarada con `let`. 
// ¿Qué pasaría si la declaras con `const`?

let contador = 0;

for (let index = 0; index < 5; index++) {
    contador++;
}

//Si lo hago con const, da error porque no puede cambiar de valor

//c) Declara una constante que sea un objeto con tu información personal. Intenta modificar una propiedad del objeto. ¿Es esto posible? ¿Por qué?.

const persona = {
    nombre: "Ezequiel",
    edad: 30,
    ciudad: "La Plata"
};

console.log(persona);

persona.edad = 23; // sí se puede
persona.ciudad = "Buenos Aires"; // también

console.log(persona);

// persona = { nombre: "Juan", edad: 30, ciudad: "Córdoba" }; 
// esto da error porque const permite modificar el contenido interno del objeto pero no deja reasignar la variable completa

// d) Dentro de una función, declaramos una variable con var, otra con let y otra con const. Luego imprimimos sus valores dentro y fuera de un bloque {}. Observamos y explicamos los resultados

function probarVariables(){
    var varVariable = "Es var";
    let letVariable = "Es let";
    const constVariable = "Es const"

    if (true) {
        var varVariableBloque = "var dentro del bloque";
        let letVariableBloque = "let dentro del bloque";
        const constVariableBloque = "const dentro del bloque";

        console.log("Adentro del bloque:");
        console.log(varVariableBloque);
        console.log(letVariableBloque);
        console.log(constVariableBloque);
    }

    console.log("Fuera del bloque pero dentro de la función:");
    console.log(varVariableBloque); // funciona
    // console.log(letVariableBloque); // error
    // console.log(constVariableBloque); // error
}

//var tiene alcance de función y por eso funciona, pero let y const no

