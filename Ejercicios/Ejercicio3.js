//a) Crea un objeto que represente un libro con propiedades como título, autor y año. Accede a cada propiedad e imprimilas.

const libro = {
    titulo: "Harry Potter",
    autor: "JK Rowling",
    año: 1999
}

console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);
console.log("Año:", libro.año);

//b) Dado un objeto que representa una persona, añade una nueva propiedad "hobby" y modifi ca la propiedad "edad".

const persona = {
    nombre: "Ezequiel",
    edad: 30,
    ciudad: "La Plata"
}

persona.hobby = "leer";
persona.edad = 23;

console.log(persona);

//c) Crea un objeto que represente una calculadora con métodos para sumar, restar, multiplicar y dividir. Utiliza estos métodos con diferentes números.

const calculadora = {
    sumar: function(a, b){
        return a + b;
    },
    restar: function(a, b){
        return a - b;
    },
    multiplicar: function(a, b){
        return a * b;
    },
    dividir: function(a, b){
        return a / b;
    }
}

console.log("Suma:", calculadora.sumar(10, 5));
console.log("Resta:", calculadora.restar(10, 5));
console.log("Multiplicación:", calculadora.multiplicar(10, 5));
console.log("División:", calculadora.dividir(10, 5));

//d) Creamos un objeto con varias propiedades. Accedemos a una de ellas usando una variable con el nombre de la propiedad

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020
};

const propiedad = "marca";

console.log(auto[propiedad]);

//propiedad guarda el nombre de una propiedad del objeto
//y al hacer auto[propiedad] invoco a esa propiedad del auto
