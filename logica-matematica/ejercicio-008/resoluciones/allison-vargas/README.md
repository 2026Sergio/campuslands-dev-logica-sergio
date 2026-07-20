# Plantilla de solucion - Patrones de puntuacion (Peliculas de Ciencia Ficcion)

## Analisis del problema

El objetivo es analizar los patrones de puntuacion asignados a peliculas de ciencia ficcion. A partir de una lista de evaluaciones recibidas, se calcula la media de las puntuaciones, se añade un bono por critica favorable y se resta una penalizacion por fallos tecnicos o de guion para obtener el resultado final.

## Reglas aplicadas

1. **Validacion de datos vacios (Caso Borde):** Si la lista de puntuaciones esta vacia o no es valida, la funcion se detiene y devuelve un puntaje de `0` con clasificacion `"invalido"`.
2. **Calculo del promedio:** Se realiza la suma de todas las puntuaciones y se divide entre la cantidad total de evaluaciones.
3. **Ajuste de puntaje:** Se suma el bono y se resta la penalizacion siguiendo la regla: `puntaje = promedio + bono - penalizacion`.
4. **Clasificacion por rango:**
   - **Competitivo:** Puntaje mayor o igual a 25
   - **Estandar:** Puntaje entre 15 y 24
   - **Basico:** Puntaje menor a 15

## Solucion implementada

```javascript
/**
 * (Peliculas de Ciencia Ficcion)
 */

function calcularPuntajePelicula(puntuaciones, bono, penalizacion) {
    // 1. Validar caso borde: lista vacia o nula
    if (!puntuaciones || puntuaciones.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "invalido",
            explicacion: "La lista de puntuaciones esta vacia o no es valida."
        };
    }

    // 2. Calcular el promedio de las puntuaciones
    const suma = puntuaciones.reduce((acc, curr) => acc + curr, 0);
    const promedio = suma / puntuaciones.length;

    // 3. Aplicar reglas de bono y penalizacion
    const puntajeFinal = Math.round(promedio + bono - penalizacion);

    // 4. Determinar clasificacion segun el puntaje final
    let clasificacion = "";
    if (puntajeFinal >= 25) {
        clasificacion = "competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "estandar";
    } else {
        clasificacion = "basico";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Se calculo el promedio (${promedio.toFixed(1)}), se sumo el bono (${bono}) y se resto la penalizacion (${penalizacion}).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularPuntajePelicula([12, 18, 25, 30], 8, 3);
console.log(caso1);

console.log("\n=== Caso Borde (Lista Vacia) ===");
const caso2 = calcularPuntajePelicula([], 8, 3);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `puntuaciones: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3`
- **Resultado obtenido:**
  ```json
  {
    "puntaje_final": 26,
    "clasificacion": "competitivo",
    "explicacion": "Se calculo el promedio (21.3), se sumo el bono (8) y se resto la penalizacion (3)."
  }
  ```

### Caso borde
- **Entrada:** `puntuaciones: []`, `bono: 8`, `penalizacion: 3`
- **Resultado obtenido:**
  ```json
  {
    "puntaje_final": 0,
    "clasificacion": "invalido",
    "explicacion": "La lista de puntuaciones esta vacia o no es valida."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-008/resoluciones/allison-vargas/`.
2. Si creaste el archivo `.js` independiente, ejecutalo con:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Para resolver este ejercicio revise que la lista contuviera datos antes de hacer las operaciones. Despues sume los puntos recibidos por la pelicula para sacar su promedio, le agregue el bono de puntos y le reste los puntos en contra. Con el resultado final determine la categoria de la pelicula sin complicaciones.