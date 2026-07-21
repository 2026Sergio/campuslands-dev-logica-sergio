/**
 * Calcula el factorial de un número usando recursividad.
 * El factorial es el número de combinaciones posibles de un conjunto de elementos,
 * útil para calcular permutaciones de ingredientes en un menú.
 *
 * @param {number} n El número para el cual se calculará el factorial. Debe ser un entero no negativo.
 * @returns {number} El factorial de n.
 */
function calcularFactorial(n) {
  // Caso base: El factorial de 0 es 1. La recursividad termina aquí.
  if (n === 0) {
    return 1;
  }

  // Validar entrada: Asegurarse de que n no es negativo.
  if (n < 0) {
    return NaN; // Factorial no está definido para números negativos.
  }

  // Paso recursivo: n * factorial de (n-1)
  return n * calcularFactorial(n - 1);
}

// --- Casos de prueba ---

// Prueba 1: Calcular el factorial de 5 (combinaciones de 5 ingredientes)
const resultado1 = calcularFactorial(5); // 5 * 4 * 3 * 2 * 1 = 120
console.log('Prueba 1 (Factorial de 5):');
console.log(resultado1);

// Prueba 2: Calcular el factorial de 0 (caso base)
const resultado2 = calcularFactorial(0);
console.log('\nPrueba 2 (Factorial de 0):');
console.log(resultado2); // Debería ser 1

// Prueba 3: Calcular el factorial de 1
const resultado3 = calcularFactorial(1);
console.log('\nPrueba 3 (Factorial de 1):');
console.log(resultado3); // Debería ser 1

// Prueba 4: Entrada inválida (número negativo)
const resultado4 = calcularFactorial(-5);
console.log('\nPrueba 4 (Factorial de -5):');
console.log(resultado4); // Debería ser NaN