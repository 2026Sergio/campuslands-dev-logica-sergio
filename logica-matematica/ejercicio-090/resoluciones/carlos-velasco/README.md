# Logica matematica 090 - redondeo, precisión y cálculo de presupuestos turísticos

## Motor Financiero de Acumulación, Tasas Impositivas y Conversión Monetaria

Este script procesa un arreglo numérico con los costos base de diversos servicios turísticos, un porcentaje de impuesto y una tasa de cambio, aplicando fórmulas aritméticas de acumulación, aplicación de porcentajes, conversión de divisas, control de precisión decimal y clasificación comercial del presupuesto global.

* **Descripción del proceso:**
* **Validación de Integridad**: Comprueba si el arreglo `costosServicios` es nulo, no corresponde a una estructura de tipo arreglo o está vacío, y valida que los parámetros financieros (impuesto y tasa de cambio) sean numéricos y la tasa estrictamente mayor a cero.
* **Acumulación de Costos Base (`for`)**: Itera sobre la colección de costos asegurando un control de límites que neutraliza valores negativos (reemplazándolos por cero) antes de sumarlos al subtotal general.
* **Cálculo de Impuestos y Conversión**:
* Determina el monto del impuesto aplicando el porcentaje sobre el subtotal (`subtotalDolares * (impuestoPorcentaje / 100)`).
* Obtiene el total en dólares sumando el subtotal y el impuesto.
* Convierte el total a moneda local multiplicándolo por la tasa de cambio provista.


* **Precisión y Redondeo Numérico**: Utiliza métodos de conversión y precisión (`toFixed(2)` junto con `parseFloat`) para estandarizar los valores financieros a dos decimales, evitando errores de punto flotante.
* **Clasificación del Viaje por Umbrales**: Categoriza el presupuesto total en USD:
* **Viaje de Lujo / Premium**: $\ge$ 2000 USD.
* **Turismo Moderado**: $\ge$ 1000 USD y menor a 2000 USD.
* **Turismo Estándar / Económico**: Menor a 1000 USD.


* **Retorno del Reporte**: Devuelve un objeto estructurado con el subtotal, impuesto, presupuestos totales en USD y moneda local, categoría del viaje y la explicación del proceso.


* **Tecnologías:**
* JavaScript (ciclos iterativos `for`, operaciones aritméticas financieras, redondeo con `toFixed`, parseo numérico y estructuras condicionales).



---

### Explicación técnica

1. **Control Riguroso de Precisión Financiera**: El uso combinado de `toFixed(2)` y `parseFloat` asegura que las operaciones de multiplicación con porcentajes y tasas de cambio mantengan una representación monetaria exacta de dos decimales, idónea para reportes financieros.
2. **Defensa ante Datos Negativos y Anomalías**: Incorpora validaciones previas para los arreglos y parámetros de cambio, además de un filtro interno que neutraliza costos negativos para proteger la integridad del subtotal acumulado.

### Lógica del Código

```javascript
const calcularPresupuestoTurismo = (costosServicios, impuestoPorcentaje, tasaCambio) => {
    // 1. Validar si la lista de costos no es válida o está vacía
    if (!costosServicios || !Array.isArray(costosServicios) || costosServicios.length === 0) {
        return { error: "La lista de costos de servicios turísticos está vacía o no es válida." };
    }

    // 2. Validar parámetros financieros
    if (typeof impuestoPorcentaje !== 'number' || typeof tasaCambio !== 'number' || tasaCambio <= 0) {
        return { error: "Los parámetros financieros (impuesto o tasa de cambio) no son válidos." };
    }

    let subtotalDolares = 0;

    // 3. Sumar todos los costos base (acumulador) con control de límites
    for (let i = 0; i < costosServicios.length; i++) {
        let costo = costosServicios[i];
        if (costo < 0) costo = 0; 
        subtotalDolares += costo;
    }

    // 4. Aplicar cálculo de impuestos y conversión a moneda local
    const montoImpuesto = subtotalDolares * (impuestoPorcentaje / 100);
    const totalDolares = subtotalDolares + montoImpuesto;
    const totalMonedaLocal = totalDolares * tasaCambio;

    // 5. Reglas de redondeo y precisión con toFixed(2)
    const presupuestoFinalUSD = parseFloat(totalDolares.toFixed(2));
    const presupuestoFinalLocal = parseFloat(totalMonedaLocal.toFixed(2));

    // 6. Clasificar el presupuesto del viaje
    let categoriaPresupuesto = "Turismo Estándar / Económico";
    if (presupuestoFinalUSD >= 2000) {
        categoriaPresupuesto = "Viaje de Lujo / Premium";
    } else if (presupuestoFinalUSD >= 1000) {
        categoriaPresupuesto = "Turismo Moderado";
    }

    // 7. Retornar el reporte financiero consolidado
    return {
        subtotal_usd: parseFloat(subtotalDolares.toFixed(2)),
        impuesto_usd: parseFloat(montoImpuesto.toFixed(2)),
        presupuesto_total_usd: presupuestoFinalUSD,
        presupuesto_total_local: presupuestoFinalLocal,
        categoria_viaje: categoriaPresupuesto,
        explicacion: "Se calcularon y redondearon con precisión los costos de los servicios turísticos, sumando los impuestos correspondientes y convirtiéndolos a la moneda local mediante la tasa de cambio."
    };
};

```

### Salida Esperada

```json
{
  "subtotal_usd": 961.24,
  "impuesto_usd": 115.35,
  "presupuesto_total_usd": 1076.59,
  "presupuesto_total_local": 4360069.45,
  "categoria_viaje": "Turismo Moderado",
  "explicacion": "Se calcularon y redondearon con precisión los costos de los servicios turísticos, sumando los impuestos correspondientes y convirtiéndolos a la moneda local mediante la tasa de cambio."
}
{
  "subtotal_usd": 49.99,
  "impuesto_usd": 0,
  "presupuesto_total_usd": 49.99,
  "presupuesto_total_local": 49.99,
  "categoria_viaje": "Turismo Estándar / Económico",
  "explicacion": "Se calcularon y redondearon con precisión los costos de los servicios turísticos, sumando los impuestos correspondientes y convirtiéndolos a la moneda local mediante la tasa de cambio."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-090/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco