# Plantilla de solucion - Porcentajes y proporciones (Ranking de Futbol Sala)

## Analisis del problema

En torneos y ligas de fútbol sala, el cálculo de rendimiento y posicionamiento en la tabla depende de la proporción de puntos obtenidos respecto al total de puntos disputados (porcentaje de efectividad), además de la diferencia de goles como criterio de desempate. El objetivo es recibir las estadísticas de un equipo (partidos jugados, ganados, empatados, perdidos, goles a favor y goles en contra), calcular los porcentajes de efectividad y clasificar su rendimiento en la tabla.

## Reglas aplicadas

1. **Validación de Entradas (Caso Borde):**
   - Si la cantidad de partidos jugados es $0$, menor a cero o no coincide con la suma de ganados + empatados + perdidos, la solución retorna una clasificación `"invalido"`.
2. **Cálculo de Puntos y Proporciones:**
   - Cada partido ganado otorga $3$ puntos y cada empatado $1$ punto.
   - Puntos máximos posibles = $\text{partidos\_jugados} \times 3$.
   - **Porcentaje de Efectividad:** $\left(\frac{\text{puntos\_obtenidos}}{\text{puntos\_maximos}}\right) \times 100$.
   - **Diferencia de Goles:** $\text{goles\_favor} - \text{goles\_contra}$.
3. **Clasificación del Rendimiento:**
   - **Lider:** Efectividad $\ge 75\%$.
   - **Competitivo:** Efectividad entre $45\%$ y $74.99\%$.
   - **En riesgo:** Efectividad $< 45\%$.

## Solucion implementada

```javascript
/**
 * Ejercicio 022 - Logica Matematica: Porcentajes y Proporciones (Ranking Futbol Sala)
 */

function calcularRankingFutbolSala(estadisticas) {
    // 1. Validar objeto de entrada
    if (!estadisticas || typeof estadisticas !== 'object') {
        return {
            puntos_totales: 0,
            efectividad: 0,
            clasificacion: "invalido",
            explicacion: "No se proporcionaron las estadisticas del equipo."
        };
    }

    const { jugados, ganados, empatados, perdidos, golesFavor, golesContra } = estadisticas;

    // Validar numeros y coherencia de partidos
    if (typeof jugados !== 'number' || jugados <= 0 ||
        typeof ganados !== 'number' || ganados < 0 ||
        typeof empatados !== 'number' || empatados < 0 ||
        typeof perdidos !== 'number' || perdidos < 0 ||
        (ganados + empatados + perdidos !== jugados)) {
        return {
            puntos_totales: 0,
            efectividad: 0,
            clasificacion: "invalido",
            explicacion: "Los datos de partidos jugados no son coherentes o son invalidos."
        };
    }

    // 2. Calcular puntos y proporciones
    const puntosObtenidos = (ganados * 3) + (empatados * 1);
    const puntosMaximos = jugados * 3;
    const porcentajeEfectividad = Number(((puntosObtenidos / puntosMaximos) * 100).toFixed(2));
    const diferenciaGoles = (golesFavor || 0) - (golesContra || 0);

    // 3. Clasificar rendimiento
    let clasificacion = "";
    if (porcentajeEfectividad >= 75) {
        clasificacion = "lider";
    } else if (porcentajeEfectividad >= 45) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "en riesgo";
    }

    return {
        puntos_totales: puntosObtenidos,
        efectividad: porcentajeEfectividad,
        diferencia_goles: diferenciaGoles,
        clasificacion: clasificacion,
        explicacion: `Equipo obtuvo ${puntosObtenidos} de ${puntosMaximos} pts posibles (${porcentajeEfectividad}% de efectividad).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularRankingFutbolSala({
    jugados: 10,
    ganados: 7,
    empatados: 2,
    perdidos: 1,
    golesFavor: 25,
    golesContra: 12
});
console.log(caso1);

console.log("\n=== Caso Borde (Datos incoherentes) ===");
const caso2 = calcularRankingFutbolSala({
    jugados: 5,
    ganados: 4,
    empatados: 2,
    perdidos: 1, // 4+2+1 = 7 != 5
    golesFavor: 10,
    golesContra: 10
});
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `{ jugados: 10, ganados: 7, empatados: 2, perdidos: 1, golesFavor: 25, golesContra: 12 }`
- **Proceso:**
  - Suma de partidos: $7 + 2 + 1 = 10$ (Válido).
  - Puntos obtenidos = $(7 \times 3) + (2 \times 1) = 23$ pts.
  - Puntos máximos = $10 \times 3 = 30$ pts.
  - Efectividad = $(23 / 30) \times 100 = 76.67\%$.
- **Resultado obtenido:**
  ```json
  {
    "puntos_totales": 23,
    "efectividad": 76.67,
    "diferencia_goles": 13,
    "clasificacion": "lider",
    "explicacion": "Equipo obtuvo 23 de 30 pts posibles (76.67% de efectividad)."
  }
  ```

### Caso borde
- **Entrada:** `{ jugados: 5, ganados: 4, empatados: 2, perdidos: 1 }`
- **Resultado obtenido:**
  ```json
  {
    "puntos_totales": 0,
    "efectividad": 0,
    "clasificacion": "invalido",
    "explicacion": "Los datos de partidos jugados no son coherentes o son invalidos."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-022/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Diseñamos una fórmula para calcular el rendimiento de un equipo de fútbol sala. Suma los puntos ganados según los partidos jugados, calcula el porcentaje de efectividad de todos los puntos posibles y determina si el equipo va como líder, si es competitivo o si está en riesgo de bajar en la tabla.