/**
 * Calcula el costo total de un viaje, convirtiendo la moneda y aplicando un impuesto.
 * La función debe redondear el resultado final a dos decimales para representar un precio monetario.
 *
 * @param {number} costoEnMonedaExtranjera El costo del viaje en la moneda original (ej. USD).
 * @param {number} tasaDeCambio La tasa de cambio para convertir a la moneda local (ej. 4000 COP por 1 USD).
 * @param {number} impuestoPorcentual El impuesto a añadir, en porcentaje (ej. 19 para 19%).
 * @returns {object} Un objeto con el costo final redondeado y una explicación del cálculo.
 */
function calcularCostoViaje(costoEnMonedaExtranjera, tasaDeCambio, impuestoPorcentual) {
  // 1. Convertir el costo a la moneda local
  const costoEnMonedaLocal = costoEnMonedaExtranjera * tasaDeCambio;

  // 2. Calcular el monto del impuesto
  const montoImpuesto = costoEnMonedaLocal * (impuestoPorcentual / 100);

  // 3. Calcular el costo total
  const costoTotal = costoEnMonedaLocal + montoImpuesto;

  // 4. Redondear el resultado a 2 decimales
  const costoFinalRedondeado = Math.round(costoTotal * 100) / 100;

  const explicacion = `Costo base: ${costoEnMonedaExtranjera} (moneda extranjera) * ${tasaDeCambio} = ${costoEnMonedaLocal.toFixed(2)}. ` +
                      `Impuesto del ${impuestoPorcentual}%: ${montoImpuesto.toFixed(2)}. ` +
                      `Total: ${costoTotal.toFixed(2)}, redondeado a ${costoFinalRedondeado.toFixed(2)}.`;

  return {
    costoFinal: costoFinalRedondeado,
    explicacion: explicacion,
  };
}

// --- Casos de prueba ---

// Prueba 1: Caso normal
const resultado1 = calcularCostoViaje(100, 4000, 19); // (100*4000) + 19% = 400000 + 76000 = 476000
console.log('Prueba 1 (Costo normal):');
console.log(resultado1);
// Salida esperada: { costoFinal: 476000, explicacion: '...' }

// Prueba 2: Caso con decimales que necesitan redondeo
const resultado2 = calcularCostoViaje(55.5, 3950.75, 5.5);
console.log('\nPrueba 2 (Costo con redondeo):');
console.log(resultado2);
// Salida esperada: { costoFinal: 231981.43, explicacion: '...' }