/**
 * Implementación de un Food Truck usando Programación Orientada a Objetos.
 */
class FoodTruck {
  /**
   * @param {string} nombre El nombre del food truck.
   * @param {string} especialidad La especialidad culinaria.
   * @param {object} inventarioInicial El stock inicial de productos.
   */
  constructor(nombre, especialidad, inventarioInicial) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.inventario = { ...inventarioInicial }; // Copia para mantener inmutabilidad
    this.ventasTotales = 0;
  }

  /**
   * Simula la venta de un producto, actualizando el inventario y las ventas.
   * @param {string} producto El nombre del producto a vender.
   * @param {number} cantidad La cantidad a vender.
   * @returns {string} Un mensaje indicando el resultado de la venta.
   */
  vender(producto, cantidad) {
    if (!this.inventario[producto] || this.inventario[producto] < cantidad) {
      return `Venta fallida: No hay suficiente stock de ${producto}.`;
    }

    this.inventario[producto] -= cantidad;
    this.ventasTotales += cantidad;
    return `Venta exitosa: ${cantidad} de ${producto}.`;
  }

  /**
   * Añade stock a un producto existente o agrega un nuevo producto al inventario.
   * @param {string} producto El nombre del producto.
   * @param {number} cantidad La cantidad a reponer.
   */
  reponerStock(producto, cantidad) {
    if (!this.inventario[producto]) {
      this.inventario[producto] = 0;
    }
    this.inventario[producto] += cantidad;
    return `Stock de ${producto} actualizado a ${this.inventario[producto]}.`;
  }

  /**
   * Devuelve un reporte del estado actual del food truck.
   * @returns {object} Un objeto con el estado del inventario y el total de ventas.
   */
  obtenerReporte() {
    return {
      nombre: this.nombre,
      inventarioActual: this.inventario,
      unidadesVendidas: this.ventasTotales,
    };
  }
}

// --- Casos de prueba ---

console.log('--- Simulación del Food Truck "El Buen Sabor" ---');
const miFoodTruck = new FoodTruck('El Buen Sabor', 'Tacos', { tacos: 50, refrescos: 100 });

console.log(miFoodTruck.vender('tacos', 10));
console.log(miFoodTruck.vender('refrescos', 200)); // Venta fallida
console.log(miFoodTruck.reponerStock('refrescos', 150));
console.log(miFoodTruck.vender('refrescos', 200));
console.log('\nReporte Final:');
console.log(miFoodTruck.obtenerReporte());