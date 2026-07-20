# Plantilla de solucion - Redondeo y precision (Viajes y Turismo)

## Analisis del problema

El objetivo es calcular el costo promedio por persona o tarifa final de un paquete turistico o viaje, aplicando impuestos/comisiones y controlando la precision decimal mediante reglas de redondeo.

## Reglas aplicadas

1. **Validacion de datos vacios (Caso Borde):** Si la lista de costos esta vacia, el numero de pasajeros es menor o igual a 0, o los valores son invalidos, se retorna un objeto con costo `0` y estado `"invalido"`.
2. **Calculo de costo base y promedio:** Se realiza la suma de los costos individuales (hospedaje, transporte, actividades) y se calcula el promedio por viajero.
3. **Ajuste por impuestos/comision y redondeo:** Se aplica la tasa de impuesto y el resultado final se redondea a 2 decimales para garantizar la precision monetaria.
4. **Clasificacion del presupuesto:**
   - **Economico:** Costo final menor a 100 por persona.
   - **Estandar:** Costo final entre 100 y 300 por persona.
   - **Lujo:** Costo final mayor a 300 por persona.

## Solucion implementada

```javascript
/**
 * (Viajes y Turismo)
 */

function calcularPresupuestoViaje(gastos, personas, impuestoPorcentaje) {
    // 1. Validar caso borde
    if (!gastos || gastos.length === 0 || !personas || personas <= 0) {
        return {
            costo_total: 0,
            costo_por_persona: 0,
            clasificacion: "invalido",
            explicacion: "La lista de gastos esta vacia o el numero de personas no es valido."
        };
    }

    // 2. Sumar total de gastos
    const sumaGastos = gastos.reduce((acc, curr) => acc + curr, 0);

    // 3. Aplicar impuesto y calcular costo por persona con redondeo a 2 decimales
    const tasaImpuesto = 1 + (impuestoPorcentaje / 100);
    const costoTotalConImpuesto = sumaGastos * tasaImpuesto;
    const costoPorPersonaRaw = costoTotalConImpuesto / personas;
    const costoPorPersona = Number(costoPorPersonaRaw.toFixed(2));

    // 4. Determinar categoria de presupuesto
    let clasificacion = "";
    if (costoPorPersona > 300) {
        clasificacion = "lujo";
    } else if (costoPorPersona >= 100) {
        clasificacion = "estandar";
    } else {
        clasificacion = "economico";
    }

    return {
        costo_total: Number(costoTotalConImpuesto.toFixed(2)),
        costo_por_persona: costoPorPersona,
        clasificacion: clasificacion,
        explicacion: `Suma total con impuesto (${impuestoPorcentaje}\%):${costoTotalConImpuesto.toFixed(2)}. Redondeado a 2 decimales por persona.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularPresupuestoViaje([150.75, 80.50, 45.20], 2, 12);
console.log(caso1);

console.log("\n=== Caso Borde (Lista Vacia) ===");
const caso2 = calcularPresupuestoViaje([], 2, 12);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `gastos: [150.75, 80.50, 45.20]`, `personas: 2`, `impuestoPorcentaje: 12`
- **Resultado obtenido:**
  ```json
  {
    "costo_total": 309.62,
    "costo_por_persona": 154.81,
    "clasificacion": "estandar",
    "explicacion": "Suma total con impuesto (12%): 309.62. Redondeado a 2 decimales por persona."
  }
  ```

### Caso borde
- **Entrada:** `gastos: []`, `personas: 2`, `impuestoPorcentaje: 12`
- **Resultado obtenido:**
  ```json
  {
    "costo_total": 0,
    "costo_por_persona": 0,
    "clasificacion": "invalido",
    "explicacion": "La lista de gastos esta vacia o el numero de personas no es valido."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-010/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

En este reto calcule la suma de los gastos de viaje, agregue la tasa de impuesto correspondiente y dividi el resultado entre la cantidad de viajeros. Para asegurar la precision decimal requerida en operaciones financieras, use `toFixed(2)` y converti el resultado nuevamente a numero.