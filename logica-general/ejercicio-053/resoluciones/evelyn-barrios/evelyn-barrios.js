/**
 * Demuestra la optimización de una búsqueda de datos mediante pre-procesamiento.
 */

// 1. Datos iniciales: una lista grande de ingredientes.
const listaDeIngredientes = Array.from({ length: 10000 }, (_, i) => ({
  id: `ing-${i}`,
  nombre: `Ingrediente ${i}`,
  disponible: Math.random() > 0.2, // 80% de probabilidad de estar disponible
}));

// --- Implementación Lenta (Búsqueda Lineal) ---

/**
 * Busca un ingrediente por ID recorriendo todo el arreglo (complejidad O(n)).
 * @param {string} id El ID del ingrediente a buscar.
 */
function buscarIngredienteLento(id) {
  return listaDeIngredientes.find(ing => ing.id === id);
}

// --- Implementación Rápida (Búsqueda con Map) ---

// 2. Pre-procesamiento: Convertir el arreglo en un Map para búsqueda rápida (complejidad O(1)).
const mapaDeIngredientes = new Map(listaDeIngredientes.map(ing => [ing.id, ing]));

/**
 * Busca un ingrediente por ID usando el Map pre-procesado.
 * @param {string} id El ID del ingrediente a buscar.
 */
function buscarIngredienteRapido(id) {
  return mapaDeIngredientes.get(id);
}

// --- Medición de Rendimiento ---

function medirRendimiento() {
  const idABuscar = 'ing-9999'; // Buscar el último elemento para el peor caso en la búsqueda lenta.

  console.log('--- Midiendo rendimiento de la búsqueda ---');

  // Medir búsqueda lenta
  console.time('Búsqueda Lenta (O(n))');
  buscarIngredienteLento(idABuscar);
  console.timeEnd('Búsqueda Lenta (O(n))');

  // Medir búsqueda rápida
  console.time('Búsqueda Rápida (O(1))');
  buscarIngredienteRapido(idABuscar);
  console.timeEnd('Búsqueda Rápida (O(1))');

  console.log('\nConclusión: La búsqueda usando un Map es significativamente más rápida.');
}

// Ejecutar la simulación
medirRendimiento();