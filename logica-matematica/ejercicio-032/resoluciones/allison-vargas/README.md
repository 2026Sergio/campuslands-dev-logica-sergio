# Plantilla de solucion - Probabilidad Basica (Pingpong)

## Analisis del problema

En este ejercicio calculamos la probabilidad teórica de un evento en un torneo de pingpong (por ejemplo, la probabilidad de que un jugador con un nivel de habilidad o categoría específica gane un set o avance de ronda), aplicando la fórmula clásica de probabilidad Laplace:

$$\text{Probabilidad} = \frac{\text{Casos Favorables}}{\text{Casos Totales}}$$

Además, se debe validar que los datos no contengan valores negativos o divisiones por cero, y clasificar el resultado según la probabilidad obtenida.

## Reglas aplicadas

1. **Validación de Entradas (Casos Bordes):**
   - Si los casos totales son $0$, o cualquiera de los valores no es un número válido o es negativo, el resultado debe ser `0%` con la clasificación `"invalido"`.
   - Si los casos favorables son mayores a los totales, se considera una entrada inválida.
2. **Cálculo de Probabilidad:**
   - Expresar el resultado final en porcentaje ($\%$), redondeado a dos decimales si es necesario.
3. **Clasificación:**
   - **Alta:** Probabilidad $\ge 60\%$.
   - **Media:** Probabilidad entre $30\%$ y $59.99\%$.
   - **Baja:** Probabilidad $< 30\%$.

## Solucion implementada

```javascript
/**
 * Ejercicio 032 - Logica Matematica: Probabilidad Basica (Pingpong)
 */

function calcularProbabilidadPingpong(favorables, totales) {
    // 1. Validar entradas
    if (
        typeof favorables !== 'number' || 
        typeof totales !== 'number' || 
        totales <= 0 || 
        favorables < 0 || 
        favorables > totales
    ) {
        return {
            probabilidad_porcentaje: "0%",
            clasificacion: "invalido",
            explicacion: "Los datos ingresados no son validos para calcular la probabilidad."
        };
    }

    // 2. Calcular probabilidad
    const probabilidad = (favorables / totales) * 100;
    const porcentajeFormateado = `${probabilidad.toFixed(2)}%`;

    // 3. Clasificar el resultado
    let clasificacion = "";
    if (probabilidad >= 60) {
        clasificacion = "alta";
    } else if (probabilidad >= 30) {
        clasificacion = "media";
    } else {
        clasificacion = "baja";
    }

    return {
        probabilidad_porcentaje: porcentajeFormateado,
        clasificacion: clasificacion,
        explicacion: `De ${totales} eventos posibles,${favorables} son favorables.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularProbabilidadPingpong(15, 20);
console.log(caso1);

console.log("\n=== Caso Borde (Total igual a cero) ===");
const caso2 = calcularProbabilidadPingpong(5, 0);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `favorables: 15`, `totales: 20`
- **Proceso:**
  - $\text{Probabilidad} = \frac{15}{20} \times 100 = 75\%$
  - Como es $\ge 60\% \rightarrow$ **alta**.
- **Resultado obtenido:**
  ```json
  {
    "probabilidad_porcentaje": "75.00%",
    "clasificacion": "alta",
    "explicacion": "De 20 eventos posibles, 15 son favorables."
  }
  ```

### Caso borde
- **Entrada:** `favorables: 5`, `totales: 0`
- **Resultado obtenido:**
  ```json
  {
    "probabilidad_porcentaje": "0%",
    "clasificacion": "invalido",
    "explicacion": "Los datos ingresados no son validos para calcular la probabilidad."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-032/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Se implementó una función que recibe los casos favorables y los totales para calcular la probabilidad porcentual. Maneja adecuadamente casos donde la división por cero no es posible o los valores resultan incoherentes.