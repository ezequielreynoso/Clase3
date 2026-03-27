// Usando template literals, crea una cadena que incluya variables para tu nombre, edad y profesión.
const nombre = "Ezequiel";
const edad = 22;
const profesion = "estudiante";

const presentacion = `Me llamo ${nombre}, tengo ${edad} años y soy ${profesion}.`;
console.log("a)", presentacion);

// Crea una función que reciba un precio y una cantidad, y devuelva una frase usando calculos. La frase es “El total es: [total]“
function calcularTotal(precio, cantidad) {
    const total = precio * cantidad;
    return `El total es: ${total}`;
}

console.log("b)", calcularTotal(100, 3));
console.log("b)", calcularTotal(250, 2));

// Utiliza template literals para crear un mensaje de error que incluya el nombre del error y su descripción.
const nombreError = "Error de conexión";
const descripcion = "No se pudo conectar al servidor";

const mensajeError = `Error: ${nombreError}. Descripción: ${descripcion}.`;
console.log("c)", mensajeError);