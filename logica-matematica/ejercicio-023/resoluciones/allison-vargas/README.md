# Plantilla de solucion - Promedios y medianas (Torneo de eSports)

## Analisis del problema

En los torneos de eSports, para saber si el desempeño de un jugador o equipo fue constante, no basta solo con el promedio, porque una sola partida con un puntaje muy alto o muy bajo puede alterar el resultado. Por eso, también se calcula la mediana (el valor que queda justo en el centro al ordenar las puntuaciones) para tener una medida más real y justa.

## Reglas aplicadas

1. **Validación de Entradas (Caso Borde):**
   - Si la lista de puntajes está vacía, no es una lista o contiene valores que no son números positivos, el programa responde con clasificación `"invalido"`.
2. **Cálculo del Promedio:**
   - Se suman todas las puntuaciones de las partidas y se divide entre el total de partidas jugadas.
3. **Cálculo de la Mediana:**
   - Se ordenan los puntajes de menor a mayor.
   - Si la cantidad de partidas es impar, la mediana es el número que queda exactamente en la mitad.
   - Si es par, se toma el promedio de los dos valores centrales.
4. **Clasificación según la Mediana:**
   - **Consistente:** Mediana mayor o igual a $75$.
   - **En progreso:** Mediana entre $50$ y $74$.
   - **Irregular:** Mediana menor a $50$.

## Solucion implementada

```javascript
/**
 * Ejercicio 023 - Logica Matematica: Promedios y Medianas (Torneo de eSports)
 */

function analizarPuntajesTorneo(puntajes) {
    // 1. Validar entradas
    if (!Array.isArray(puntajes) || puntajes.length === 0) {
        return {
            promedio: 0,
            mediana: 0,
            clasificacion: "invalido",
            explicacion: "La lista de puntajes debe ser un arreglo no vacio."
        };
    }

    // Verificar que todos los datos sean numeros validos
    for (let i = 0; i < puntajes.length; i++) {
        const p = puntajes[i];
        if (typeof p !== 'number' || isNaN(p) || p < 0) {
            return {
                promedio: 0,
                mediana: 0,
                clasificacion: "invalido",
                explicacion: "Se encontraron puntajes invalidos en la lista."
            };
        }
    }

    // 2. Calcular el promedio
    const sumaTotal = puntajes.reduce((acum, val) => acum + val, 0);
    const promedio = Number((sumaTotal / puntajes.length).toFixed(2));

    // 3. Calcular la mediana
    // Creamos una copia ordenada de menor a mayor
    const ordenados = [...puntajes].sort((a, b) => a - b);
    const total = ordenados.length;
    const mitad = Math.floor(total / 2);
    let mediana = 0;

    if (total % 2 === 0) {
        // Cantidad par: promedio de los dos datos del centro
        mediana = (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    } else {
        // Cantidad impar: el dato del centro
        mediana = ordenados[mitad];
    }
    mediana = Number(mediana.toFixed(2));

    // 4. Clasificar segun la mediana
    let clasificacion = "";
    if (mediana >= 75) {
        clasificacion = "consistente";
    } else if (mediana >= 50) {
        clasificacion = "en progreso";
    } else {
        clasificacion = "irregular";
    }

    return {
        promedio: promedio,
        mediana: mediana,
        clasificacion: clasificacion,
        explicacion: `Se analizaron ${total} partidas. Promedio: ${promedio}, Mediana:${mediana}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarPuntajesTorneo([45, 80, 70, 90, 85]);
console.log(caso1);

console.log("\n=== Caso Borde (Lista vacia o invalida) ===");
const caso2 = analizarPuntajesTorneo([]);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `[45, 80, 70, 90, 85]`
- **Proceso:**
  - Suma = $370$. Promedio = $370 / 5 = 74$.
  - Ordenados = `[45, 70, 80, 85, 90]`.
  - Como son $5$ datos (impar), el centro es la posición $3 \rightarrow 80$.
  - Mediana = $80$.
- **Resultado obtenido:**
  ```json
  {
    "promedio": 74,
    "mediana": 80,
    "clasificacion": "consistente",
    "explicacion": "Se analizaron 5 partidas. Promedio: 74, Mediana: 80."
  }
  ```

### Caso borde
- **Entrada:** `[]`
- **Resultado obtenido:**
  ```json
  {
    "promedio": 0,
    "mediana": 0,
    "clasificacion": "invalido",
    "explicacion": "La lista de puntajes debe ser un arreglo no vacio."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-023/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Creamos un programa que analiza los puntos de un torneo calculando el promedio y la mediana. Ordena las puntuaciones para encontrar el valor central y determina si el jugador mantiene un nivel constante, regular o bajo en sus partidas.