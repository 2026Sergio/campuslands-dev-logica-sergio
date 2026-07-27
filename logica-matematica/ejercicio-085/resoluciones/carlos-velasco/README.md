# Logica matematica 085 - sistema de mínimos y límites para inventario de taller mecánico

## Motor de Auditoría de Stock, Cálculo de Déficit y Alertas de Reabastecimiento

Este script analiza un inventario de repuestos de un taller mecánico comparando su stock actual frente a un límite mínimo requerido global, detectando rupturas de inventario, calculando el déficit exacto de unidades faltantes y emitiendo alertas comerciales automatizadas.

* **Descripción del proceso:**
* **Validación de Integridad**: Comprueba si el arreglo de `repuestos` está vacío o si el parámetro `stockMinimoRequerido` no es un número válido mayor o igual a cero, retornando un objeto de error en caso de anomalías.
* **Inicialización de Contadores y Acumuladores**: Define un arreglo para las alertas de reabastecimiento y un contador numérico para rastrear los elementos que se encuentran por debajo del mínimo.
* **Iteración y Evaluación por Umbrales (`for`)**: Recorre cada repuesto del inventario para comparar su `stockActual` frente al límite estipulado:
* Si el stock actual es menor al mínimo requerido, incrementa el contador de incidencias, calcula la diferencia numérica exacta (`deficit`) y agrega un objeto detallado de alerta con el estado crítico.


* **Dictamen Global**: Evalúa si el total de elementos bajo el mínimo es igual a cero para determinar el cumplimiento general de las reglas de stock.
* **Retorno del Reporte**: Devuelve un objeto estructurado que incluye el estatus de cumplimiento global, el total de repuestos afectados, la lista de alertas (o mensaje de conformidad) y la explicación del proceso.


* **Tecnologías:**
* JavaScript (ciclos iterativos `for`, condicionales de comparación numérica, manipulación de arreglos y objetos).



---

### Explicación técnica

1. **Auditoría Cuantitativa por Deficit**: Permite no solo detectar qué elementos incumplen el umbral, de modo que el sistema cuantifica matemáticamente la escasez mediante la resta del límite menos la existencia actual.
2. **Defensividad de Parámetros de Límite**: Asegura que el umbral de comparación sea un valor numérico válido antes de procesar el inventario, previniendo fallos lógicos por entradas mal formadas.

### Lógica del Código

```javascript
const verificarMinimosInventarioTaller = (repuestos, stockMinimoRequerido) => {
    // 1. Validar si el inventario está vacío
    if (!repuestos || repuestos.length === 0) {
        return { error: "El inventario de repuestos del taller mecánico está vacío." };
    }

    // 2. Validar que el límite de stock mínimo sea un número válido mayor o igual a 0
    if (typeof stockMinimoRequerido !== 'number' || stockMinimoRequerido < 0) {
        return { error: "El límite de stock mínimo requerido no es válido." };
    }

    let alertasReabastecimiento = [];
    let repuestosBajoMinimo = 0;

    // 3. Iterar sobre el inventario evaluando el stock actual
    for (let i = 0; i < repuestos.length; i++) {
        const item = repuestos[i];

        if (item.stockActual < stockMinimoRequerido) {
            repuestosBajoMinimo++;
            const deficit = stockMinimoRequerido - item.stockActual;
            alertasReabastecimiento.push({
                repuesto: item.nombre,
                stock_actual: item.stockActual,
                deficit_requerido: deficit,
                estado: "Crítico / Bajo mínimo"
            });
        }
    }

    const cumpleLimitesGlobales = repuestosBajoMinimo === 0;

    // 4. Retornar el reporte consolidado de mínimos
    return {
        cumple_limites: cumpleLimitesGlobales,
        total_repuestos_bajo_minimo: repuestosBajoMinimo,
        alertas: alertasReabastecimiento.length > 0 ? alertasReabastecimiento : ["Todos los repuestos cumplen con el stock mínimo permitido."],
        explicacion: `Se evaluaron los límites de stock mínimo (${stockMinimoRequerido} unidades) para cada repuesto, identificando aquellos que requieren reabastecimiento urgente en el taller.`
    };
};

```

### Salida Esperada

```json
{
  "cumple_limites": false,
  "total_repuestos_bajo_minimo": 2,
  "alertas": [
    {
      "repuesto": "Pastillas de Freno",
      "stock_actual": 3,
      "deficit_requerido": 2,
      "estado": "Crítico / Bajo mínimo"
    },
    {
      "repuesto": "Bujías",
      "stock_actual": 2,
      "deficit_requerido": 3,
      "estado": "Crítico / Bajo mínimo"
    }
  ],
  "explicacion": "Se evaluaron los límites de stock mínimo (5 unidades) para cada repuesto, identificando aquellos que requieren reabastecimiento urgente en el taller."
}
{
  "cumple_limites": true,
  "total_repuestos_bajo_minimo": 0,
  "alertas": [
    "Todos los repuestos cumplen con el stock mínimo permitido."
  ],
  "explicacion": "Se evaluaron los límites de stock mínimo (1 unidades) para cada repuesto, identificando aquellos que requieren reabastecimiento urgente en el taller."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-085/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco