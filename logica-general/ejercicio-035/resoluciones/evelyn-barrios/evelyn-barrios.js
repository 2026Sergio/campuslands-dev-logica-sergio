/**
 * @file resolucion/evelyn-barrios/evelyn-barrios.js
 * @description Solución al problema de decisión de reorden de inventario.
 */

/**
 * Decide si es necesario reordenar un producto.
 *
 * @param {number} stockActual - La cantidad de producto en inventario.
 * @param {number} stockMinimo - El umbral mínimo de stock deseado.
 * @param {number} ventasSemanales - El número de unidades vendidas en la última semana.
 * @param {boolean} promocionActiva - Verdadero si el producto está en promoción.
 * @returns {{accion: string, motivo: string}} Un objeto con la acción recomendada y el motivo.
 */
function decidirReorden(stockActual, stockMinimo, ventasSemanales, promocionActiva) {
  if (stockActual < 0 || stockMinimo < 0 || ventasSemanales < 0) {
    return {
      accion: "inválida",
      motivo: "Los valores de stock y ventas no pueden ser negativos.",
    };
  }

  // Regla 1: Urgente por stock bajo
  if (stockActual < stockMinimo) {
    return {
      accion: "reordenar",
      motivo: `Stock bajo (${stockActual} unidades). Es urgente reordenar para no quedar sin producto.`,
    };
  }

  // Regla 2: Anticipar demanda por promoción
  if (promocionActiva && ventasSemanales > 20) {
    return {
      accion: "reordenar",
      motivo: "Promoción activa con altas ventas. Se recomienda reordenar para anticipar la demanda.",
    };
  }

  // Regla 3: Preventivo por alta rotación
  if (stockActual < stockMinimo * 2 && ventasSemanales > 10) {
    return {
      accion: "reordenar",
      motivo: "El producto tiene alta rotación y el stock se acerca al mínimo. Se recomienda reordenar.",
    };
  }

  // Regla 4: No es necesario reordenar
  return {
    accion: "no reordenar",
    motivo: "El nivel de stock es estable en relación con las ventas actuales.",
  };
}

// --- Pruebas ---
console.log("Caso 1 (Urgente): Stock por debajo del mínimo.");
console.log(decidirReorden(8, 10, 5, false));

console.log("\nCaso 2 (Promoción): Ventas altas durante promoción.");
console.log(decidirReorden(25, 10, 22, true));

console.log("\nCaso 3 (Preventivo): Alta rotación con stock moderado.");
console.log(decidirReorden(18, 10, 15, false));

console.log("\nCaso 4 (Normal): Stock y ventas estables.");
console.log(decidirReorden(50, 10, 5, false));