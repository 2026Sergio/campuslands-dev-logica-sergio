/**
 * Ordena los resultados de una competencia de atletismo y asigna los puestos.
 *
 * @param {object[]} atletas Un arreglo de objetos, donde cada objeto representa a un atleta
 *                           y tiene las propiedades `nombre` (string) y `tiempo` (número en segundos).
 * @returns {object[]} Un nuevo arreglo de atletas ordenado por tiempo (de menor a mayor),
 *                     con una nueva propiedad `puesto` asignada a cada uno.
 */
function ordenarResultadosCompetencia(atletas) {
  // Crear una copia del arreglo para no modificar el original
  const atletasCopia = [...atletas];

  // Ordenar a los atletas por tiempo en orden ascendente (el menor tiempo es el mejor)
  atletasCopia.sort((a, b) => a.tiempo - b.tiempo);

  // Asignar el puesto a cada atleta basado en su posición en el arreglo ordenado
  const atletasConPuesto = atletasCopia.map((atleta, indice) => {
    return {
      ...atleta,
      puesto: indice + 1, // El índice 0 es el puesto 1, y así sucesivamente
    };
  });

  return atletasConPuesto;
}

// --- Casos de prueba ---

const competidores = [
  { nombre: 'Carlos', tiempo: 10.5 },
  { nombre: 'Ana', tiempo: 10.2 },
  { nombre: 'Luis', tiempo: 10.8 },
  { nombre: 'Maria', tiempo: 10.2 }, // Empate con Ana
  { nombre: 'Juan', tiempo: 11.0 },
];

// Prueba 1: Ordenar una lista de competidores
const resultadosFinales = ordenarResultadosCompetencia(competidores);
console.log('Prueba 1 (Resultados de la competencia):');
console.log(resultadosFinales);

// Prueba 2: Lista vacía
const resultadosVacios = ordenarResultadosCompetencia([]);
console.log('\nPrueba 2 (Competencia sin participantes):');
console.log(resultadosVacios);