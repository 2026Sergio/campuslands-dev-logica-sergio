/**
 * Esta es la función que vamos a probar.
 * Valida un objeto de producto contra un esquema definido.
 */
const productoSchema = {
  nombre: { tipo: 'string', requerido: true },
  precio: { tipo: 'number', requerido: true },
  categoria: { tipo: 'string', requerido: true },
  descripcion: { tipo: 'string', requerido: false },
};

function validarConEsquema(producto, schema) {
  const errores = [];
  for (const clave in schema) {
    const regla = schema[clave];
    const valor = producto[clave];
    if (regla.requerido && (valor === undefined || valor === null)) {
      errores.push(`El campo "${clave}" es requerido.`);
      continue;
    }
    if (valor !== undefined && valor !== null) {
      if (typeof valor !== regla.tipo) {
        errores.push(`El campo "${clave}" debe ser de tipo "${regla.tipo}".`);
      }
    }
  }
  return { esValido: errores.length === 0, errores: errores };
}

// --- Implementación de Pruebas Unitarias ---

/**
 * Describe un conjunto de pruebas para una funcionalidad.
 * @param {string} descripcion El nombre del conjunto de pruebas.
 * @param {function} fn La función que contiene las pruebas.
 */
function describe(descripcion, fn) {
  console.log(`\n--- ${descripcion} ---`);
  fn();
}

/**
 * Define una prueba individual (un "test case").
 * @param {string} descripcion El nombre de la prueba.
 * @param {function} fn La función que ejecuta la lógica de la prueba.
 */
function it(descripcion, fn) {
  try {
    fn();
    console.log(`  ✅ [PASS] ${descripcion}`);
  } catch (error) {
    console.error(`  ❌ [FAIL] ${descripcion}`);
    console.error(error);
  }
}

/**
 * Realiza una aserción simple para verificar si dos valores son iguales.
 * @param {*} actual El valor obtenido.
 * @param {*} esperado El valor que se esperaba.
 */
function expect(actual) {
  return {
    toBe: (esperado) => {
      if (actual !== esperado) {
        throw new Error(`Se esperaba ${esperado} pero se recibió ${actual}`);
      }
    },
  };
}

// --- Ejecución de las Pruebas ---

describe('Validador de Esquema de Productos', () => {
  it('debería devolver válido para un producto correcto', () => {
    const producto = { nombre: 'Taco', precio: 10, categoria: 'Tacos' };
    const resultado = validarConEsquema(producto, productoSchema);
    expect(resultado.esValido).toBe(true);
  });

  it('debería devolver inválido si falta un campo requerido', () => {
    const producto = { nombre: 'Taco', categoria: 'Tacos' };
    const resultado = validarConEsquema(producto, productoSchema);
    expect(resultado.esValido).toBe(false);
  });

  it('debería devolver inválido si un campo tiene el tipo incorrecto', () => {
    const producto = { nombre: 'Taco', precio: 'diez', categoria: 'Tacos' };
    const resultado = validarConEsquema(producto, productoSchema);
    expect(resultado.esValido).toBe(false);
  });

  it('debería devolver válido si un campo opcional está ausente', () => {
    const producto = { nombre: 'Taco', precio: 10, categoria: 'Tacos' };
    const resultado = validarConEsquema(producto, productoSchema);
    expect(resultado.esValido).toBe(true);
  });
});