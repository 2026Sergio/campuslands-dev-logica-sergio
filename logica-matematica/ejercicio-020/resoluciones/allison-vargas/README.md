# Plantilla de solucion - Simulaciones con formulas (Comida Urbana)

## Analisis del problema

En la gestión de un puesto de comida urbana (food truck / puesto callejero), es necesario simular las ganancias netas acumuladas a lo largo de varios días considerando unidades vendidas, precio unitario de venta, costo unitario de ingredientes y costos fijos de operación por jornada. El objetivo es recibir un historial de ventas diarias, proyectar los ingresos y clasificar la viabilidad del negocio.

## Reglas aplicadas

1. **Validación de Datos (Caso Borde):**
   - Si el arreglo de ventas diarias está vacío, no es un arreglo o contiene datos no válidos (números negativos, `NaN` o valores no numéricos), la solución retorna un resultado con clasificación `"invalido"`.
2. **Fórmula de Simulación de Ganancia Diaria:**
   $$\text{Ganancia Diaria} = (\text{Unidades} \times \text{Precio Unitario}) - (\text{Unidades} \times \text{Costo Unitario}) - \text{Costo Fijo Diario}$$
3. **Acumulación y Promedio:**
   - Se suman los ingresos totales y las ganancias netas de todos los días válidos.
4. **Clasificación por Viabilidad Comercial:**
   - **Rentable:** Ganancia neta total mayor o igual a $150.
   - **Moderado:** Ganancia neta total entre $50 y $149.
   - **Deficit:** Ganancia neta total menor a $50.

## Solucion implementada

```javascript
/**
 * Ejercicio 020 - Logica Matematica: Simulaciones con Formulas (Comida Urbana)
 */

function simularVentasComidaUrbana(ventasDiarias, precioUnitario, costoUnitario, costoFijoDiario) {
    // 1. Validar entradas
    if (!Array.isArray(ventasDiarias) || ventasDiarias.length === 0 ||
        typeof precioUnitario !== 'number' || precioUnitario <= 0 ||
        typeof costoUnitario !== 'number' || costoUnitario < 0 ||
        typeof costoFijoDiario !== 'number' || costoFijoDiario < 0) {
        return {
            ingresos_totales: 0,
            ganancia_neta: 0,
            clasificacion: "invalido",
            explicacion: "Parametros o lista de ventas invalidos."
        };
    }

    // Validar que todas las ventas sean numeros enteros o flotantes no negativos
    const datosValidos = ventasDiarias.every(v => typeof v === 'number' && !isNaN(v) && v >= 0);
    if (!datosValidos) {
        return {
            ingresos_totales: 0,
            ganancia_neta: 0,
            clasificacion: "invalido",
            explicacion: "La lista contiene registros de ventas no validos."
        };
    }

    // 2. Simular ingresos y ganancias
    let totalUnidades = 0;
    let ingresosTotales = 0;
    let gananciaNetaTotal = 0;

    for (let i = 0; i < ventasDiarias.length; i++) {
        const unidades = ventasDiarias[i];
        const ingresoDia = unidades * precioUnitario;
        const costoDia = (unidades * costoUnitario) + costoFijoDiario;
        const gananciaDia = ingresoDia - costoDia;

        totalUnidades += unidades;
        ingresosTotales += ingresoDia;
        gananciaNetaTotal += gananciaDia;
    }

    ingresosTotales = Number(ingresosTotales.toFixed(2));
    gananciaNetaTotal = Number(gananciaNetaTotal.toFixed(2));

    // 3. Clasificar rendimiento comercial
    let clasificacion = "";
    if (gananciaNetaTotal >= 150) {
        clasificacion = "rentable";
    } else if (gananciaNetaTotal >= 50) {
        clasificacion = "moderado";
    } else {
        clasificacion = "deficit";
    }

    return {
        unidades_vendidas: totalUnidades,
        ingresos_totales: ingresosTotales,
        ganancia_neta: gananciaNetaTotal,
        clasificacion: clasificacion,
        explicacion: `Simulacion completada para ${ventasDiarias.length} dias. Unidades: ${totalUnidades}, Ganancia:$${gananciaNetaTotal}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = simularVentasComidaUrbana([20, 25, 30, 35], 10, 4, 20);
console.log(caso1);

console.log("\n=== Caso Borde (Datos con perdidas / vacio) ===");
const caso2 = simularVentasComidaUrbana([2, 3, 1], 8, 5, 20);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `ventasDiarias: [20, 25, 30, 35]`, `precioUnitario: 10`, `costoUnitario: 4`, `costoFijoDiario: 20`
- **Proceso:**
  - Total unidades = 110. Ingresos = $1,100.
  - Costo ingredientes = $440. Costos fijos (4 días) = $80.
  - Ganancia Neta = $1,100 - $440 - $80 = $580.
- **Resultado obtenido:**
  ```json
  {
    "unidades_vendidas": 110,
    "ingresos_totales": 1100,
    "ganancia_neta": 580,
    "clasificacion": "rentable",
    "explicacion": "Simulacion completada para 4 dias. Unidades: 110, Ganancia: $580."
  }
  ```

### Caso borde
- **Entrada:** `ventasDiarias: [2, 3, 1]`, `precioUnitario: 8`, `costoUnitario: 5`, `costoFijoDiario: 20`
- **Resultado obtenido:**
  ```json
  {
    "unidades_vendidas": 6,
    "ingresos_totales": 48,
    "ganancia_neta": -42,
    "clasificacion": "deficit",
    "explicacion": "Simulacion completada para 3 dias. Unidades: 6, Ganancia: $-42."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-020/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Se diseñó una función de simulación financiera diaria que evalúa los costos variables e insumos frente a las ventas en puestos de comida urbana. La lógica acumula métricas e incluye validaciones estrictas para manejar escenarios de déficits o entradas inválidas.