# Plantilla de solucion - Secuencias numericas (Playlist Musical)

## Analisis del problema

En las aplicaciones de música, el orden de las canciones según sus reproducciones o duración puede formar secuencias numéricas. El objetivo es analizar la duración (en segundos o minutos) de las canciones en una lista de reproducción para verificar si siguen un patrón ordenado (como una secuencia creciente, decreciente o constante), calcular la duración total acumulada y clasificar el ritmo de la playlist.

## Reglas aplicadas

1. **Validación de Entradas (Caso Borde):**
   - Si la playlist no es un arreglo, contiene menos de dos canciones o incluye duraciones menores o iguales a cero, la solución retorna una clasificación `"invalido"`.
2. **Identificación de la Secuencia:**
   - **Creciente:** Cada canción dura más que la anterior.
   - **Decreciente:** Cada canción dura menos que la anterior.
   - **Constante:** Todas las canciones duran exactamente lo mismo.
   - **Mixta:** No mantiene un patrón constante en toda la lista.
3. **Clasificación de la Playlist:**
   - **In crescendo:** Si la secuencia es estrictamente creciente.
   - **Fade out:** Si la secuencia es estrictamente decreciente.
   - **Uniforme:** Si todas las duraciones son iguales.
   - **Variada:** Si las duraciones no siguen una secuencia única.

## Solucion implementada

```javascript
/**
 * Ejercicio 027 - Logica Matematica: Secuencias Numericas (Playlist Musical)
 */

function analizarSecuenciaPlaylist(duraciones) {
    // 1. Validar entradas
    if (!Array.isArray(duraciones) || duraciones.length < 2) {
        return {
            duracion_total: 0,
            tipo_secuencia: "invalido",
            clasificacion: "invalido",
            explicacion: "La playlist debe contener al menos 2 canciones para analizar una secuencia."
        };
    }

    // Validar valores numéricos positivos
    for (let i = 0; i < duraciones.length; i++) {
        if (typeof duraciones[i] !== 'number' || isNaN(duraciones[i]) || duraciones[i] <= 0) {
            return {
                duracion_total: 0,
                tipo_secuencia: "invalido",
                clasificacion: "invalido",
                explicacion: "Se encontraron duraciones de canciones invalidas."
            };
        }
    }

    // 2. Analizar el patron de la secuencia y la suma total
    let esCreciente = true;
    let esDecreciente = true;
    let esConstante = true;
    let duracionTotal = duraciones[0];

    for (let i = 1; i < duraciones.length; i++) {
        duracionTotal += duraciones[i];

        if (duraciones[i] > duraciones[i - 1]) {
            esDecreciente = false;
            esConstante = false;
        } else if (duraciones[i] < duraciones[i - 1]) {
            esCreciente = false;
            esConstante = false;
        } else {
            esCreciente = false;
            esDecreciente = false;
        }
    }

    // 3. Determinar el tipo de secuencia y la clasificacion
    let tipoSecuencia = "";
    let clasificacion = "";

    if (esConstante) {
        tipoSecuencia = "constante";
        clasificacion = "uniforme";
    } else if (esCreciente) {
        tipoSecuencia = "creciente";
        clasificacion = "in crescendo";
    } else if (esDecreciente) {
        tipoSecuencia = "decreciente";
        clasificacion = "fade out";
    } else {
        tipoSecuencia = "mixta";
        clasificacion = "variada";
    }

    return {
        duracion_total: duracionTotal,
        tipo_secuencia: tipoSecuencia,
        clasificacion: clasificacion,
        explicacion: `La playlist dura ${duracionTotal} segundos y sigue una secuencia${tipoSecuencia}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarSecuenciaPlaylist([120, 150, 180, 210]);
console.log(caso1);

console.log("\n=== Caso Borde (Datos invalidos o insumos insuficientes) ===");
const caso2 = analizarSecuenciaPlaylist([180]);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `[120, 150, 180, 210]`
- **Proceso:**
  - Suma total = $120 + 150 + 180 + 210 = 660$ segundos.
  - Secuencia: $120 < 150 < 180 < 210$ (Cada canción dura más que la anterior).
  - Tipo de secuencia = `creciente`.
  - Clasificación = `in crescendo`.
- **Resultado obtenido:**
  ```json
  {
    "duracion_total": 660,
    "tipo_secuencia": "creciente",
    "clasificacion": "in crescendo",
    "explicacion": "La playlist dura 660 segundos y sigue una secuencia creciente."
  }
  ```

### Caso borde
- **Entrada:** `[180]`
- **Resultado obtenido:**
  ```json
  {
    "duracion_total": 0,
    "tipo_secuencia": "invalido",
    "clasificacion": "invalido",
    "explicacion": "La playlist debe contener al menos 2 canciones para analizar una secuencia."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-027/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Creamos un programa que analiza las canciones de una lista de reproducción. Revisa si la duración de los temas va aumentando, disminuyendo o se mantiene igual, suma el tiempo total de la lista y nos dice qué estilo o ritmo sigue la playlist.