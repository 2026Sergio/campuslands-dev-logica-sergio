# Plantilla de solucion - Probabilidad basica (Ping Pong)

## Analisis del problema

El objetivo es calcular la probabilidad de victoria de un jugador de ping pong analizando el historial de puntos o saques ganados (casos favorables) frente al total de jugadas o puntos disputados (casos posibles). A partir del porcentaje obtenido, se determina el nivel de favoritismo en un partido.

## Reglas aplicadas

1. **Validacion de datos vacios/invalidos (Caso Borde):** Si el total de jugadas es menor o igual a cero, o los casos favorables son negativos/superiores al total, la funcion devuelve un estado `"invalido"`.
2. **Calculo de probabilidad:** Se aplica la regla de Laplace: `probabilidad = (casosFavorables / totalJugadas) * 100`.
3. **Clasificacion de favoritismo:**
   - **Alto:** Probabilidad mayor o igual al 60%.
   - **Moderado:** Probabilidad entre el 40% y 59%.
   - **Bajo:** Probabilidad menor al 40%.

## Solucion implementada

```javascript
/**
 * Ejercicio 012 - Logica Matematica: Probabilidad Basica (Ping Pong)
 */

function calcularProbabilidadVictoria(puntosGanados, totalPuntos) {
    // 1. Validar caso borde
    if (typeof totalPuntos !== 'number' || totalPuntos <= 0 || 
        typeof puntosGanados !== 'number' || puntosGanados < 0 || 
        puntosGanados > totalPuntos) {
        return {
            probabilidad_porcentaje: 0,
            clasificacion: "invalido",
            explicacion: "Los datos ingresados no son validos para el calculo de probabilidad."
        };
    }

    // 2. Calcular probabilidad
    const probabilidad = (puntosGanados / totalPuntos) * 100;
    const probabilidadFormateada = Number(probabilidad.toFixed(2));

    // 3. Determinar nivel de favoritismo
    let clasificacion = "";
    if (probabilidadFormateada >= 60) {
        clasificacion = "alto";
    } else if (probabilidadFormateada >= 40) {
        clasificacion = "moderado";
    } else {
        clasificacion = "bajo";
    }

    return {
        probabilidad_porcentaje: probabilidadFormateada,
        clasificacion: clasificacion,
        explicacion: `Se ganaron ${puntosGanados} de ${totalPuntos} puntos posibles (${probabilidadFormateada}% de probabilidad).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularProbabilidadVictoria(14, 20);
console.log(caso1);

console.log("\n=== Caso Borde (Datos Invalidos) ===");
const caso2 = calcularProbabilidadVictoria(-2, 10);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `puntosGanados: 14`, `totalPuntos: 20`
- **Resultado obtenido:**
  ```json
  {
    "probabilidad_porcentaje": 70,
    "clasificacion": "alto",
    "explicacion": "Se ganaron 14 de 20 puntos posibles (70% de probabilidad)."
  }
  ```

### Caso borde
- **Entrada:** `puntosGanados: -2`, `totalPuntos: 10`
- **Resultado obtenido:**
  ```json
  {
    "probabilidad_porcentaje": 0,
    "clasificacion": "invalido",
    "explicacion": "Los datos ingresados no son valid