# Plantilla de solucion - Operaciones aritmeticas controladas (Videojuegos Competitivos)

## Analisis del problema

En el cálculo de puntajes de eSports y torneos competitivos, es común aplicar operaciones aritméticas condicionales (como multiplicadores de racha, penalizaciones por inactividad o bonos por nivel) sobre las puntuaciones base de cada jugador. El objetivo es procesar una lista de puntajes, aplicar los ajustes aritméticos controlados según rangos definidos y determinar el puntaje final promedio o acumulado.

## Reglas aplicadas

1. **Validación de Entradas (Caso Borde):**
   - Si la lista de puntajes no es un arreglo, está vacía o contiene valores no numéricos/negativos, la solución retorna una clasificación `"invalido"`.
2. **Operaciones Controladas por Puntaje Individual:**
   - **Puntaje $< 50$ (Rendimiento Bajo):** Se aplica una penalización resting un $10\%$ o restando una penalización fija definida.
   - **Puntaje entre $50$ y $100$ (Rendimiento Estándar):** Se suma un bono estándar de $10$ puntos.
   - **Puntaje $> 100$ (Rendimiento Alto / MVP):** Se aplica un multiplicador de $1.2$ ($+20\%$).
3. **Puntaje Final y Clasificación del Equipo:**
   - Se calcula el promedio final ajustado del equipo o jugador.
   - **Elite:** Promedio mayor o igual a $100$.
   - **Competitivo:** Promedio entre $60$ y $99$.
   - **En desarrollo:** Promedio menor a $60$.

## Solucion implementada

```javascript
/**
 * Ejercicio 021 - Logica Matematica: Operaciones Aritmeticas Controladas (Videojuegos Competitivos)
 */

function calcularPuntajeCompetitivo(puntajesBase, bonoEstandard = 10, penalizacion = 5) {
    // 1. Validar entradas
    if (!Array.isArray(puntajesBase) || puntajesBase.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "invalido",
            explicacion: "La lista de puntajes debe ser un arreglo no vacio."
        };
    }

    const puntajesAjustados = [];
    let sumaPuntajes = 0;

    // 2. Procesar cada puntaje con reglas aritmeticas controladas
    for (let i = 0; i < puntajesBase.length; i++) {
        const p = puntajesBase[i];

        if (typeof p !== 'number' || isNaN(p) || p < 0) {
            return {
                puntaje_final: 0,
                clasificacion: "invalido",
                explicacion: "Se encontraron puntajes invalidos (deben ser numeros mayores o iguales a 0)."
            };
        }

        let puntajeCalculado = p;

        if (p < 50) {
            // Penalizacion controlada
            puntajeCalculado = Math.max(0, p - penalizacion);
        } else if (p <= 100) {
            // Bono estandar
            puntajeCalculado = p + bonoEstandard;
        } else {
            // Multiplicador alto rendimiento (1.2x)
            puntajeCalculado = Math.round(p * 1.2);
        }

        puntajesAjustados.push(puntajeCalculado);
        sumaPuntajes += puntajeCalculado;
    }

    // 3. Calcular promedio final
    const promedioFinal = Math.round(sumaPuntajes / puntajesBase.length);

    // 4. Clasificar rendimiento
    let clasificacion = "";
    if (promedioFinal >= 100) {
        clasificacion = "elite";
    } else if (promedioFinal >= 60) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "en desarrollo";
    }

    return {
        puntajes_ajustados: puntajesAjustados,
        puntaje_final: promedioFinal,
        clasificacion: clasificacion,
        explicacion: `Se procesaron ${puntajesBase.length} partidas. Promedio ajustado: ${promedioFinal}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularPuntajeCompetitivo([40, 60, 85, 120]);
console.log(caso1);

console.log("\n=== Caso Borde (Valores invalidos) ===");
const caso2 = calcularPuntajeCompetitivo([50, -10, "100"]);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `puntajesBase: [40, 60, 85, 120]`, `bonoEstandard: 10`, `penalizacion: 5`
- **Proceso:**
  - $40 < 50 \rightarrow 40 - 5 = 35$
  - $60 \le 100 \rightarrow 60 + 10 = 70$
  - $85 \le 100 \rightarrow 85 + 10 = 95$
  - $120 > 100 \rightarrow 120 \times 1.2 = 144$
  - Suma = $344$. Promedio = $344 / 4 = 86$.
- **Resultado obtenido:**
  ```json
  {
    "puntajes_ajustados": [35, 70, 95, 144],
    "puntaje_final": 86,
    "clasificacion": "competitivo",
    "explicacion": "Se procesaron 4 partidas. Promedio ajustado: 86."
  }
  ```

### Caso borde
- **Entrada:** `puntajesBase: [50, -10, "100"]`
- **Resultado obtenido:**
  ```json
  {
    "puntaje_final": 0,
    "clasificacion": "invalido",
    "explicacion": "Se encontraron puntajes invalidos (deben ser numeros mayores o iguales a 0)."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-021/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Se aplicó una estructura condicional por tramos para calcular modificaciones aritméticas diferenciadas (penalizaciones, bonos fijos y multiplicadores porcentuales) para partidas competitivas. Se incluyeron controles estrictos de tipos para prevenir inconsistencias en el cálculo.