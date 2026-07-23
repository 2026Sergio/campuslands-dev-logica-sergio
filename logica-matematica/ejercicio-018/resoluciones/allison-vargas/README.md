# Plantilla de solucion - Normalizacion de puntajes (Soldadura)

## Analisis del problema

El objetivo es escalar o normalizar un conjunto de puntuaciones de calidad de soldadura (medidas en una escala arbitraria de puntos) a una escala estándar de 0 a 100 puntos. La normalización Min-Max ajusta las notas para comparar equitativamente la precisión de las uniones y cordones de soldadura entre diferentes evaluadores.

## Reglas aplicadas

1. **Validación de datos inválidos (Caso Borde):** Si el listado de puntajes está vacío, no es un arreglo, contiene valores no numéricos o si todos los valores son iguales ($\text{Max} = \text{Min}$), se retorna un estado `"invalido"`.
2. **Fórmula de Normalización Min-Max:**
   $$\text{Puntaje Normalizado} = \frac{\text{Puntaje} - \text{Mínimo}}{\text{Máximo} - \text{Mínimo}} \times 100$$
3. **Clasificación por estándar de calidad (según promedio normalizado):**
   - **Excelente:** Promedio normalizado mayor o igual a 80 puntos.
   - **Aceptable:** Promedio normalizado entre 50 y 79 puntos.
   - **Deficiente:** Promedio normalizado menor a 50 puntos.

## Solucion implementada

```javascript
/**
 * Ejercicio 018 - Logica Matematica: Normalizacion de Puntajes (Soldadura)
 */

function normalizarPuntajesSoldadura(puntajes) {
    // 1. Validar caso borde: arreglo vacio, no valido o con datos no numericos
    if (!Array.isArray(puntajes) || puntajes.length === 0 || 
        !puntajes.every(p => typeof p === 'number' && !isNaN(p) && p >= 0)) {
        return {
            puntajes_normalizados: [],
            promedio_normalizado: 0,
            clasificacion: "invalido",
            explicacion: "El listado de puntajes debe ser un arreglo no vacio con numeros validos."
        };
    }

    const minimo = Math.min(...puntajes);
    const maximo = Math.max(...puntajes);

    // Validar division por cero si todos los valores son iguales
    if (maximo === minimo) {
        return {
            puntajes_normalizados: [],
            promedio_normalizado: 0,
            clasificacion: "invalido",
            explicacion: "No se puede normalizar un conjunto con un solo valor o con valores identicos."
        };
    }

    // 2. Aplicar normalizacion Min-Max
    const puntajesNormalizados = [];
    let suma = 0;

    for (let i = 0; i < puntajes.length; i++) {
        const valorNormalizado = Number((((puntajes[i] - minimo) / (maximo - minimo)) * 100).toFixed(2));
        puntajesNormalizados.push(valorNormalizado);
        suma += valorNormalizado;
    }

    const promedioNormalizado = Number((suma / puntajesNormalizados.length).toFixed(2));

    // 3. Clasificar calidad de la soldadura
    let clasificacion = "";
    if (promedioNormalizado >= 80) {
        clasificacion = "excelente";
    } else if (promedioNormalizado >= 50) {
        clasificacion = "aceptable";
    } else {
        clasificacion = "deficiente";
    }

    return {
        puntajes_normalizados: puntajesNormalizados,
        promedio_normalizado: promedioNormalizado,
        clasificacion: clasificacion,
        explicacion: `Se normalizaron ${puntajes.length} puntajes de soldadura a escala 0-100. Promedio:${promedioNormalizado}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = normalizarPuntajesSoldadura([150, 200, 300, 250, 400]);
console.log(caso1);

console.log("\n=== Caso Borde (Valores iguales) ===");
const caso2 = normalizarPuntajesSoldadura([100, 100, 100]);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `puntajes: [150, 200, 300, 250, 400]`
- **Proceso:** Mínimo = 150, Máximo = 400. Rango = 250.
- **Resultado obtenido:**
  ```json
  {
    "puntajes_normalizados": [0, 20, 60, 40, 100],
    "promedio_normalizado": 44,
    "clasificacion": "deficiente",
    "explicacion": "Se normalizaron 5 puntajes de soldadura a escala 0-100. Promedio: 44."
  }
  ```

### Caso borde
- **Entrada:** `puntajes: [100, 100, 100]`
- **Resultado obtenido:**
  ```json
  {
    "puntajes_normalizados": [],
    "promedio_normalizado": 0,
    "clasificacion": "invalido",
    "explicacion": "No se puede normalizar un conjunto con un solo valor o con valores identicos."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-018/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

En esta solución implementé el algoritmo de normalización Min-Max para trasladar puntuaciones con diferentes escalas a un rango unificado de 0 a 100. Se añadió una verificación previa para evitar divisiones por cero cuando la diferencia entre el máximo y el mínimo es cero.