/**
 * Define un esquema de validación para un producto del food truck.
 * Especifica el tipo de dato y si el campo es requerido.
 */
const productoSchema = {
  nombre: { tipo: 'string', requerido: true },
  precio: { tipo: 'number', requerido: true },
  categoria: { tipo: 'string', requerido: true },
  descripcion: { tipo: 'string', requerido: false }, // Campo opcional
};

/**
 * Valida un objeto de producto contra un esquema definido.
 * @param {object} producto El objeto del producto a validar.
 * @param {object} schema El esquema contra el cual validar.
 * @returns {{esValido: boolean, errores: string[]}} Un objeto con el resultado de la validación.
 */
function validarConEsquema(producto, schema) {
  const errores = [];

  // Iterar sobre las claves del esquema para validar el producto
  for (const clave in schema) {
    const regla = schema[clave];
    const valor = producto[clave];

    // 1. Validar campos requeridos
    if (regla.requerido && (valor === undefined || valor === null)) {
      errores.push(`El campo "${clave}" es requerido.`);
      continue; // No tiene sentido seguir validando un campo que no existe
    }

    // 2. Validar tipo de dato (solo si el campo existe)
    if (valor !== undefined && valor !== null) {
      if (typeof valor !== regla.tipo) {
        errores.push(`El campo "${clave}" debe ser de tipo "${regla.tipo}".`);
      }
    }
  }

  return {
    esValido: errores.length === 0,
    errores: errores,
  };
}

// --- Casos de prueba ---

// Prueba 1: Producto válido
const productoValido = { nombre: 'Arepa de Queso', precio: 8, categoria: 'Arepas' };
const resultado1 = validarConEsquema(productoValido, productoSchema);
console.log('Prueba 1 (Producto Válido):', resultado1);

// Prueba 2: Producto con campo faltante
const productoIncompleto = { nombre: 'Empanada', categoria: 'Fritos' };
const resultado2 = validarConEsquema(productoIncompleto, productoSchema);
console.log('\nPrueba 2 (Producto Incompleto):', resultado2);

// Prueba 3: Producto con tipo de dato incorrecto
const productoTipoErroneo = { nombre: 'Jugo de Lulo', precio: 'caro', categoria: 'Bebidas' };
const resultado3 = validarConEsquema(productoTipoErroneo, productoSchema);
console.log('\nPrueba 3 (Tipo de Dato Incorrecto):', resultado3);