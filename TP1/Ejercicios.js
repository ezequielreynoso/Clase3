const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

//Parte 1: Acceso a elementos y recorrido de arrays
//1. Acceder a propiedades individuales: Mostrá en la consola el nombre del primer producto de la lista.

console.log("1)", productos[0].nombre);


//2. Recorrido con for...of: Usá un bucle for...of para mostrar en consola el nombre y el precio de cada producto. Formato sugerido: "Producto: Remera - Precio: $1500"

console.log("2)");
for (const producto of productos) {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}

//3. Recorrido con .forEach(): Repetí el ejercicio anterior, pero usando el método .forEach() en lugar del bucle tradicional.

console.log("3)");
productos.forEach(function(producto) {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});

//Parte 2: Métodos de transformación y filtrado
//4. Obtener solo los nombres con .map(): Creá un nuevo array que contenga únicamente los nombres de los productos. Mostralo en consola. Resultado esperado: ["Remera", "Pantalón", "Zapatillas", "Gorra", "Campera"]

const nombres = productos.map(function(producto) {
    return producto.nombre;
});
console.log("4)", nombres);

//5. Filtrar por categoría con .filter(): Creá un nuevo array que contenga solo los productos cuya categoría sea "Ropa". Mostrar en consola.

const productosRopa = productos.filter(function(producto) {
    return producto.categoria === "Ropa";
});
console.log("5)", productosRopa);

//6. Filtrar por precio con .filter(): Creá un array que contenga todos los productos cuyo precio sea mayor a $3000.

const productosMayoresA3000 = productos.filter(function(producto) {
    return producto.precio > 3000;
});
console.log("6)", productosMayoresA3000);

//7. Buscar un producto específico con .find(): Usá el método .find() para encontrar el objeto que tenga como nombre "Gorra". Mostralo completo en consola.

const gorra = productos.find(function(producto) {
    return producto.nombre === "Gorra";
});
console.log("7)", gorra);