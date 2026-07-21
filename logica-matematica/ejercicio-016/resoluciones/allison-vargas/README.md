# Plantilla de solucion - Presupuestos y descuentos (Animacion 3D)

## Analisis del problema

El objetivo es calcular el costo total de un proyecto de animación 3D basándose en la cantidad de segundos a animar y el costo por segundo. Dependiendo del volumen del proyecto (costo base total), se debe aplicar un porcentaje de descuento comercial para fidelizar al cliente.

## Reglas aplicadas

1. **Validacion de datos invalidos (Caso Borde):** Si los segundos de animación o el costo por segundo son menores o iguales a cero, o no son valores numéricos, la función retorna un estado `"invalido"`.
2. **Cálculo del costo base:** $\text{Costo Base} = \text{Segundos} \times \text{Costo por Segundo}$.
3. **Aplicación de descuentos (escalonado):**
   - **Proyectos grandes (Costo base >= $2000):** Descuento del 20%.
   - **Proyectos medianos (Costo base >= $1000):** Descuento del 10%.
   - **Proyectos pequeños (Costo base < $1000):** 0% de descuento.
4. **Cálculo final:** $\text{Presupuesto Final} = \text{Costo Base} - \text{Valor del Descuento}$.

## Solucion implementada

```javascript
/**
 * Ejercicio 016 - Logica Matematica: Presupuestos y Descuentos (Animacion 3D)
 */

function calcularPresupuestoAnimacion(segundos, costoPorSegundo) {
    // 1. Validar caso borde: valores no numericos o menores/iguales a cero
    if (typeof segundos !== 'number' || segundos <= 0 || typeof costoPorSegundo !== 'number' || costoPorSegundo <= 0) {
        return {
            presupuesto_final: 0,
            clasificacion: "invalido",
            explicacion: "Valores invalidos. Los segundos y el costo deben ser numeros mayores a cero."
        };
    }

    // 2. Calcular costo base
    const costoBase = segundos * costoPorSegundo;
    let porcentajeDescuento = 0;

    // 3. Aplicar reglas de descuento escalonado
    if (costoBase >= 2000) {
        porcentajeDescuento = 20;
    } else if (costoBase >= 1000) {
        porcentajeDescuento = 10;
    }

    const valorDescuento = (costoBase * porcentajeDescuento) / 100;
    const presupuestoFinal = costoBase - valorDescuento;

    // 4. Determinar clasificacion del presupuesto
    let clasificacion = porcentajeDescuento > 0 ? "con_descuento" : "precio_estandar";

    return {
        presupuesto_final: presupuestoFinal,
        clasificacion: clasificacion,
        explicacion: `Costo base: $${costoBase}. Se aplico un descuento del ${porcentajeDescuento}% ($${valorDescuento}), resultando en$${presupuestoFinal}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal (Con descuento del 10%) ===");
const caso1 = calcularPresupuestoAnimacion(60, 25);
console.log(caso1);

console.log("\n=== Caso Normal (Sin descuento) ===");
const caso2 = calcularPresupuestoAnimacion(10, 45);
console.log(caso2);

console.log("\n=== Caso Borde (Valores Invalidos) ===");
const caso3 = calcularPresupuestoAnimacion(-15, 30);
console.log(caso3);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `segundos: 60`, `costoPorSegundo: 25`
- **Proceso:** Costo base = $1500. Al ser mayor o igual a $1000, aplica 10% de descuento ($150).
- **Resultado obtenido:**
  ```json
  {
    "presupuesto_final": 1350,
    "clasificacion": "con_descuento",
    "explicacion": "Costo base: $1500. Se aplico un descuento del 10% ($150), resultando en $1350."
  }
  ```

### Caso borde
- **Entrada:** `segundos: -15`, `costoPorSegundo: 30`
- **Resultado obtenido:**
  ```json
  {
    "presupuesto_final": 0,
    "clasificacion": "invalido",
    "explicacion": "Valores invalidos. Los segundos y el costo deben ser numeros mayores a cero."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-016/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Para resolver este reto definí un acumulador temporal para el costo base del renderizado. Luego, evalué este costo a través de una estructura condicional `if-else if` para determinar qué porcentaje de descuento correspondía aplicar. Finalmente, calculé el valor real del descuento y lo resté del costo base para obtener el presupuesto final exacto a presentar al cliente.