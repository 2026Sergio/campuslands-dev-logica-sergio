/**
 * Busca food trucks en una lista por nombre o especialidad.
 * La búsqueda no debe ser sensible a mayúsculas/minúsculas.
 *
 * @param {object[]} foodTrucks Un arreglo de objetos, donde cada objeto representa un food truck.
 * @param {string} terminoBusqueda El nombre o especialidad a buscar.
 * @returns {object[]} Un arreglo con los food trucks que coinciden con la búsqueda.
 */
function buscarFoodTruck(foodTrucks, terminoBusqueda) {
  // Si no hay término de búsqueda o la lista está vacía, devolver un arreglo vacío.
  if (!terminoBusqueda || foodTrucks.length === 0) {
    return [];
  }

  const terminoEnMinusculas = terminoBusqueda.toLowerCase();

  const resultados = foodTrucks.filter(truck => {
    const nombre = truck.nombre.toLowerCase();
    const especialidad = truck.especialidad.toLowerCase();

    // Devolver true si el término de búsqueda está incluido en el nombre o en la especialidad
    return nombre.includes(terminoEnMinusculas) || especialidad.includes(terminoEnMinusculas);
  });

  return resultados;
}

// --- Casos de prueba ---

const listaFoodTrucks = [
  { nombre: 'El Buen Sabor', especialidad: 'Tacos' },
  { nombre: 'Burger World', especialidad: 'Hamburguesas' },
  { nombre: 'Pizza Móvil', especialidad: 'Pizza' },
  { nombre: 'Taco Loco', especialidad: 'Tacos y Burritos' },
];

// Prueba 1: Buscar por especialidad "Tacos"
const resultado1 = buscarFoodTruck(listaFoodTrucks, 'Tacos');
console.log('Prueba 1 (Buscar "Tacos"):');
console.log(resultado1); // Debería encontrar 'El Buen Sabor' y 'Taco Loco'

// Prueba 2: Buscar por nombre "Burger"
const resultado2 = buscarFoodTruck(listaFoodTrucks, 'Burger');
console.log('\nPrueba 2 (Buscar "Burger"):');
console.log(resultado2); // Debería encontrar 'Burger World'

// Prueba 3: Búsqueda sin resultados
const resultado3 = buscarFoodTruck(listaFoodTrucks, 'Arepas');
console.log('\nPrueba 3 (Buscar "Arepas"):');
console.log(resultado3); // Debería devolver un arreglo vacío

// Prueba 4: Búsqueda con término vacío (caso borde)
const resultado4 = buscarFoodTruck(listaFoodTrucks, '');
console.log('\nPrueba 4 (Búsqueda vacía):');
console.log(resultado4); // Debería devolver un arreglo vacío