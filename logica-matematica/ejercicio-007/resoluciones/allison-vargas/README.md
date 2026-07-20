# Plantilla de solucion - Secuencias Numericas (Playlist Musical)

## Analisis del problema

El objetivo es analizar una secuencia numerica correspondiente a las duraciones de canciones en una playlist musical. A partir de los datos de entrada, se calcula la media aritmetica de la secuencia, se le aplica un bono adicional y se restan las penalizaciones para obtener un puntaje final ajustado que determina la clasificacion de la playlist.

## Reglas aplicadas

1. **Validacion de datos vacios (Caso Borde):** Si la lista de duraciones esta vacia o no existe, el programa detiene el flujo y devuelve un puntaje de `0` con la clasificacion `"invalido"`.
2. **Calculo del promedio:** Se obtiene la suma total de las duraciones y se divide entre la cantidad de elementos de la lista.
3. **Ajuste de puntaje:** Se suma el bono y se resta la penalizacion utilizando la formula: `puntaje = promedio + bono - penalizacion`.
4. **Clasificacion por rango:**
   - **Competitivo:** Puntaje mayor o igual a 25
   - **Estandar:** Puntaje entre 15 y 24
   - **Basico:** Puntaje menor a 15

## Solucion implementada

```javascript
/**
 * (Playlist Musical)
 */

function calcularPuntajePlaylist(duraciones, bono, penalizacion) {
    // 1. Validar caso borde: lista vacia o nula
    if (!duraciones || duraciones.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "invalido",
            explicacion: "La lista de duraciones esta vacia o no es valida."
        };
    }

    // 2. Calcular el promedio de las duraciones de las canciones
    const suma = duraciones.reduce((acc, curr) => acc + curr, 0);
    const promedio = suma / duraciones.length;

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
const caso1 = calcularPuntajePlaylist([12, 18, 25, 30], 8, 3);
console.log(caso1);

console.log("\n=== Caso Borde (Lista Vacia) ===");
const caso2 = calcularPuntajePlaylist([], 8, 3);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `duraciones: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3`
- **Resultado obtenido:**
  ```json
  {
    "puntaje_final": 26,
    "clasificacion": "competitivo",
    "explicacion": "Se calculo el promedio (21.3), se sumo el bono (8) y se resto la penalizacion (3)."
  }
  ```

### Caso borde
- **Entrada:** `duraciones: []`, `bono: 8`, `penalizacion: 3`
- **Resultado obtenido:**
  ```json
  {
    "puntaje_final": 0,
    "clasificacion": "invalido",
    "explicacion": "La lista de duraciones esta vacia o no es valida."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-007/resoluciones/allison-vargas/`.
2. Si creaste el archivo `.js` independiente, ejecutalo con:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

En este ejercicio aprendi a organizar la informacion paso a paso. Primero reviso que los datos no vengan vacios para evitar fallos. Despues sumo las duraciones de las canciones para sacar la media, le agrego los puntos extra y le quito los puntos en contra. Con ese numero final le asigno la categoria a la playlist de forma rapida y clara.