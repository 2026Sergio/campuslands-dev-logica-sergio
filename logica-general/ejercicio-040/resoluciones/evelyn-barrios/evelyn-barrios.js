/**
 * Simula la rentabilidad de un nuevo producto para un food truck.
 *
 * @param {number} costoPorUnidad El costo de producir una unidad del producto.
 * @param {number} precioDeVenta El precio al que se vende cada unidad.
 * @param {number[]} ventasEstimadas Un arreglo con las unidades vendidas estimadas por día.
 * @returns {object} Un objeto con la ganancia total, la clasificación de rentabilidad y una explicación.
 */
function simularRentabilidadProducto(costoPorUnidad, precioDeVenta, ventasEstimadas) {
  // 1. Calcular la ganancia por unidad
  const gananciaPorUnidad = precioDeVenta - costoPorUnidad;

  // 2. Calcular el total de unidades vendidas (usando reduce para sumar el arreglo)
  const totalUnidadesVendidas = ventasEstimadas.reduce((total, ventasDia) => total + ventasDia, 0);

  // 3. Calcular la ganancia total
  const gananciaTotal = gananciaPorUnidad * totalUnidadesVendidas;

  // 4. Clasificar la rentabilidad
  let clasificacion;
  if (gananciaTotal > 1000) {
    clasificacion = 'Alta';
  } else if (gananciaTotal >= 500) {
    clasificacion = 'Media';
  } else {
    clasificacion = 'Baja';
  }

  const explicacion = `Ganancia por unidad: ${gananciaPorUnidad}. Unidades totales: ${totalUnidadesVendidas}. Ganancia total proyectada: ${gananciaTotal}.`;

  return {
    gananciaTotal,
    clasificacion,
    explicacion,
  };
}

// --- Casos de prueba ---

// Prueba 1: Rentabilidad Alta
const resultado1 = simularRentabilidadProducto(5, 12, [20, 25, 30, 28, 40]); // Ganancia: 7 * 143 = 1001
console.log('Prueba 1 (Rentabilidad Alta):');
console.log(resultado1);

// Prueba 2: Rentabilidad Baja
const resultado2 = simularRentabilidadProducto(8, 10, [15, 10, 20]); // Ganancia: 2 * 45 = 90
console.log('\nPrueba 2 (Rentabilidad Baja):');
console.log(resultado2);

// Prueba 3: Sin ventas (caso borde)
const resultado3 = simularRentabilidadProducto(10, 20, []); // Ganancia: 10 * 0 = 0
console.log('\nPrueba 3 (Sin Ventas):');
console.log(resultado3);