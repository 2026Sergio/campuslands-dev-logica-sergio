/**
 * Simula el procesamiento de una cola de pedidos, incluyendo logging para depuración.
 */
const inventario = {
  tacos: 20,
  hamburguesas: 15,
};

/**
 * Procesa un solo pedido y actualiza el inventario.
 * @param {object} pedido El pedido a procesar.
 */
function procesarPedido(pedido) {
  // Log de inicio de procesamiento
  console.log(`[INFO] Procesando pedido ID: ${pedido.id}`);

  // Punto de depuración para inspeccionar el pedido entrante.
  // Si tienes las herramientas de desarrollador abiertas, la ejecución se pausará aquí.
  // debugger;

  // Validación del formato del pedido
  if (!pedido || typeof pedido.id !== 'number' || !Array.isArray(pedido.items)) {
    console.error(`[ERROR] Pedido con ID "${pedido.id || 'desconocido'}" tiene un formato inválido y será omitido.`);
    return; // Salir si el formato es incorrecto
  }

  for (const item of pedido.items) {
    console.log(`[DEBUG] Verificando item: ${item.cantidad} de ${item.producto}`);
    if (!inventario[item.producto] || inventario[item.producto] < item.cantidad) {
      // Log de advertencia si no hay stock
      console.warn(`[WARN] Stock insuficiente para ${item.producto} en pedido ID: ${pedido.id}. Item omitido.`);
    } else {
      inventario[item.producto] -= item.cantidad;
      console.log(`[INFO] Item ${item.producto} despachado. Stock restante: ${inventario[item.producto]}`);
    }
  }
  console.log(`[INFO] Pedido ID: ${pedido.id} finalizado.`);
}

// --- Casos de prueba ---

const colaDePedidos = [
  { id: 1, items: [{ producto: 'tacos', cantidad: 5 }] },
  { id: 2, items: [{ producto: 'hamburguesas', cantidad: 10 }] },
  { id: '003', items: [{ producto: 'tacos', cantidad: 2 }] }, // Pedido con formato inválido (ID es string)
  { id: 4, items: [{ producto: 'hamburguesas', cantidad: 10 }] }, // Fallará por stock
  { id: 5, items: [{ producto: 'tacos', cantidad: 3 }] },
];

console.log('--- Iniciando procesamiento de la cola de pedidos ---');
colaDePedidos.forEach(pedido => {
  procesarPedido(pedido);
  console.log('-------------------------------------------------');
});
console.log('--- Cola de pedidos procesada. Estado final del inventario: ---');
console.log(inventario);