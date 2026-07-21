# Plantilla de solucion - Patrones de puntuacion (Peliculas de Ciencia Ficcion)

## Analisis del problema

En las plataformas de cine, las películas de ciencia ficción reciben calificaciones de diferentes críticos y espectadores. Para determinar si una película es aclamada por la crítica o si genera división de opiniones, se analiza el patrón de sus calificaciones puntuadas de 1 a 10, descartando valores extremos o fuera de rango y calculando el puntaje ponderado final.

## Reglas aplicadas

1. **Validación de Entradas (Caso Borde):**
   - Si la lista de puntuaciones está vacía, no es un arreglo o todas las puntuaciones están fuera de la escala permitida (1 a 10), la respuesta es `"invalido"`.
2. **Filtrado de Calificaciones:**
   - Solo se toman en cuenta las calificaciones que están entre 1 y 10 (inclusive). Las notas fuera de este rango se ignoran.
3. **Cálculo de Promedio y Patrón:**
   - **Promedio ajustado:** Se suman las puntuaciones válidas y se dividen entre el total de calificaciones válidas.
   - **Evaluación de Consistencia:** Se identifica la nota más alta y la más baja entre las válidas. Si la diferencia es mayor a 4 puntos, existe una alta discrepancia en la opinión.
4. **Clasificación del Film:**
   - **Obra maestra:** Promedio mayor o igual a $8.5$.
   - **De culto:** Promedio entre $7.0$ y $8.4$.
   - **Controvertida:** Si la diferencia entre la nota más alta y la más baja es mayor a $4$, independientemente del promedio.
   - **En desarrollo:** Promedio menor a $7.0$.

## Solucion implementada

```javascript
/**
 * Ejercicio 028 - Logica Matematica: Patrones de Puntuacion (Peliculas de Ciencia Ficcion)
 */

function analizarPuntuacionPelicula(evaluaciones) {
    // 1. Validar si la entrada es un arreglo
    if (!Array.isArray(evaluaciones) || evaluaciones.length === 0) {
        return {
            promedio: 0,
            nota_maxima: 0,
            nota_minima: 0,
            clasificacion: "invalido",
            explicacion: "La lista de evaluaciones debe ser un arreglo no vacio."
        };
    }

    // 2. Filtrar puntuaciones validas (entre 1 y 10)
    const validas = [];
    for (let i = 0; i < evaluaciones.length; i++) {
        const nota = evaluaciones[i];
        if (typeof nota === 'number' && !isNaN(nota) && nota >= 1 && nota <= 10) {
            validas.push(nota);
        }
    }

    if (validas.length === 0) {
        return {
            promedio: 0,
            nota_maxima: 0,
            nota_minima: 0,
            clasificacion: "invalido",
            explicacion: "No se encontraron calificaciones validas dentro del rango de 1 a 10."
        };
    }

    // 3. Procesar datos (suma, maximo y minimo)
    let suma = 0;
    let max = validas[0];
    let min = validas[0];

    for (let i = 0; i < validas.length; i++) {
        const nota = validas[i];
        suma += nota;
        if (nota > max) max = nota;
        if (nota < min) min = nota;
    }

    const promedio = Number((suma / validas.length).toFixed(2));
    const diferencia = max - min;

    // 4. Determinar clasificacion
    let clasificacion = "";
    if (diferencia > 4) {
        clasificacion = "controvertida";
    } else if (promedio >= 8.5) {
        clasificacion = "obra maestra";
    } else if (promedio >= 7.0) {
        clasificacion = "de culto";
    } else {
        clasificacion = "en desarrollo";
    }

    return {
        promedio: promedio,
        nota_maxima: max,
        nota_minima: min,
        clasificacion: clasificacion,
        explicacion: `Se analizaron ${validas.length} opiniones validas. Promedio: ${promedio}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarPuntuacionPelicula([9, 8.5, 9.5, 10, 8]);
console.log(caso1);

console.log("\n=== Caso Borde (Puntuaciones fuera de rango) ===");
const caso2 = analizarPuntuacionPelicula([-5, 15, 0]);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `[9, 8.5, 9.5, 10, 8]`
- **Proceso:**
  - Puntuaciones válidas = $5$. Suma = $45$.
  - Promedio = $45 / 5 = 9.0$.
  - Máximo = $10$, Mínimo = $8$. Diferencia = $2$.
  - Como el promedio es $\ge 8.5$ y la diferencia $\le 4 \rightarrow$ **obra maestra**.
- **Resultado obtenido:**
  ```json
  {
    "promedio": 9,
    "nota_maxima": 10,
    "nota_minima": 8,
    "clasificacion": "obra maestra",
    "explicacion": "Se analizaron 5 opiniones validas. Promedio: 9."
  }
  ```

### Caso borde
- **Entrada:** `[-5, 15, 0]`
- **Resultado obtenido:**
  ```json
  {
    "promedio": 0,
    "nota_maxima": 0,
    "nota_minima": 0,
    "clasificacion": "invalido",
    "explicacion": "No se encontraron calificaciones validas dentro del rango de 1 a 10."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-028/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Armamos un programa que revisa las opiniones de una película de ciencia ficción. Descarta los votos con números inválidos, calcula la puntuación promedio y determina si la película se considera una obra maestra, un clásico o si genera opiniones cruzadas entre el público.