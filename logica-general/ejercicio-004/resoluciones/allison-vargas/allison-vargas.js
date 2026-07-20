/**
 * Filtra el inventario de motos según disponibilidad y presupuesto máximo.
 * @param {Array} inventario - Lista de objetos de motocicletas.
 * @param {Number} presupuestoMax - Precio máximo que el cliente puede pagar.
 * @returns {Array|Object} - Lista de motos filtradas o mensaje de error.
 */
function filtrarInventarioMotos(inventario, presupuestoMax) {
  // 1. Validación de datos de entrada (Evita arreglos vacíos o precios incoherentes)
  if (!inventario || !Array.isArray(inventario) || inventario.length === 0 || typeof presupuestoMax !== 'number' || presupuestoMax <= 0) {
    return {
      error: "Datos de entrada inválidos",
      motivo: "El inventario está vacío o el presupuesto ingresado no es un número válido."
    };
  }

  // 2. Aplicación de filtros mediante .filter()
  const motosDisponibles = inventario.filter(moto => {
    const tieneStock = moto.disponible === true;
    const entraEnPresupuesto = moto.precio <= presupuestoMax;
    
    return tieneStock && entraEnPresupuesto;
  });

  // 3. Validación en caso de que ninguna moto cumpla el filtro
  if (motosDisponibles.length === 0) {
    return {
      accion: "notificar al cliente",
      motivo: "No hay motocicletas disponibles en stock que se ajusten al presupuesto indicado."
    };
  }

  return motosDisponibles;
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Filtrando motos activas dentro del presupuesto de 3000
const inventarioMotos = [
  { modelo: "Scooter 125cc", precio: 1800, disponible: true },
  { modelo: "Sport 300cc", precio: 4500, disponible: true }, // Supera presupuesto
  { modelo: "Enduro 250cc", precio: 2800, disponible: false }, // No disponible
  { modelo: "Urban 150cc", precio: 2200, disponible: true }
];

console.log("--- Caso Normal ---");
console.log(filtrarInventarioMotos(inventarioMotos, 3000));


// 2. Caso Borde: Presupuesto demasiado bajo donde ninguna moto califica
console.log("\n--- Caso Borde ---");
console.log(filtrarInventarioMotos(inventarioMotos, 1000));