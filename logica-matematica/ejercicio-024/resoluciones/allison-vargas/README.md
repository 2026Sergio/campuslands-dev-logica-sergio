# Plantilla de solucion - Rangos y maximos (Inventario de Motos)

## Analisis del problema

En la gestión de inventarios para una tienda de motos, es necesario controlar las existencias de cada modelo. Queremos identificar cuál es el modelo con mayor stock, cuántas unidades hay en total, el rango de existencias (diferencia entre el modelo más abastecido y el menos abastecido) y clasificar el estado general del almacén.

## Reglas aplicadas

1. **Validación de Entradas (Caso Borde):**
   - Si el inventario no es una lista, está vacío o algún modelo tiene cantidades que no son números mayores o iguales a cero, la solución retorna una clasificación `"invalido"`.
2. **Cálculo de Totales, Rangos y Máximos:**
   - **Total de unidades:** Se suman las existencias de todos los modelos.
   - **Modelo más vendido / con más stock:** Se busca el valor máximo en la lista.
   - **Modelo con menos stock:** Se busca el valor mínimo en la lista.
   - **Rango de stock:** Se calcula restando el stock máximo menos el stock mínimo ($\text{Máximo} - \text{Mínimo}$).
3. **Clasificación del Estado del Inventario:**
   - **Sobreasignado:** Si el promedio de stock por modelo es mayor o igual a $50$ unidades.
   - **Balanceado:** Si el promedio de stock está entre $20$ y $49$ unidades.
   - **Stock bajo:** Si el promedio de stock es menor a $20$ unidades.

## Solucion implementada

```javascript
/**
 * Ejercicio 024 - Logica Matematica: Rangos y Maximos (Inventario de Motos)
 */

function analizarInventarioMotos(inventario) {
    // 1. Validar entradas
    if (!Array.isArray(inventario) || inventario.length === 0) {
        return {
            total_unidades: 0,
            stock_maximo: 0,
            stock_minimo: 0,
            rango_stock: 0,
            clasificacion: "invalido",
            explicacion: "El inventario debe ser una lista no vacia."
        };
    }

    // Verificar que cada item tenga unidades validas
    for (let i = 0; i < inventario.length; i++) {
        const item = inventario[i];
        if (!item || typeof item.unidades !== 'number' || isNaN(item.unidades) || item.unidades < 0) {
            return {
                total_unidades: 0,
                stock_maximo: 0,
                stock_minimo: 0,
                rango_stock: 0,
                clasificacion: "invalido",
                explicacion: "Se encontraron registros de unidades invalidos."
            };
        }
    }

    // 2. Encontrar maximo, minimo y total
    let totalUnidades = 0;
    let modeloMax = inventario[0];
    let modeloMin = inventario[0];

    for (let i = 0; i < inventario.length; i++) {
        const actual = inventario[i];
        totalUnidades += actual.unidades;

        if (actual.unidades > modeloMax.unidades) {
            modeloMax = actual;
        }
        if (actual.unidades < modeloMin.unidades) {
            modeloMin = actual;
        }
    }

    const rangoStock = modeloMax.unidades - modeloMin.unidades;
    const promedio = totalUnidades / inventario.length;

    // 3. Clasificar estado del inventario
    let clasificacion = "";
    if (promedio >= 50) {
        clasificacion = "sobreasignado";
    } else if (promedio >= 20) {
        clasificacion = "balanceado";
    } else {
        clasificacion = "stock bajo";
    }

    return {
        total_unidades: totalUnidades,
        modelo_mas_stock: modeloMax.modelo,
        stock_maximo: modeloMax.unidades,
        stock_minimo: modeloMin.unidades,
        rango_stock: rangoStock,
        clasificacion: clasificacion,
        explicacion: `Se revisaron ${inventario.length} modelos. El rango de diferencia de stock es de ${rangoStock} unidades.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarInventarioMotos([
    { modelo: "Scooter 125cc", unidades: 15 },
    { modelo: "Sport 250cc", unidades: 45 },
    { modelo: "Enduro 200cc", unidades: 30 },
    { modelo: "Cruiser 500cc", unidades: 10 }
]);
console.log(caso1);

console.log("\n=== Caso Borde (Valores invalidos) ===");
const caso2 = analizarInventarioMotos([
    { modelo: "Scooter 125cc", unidades: -5 }
]);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:**
  ```javascript
  [
      { modelo: "Scooter 125cc", unidades: 15 },
      { modelo: "Sport 250cc", unidades: 45 },
      { modelo: "Enduro 200cc", unidades: 30 },
      { modelo: "Cruiser 500cc", unidades: 10 }
  ]
  ```
- **Proceso:**
  - Total unidades = $15 + 45 + 30 + 10 = 100$.
  - Máximo = `Sport 250cc` ($45$ unidades).
  - Mínimo = `Cruiser 500cc` ($10$ unidades).
  - Rango = $45 - 10 = 35$ unidades.
  - Promedio = $100 / 4 = 25$ unidades $\rightarrow$ **balanceado**.
- **Resultado obtenido:**
  ```json
  {
    "total_unidades": 100,
    "modelo_mas_stock": "Sport 250cc",
    "stock_maximo": 45,
    "stock_minimo": 10,
    "rango_stock": 35,
    "clasificacion": "balanceado",
    "explicacion": "Se revisaron 4 modelos. El rango de diferencia de stock es de 35 unidades."
  }
  ```

### Caso borde
- **Entrada:** `[{ modelo: "Scooter 125cc", unidades: -5 }]`
- **Resultado obtenido:**
  ```json
  {
    "total_unidades": 0,
    "stock_maximo": 0,
    "stock_minimo": 0,
    "rango_stock": 0,
    "clasificacion": "invalido",
    "explicacion": "Se encontraron registros de unidades invalidos."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-024/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Armamos un programa que revisa la lista de motos en inventario. Encuentra cuál es el modelo con más unidades, cuál tiene menos, calcula la brecha entre ambos y nos dice si la tienda tiene suficiente stock o si necesita reponer motos.