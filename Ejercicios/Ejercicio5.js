//a) Convierte la siguiente función tradicional a una arrow function:

const saludar = (nombre) => "Hola, " + nombre + "!";

//b) Crea una arrow function que reciba un número y devuelva su cuadrado.

const cuadrado = (numero) => numero * numero;

//c) Crea una arrow function que reciba dos números y devuelva el mayor de ellos.

const devolverMayor = (numero1, numero2) => (a > b ? a : b)

// d) Crea una arrow function que reciba un array y devuelva otro array con los elementos al cuadrado. Usamos map() adentro y la menor cantidad de codigo posible.

const cuadradosArray = (array) => array.map(numero => numero * numero);