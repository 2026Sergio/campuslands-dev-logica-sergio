/**
 * Procesa las ventas de un food truck y actualiza el inventario.
 *
 * @param {object} inventarioInicial Un objeto que representa el stock inicial. Las claves son los productos y los valores son las cantidades.
 * @param {object[]} ventas Un arreglo de objetos de venta, cada uno con `producto` y `cantidad`.
 * @returns {object} Un objeto con el `inventarioFinal` y un `reporteVentas` (exitosas y fallidas).
 */
function procesarVentasInventario(inventarioInicial, ventas) {
  // Usar un nuevo objeto para el inventario final para mantener la inmutabilidad.
  const inventarioFinal = { ...inventarioInicial };
  const reporteVentas = {
    exitosas: [],
    fallidas: [],
  };

  // Procesar cada venta
  for (const venta of ventas) {
    const { producto, cantidad } = venta;

    // Verificar si el producto existe y si hay suficiente stock
    if (inventarioFinal[producto] && inventarioFinal[producto] >= cantidad) {
      // Si hay stock, se resta la cantidad y se registra la venta como exitosa
      inventarioFinal[producto] -= cantidad;
      reporteVentas.exitosas.push(venta);
    } else {
      // Si no hay stock o el producto no existe, se registra como fallida
      reporteVentas.fallidas.push(venta);
    }
  }

  return { inventarioFinal, reporteVentas };
}

// --- Casos de prueba ---

const stockInicial = {
  hamburguesas: 10,
  perros: 15,
  papas: 30,
};

const listaDeVentas = [
  { producto: 'hamburguesas', cantidad: 2 },
  { producto: 'papas', cantidad: 5 },
  { producto: 'perros', cantidad: 16 }, // Fallará por falta de stock
  { producto: 'arepas', cantidad: 3 }, // Fallará porque no existe
  { producto: 'hamburguesas', cantidad: 3 },
];

// Prueba 1: Procesar una lista de ventas
const resultadoDia = procesarVentasInventario(stockInicial, listaDeVentas);
console.log('Prueba 1 (Resultados del día):');
console.log(JSON.stringify(resultadoDia, null, 2));

// Prueba 2: Sin ventas
const resultadoSinVentas = procesarVentasInventario(stockInicial, []);
console.log('\nPrueba 2 (Día sin ventas):');
console.log(JSON.stringify(resultadoSinVentas, null, 2));