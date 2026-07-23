# Plantilla de solucion - Velocidad, tiempo y distancia (Dibujo Digital)

## Analisis del problema

El objetivo es calcular la distancia recorrida por el trazo de un lápiz/pincel digital sobre un lienzo (en píxeles), la velocidad del trazo ($\text{px/s}$) o el tiempo invertido en dibujarlo (segundos), aplicando la relación fundamental de movimiento: $\text{Distancia} = \text{Velocidad} \times \text{Tiempo}$. A partir del resultado, se clasifica el ritmo del trazo.

## Reglas aplicadas

1. **Validación de datos inválidos (Caso Borde):** Si los parámetros de entrada son menores o iguales a cero o no son numéricos, la función retorna un estado `"invalido"`.
2. **Cálculo según el parámetro a hallar:**
   - **Distancia ($\text{px}$):** $\text{Velocidad} \times \text{Tiempo}$
   - **Velocidad ($\text{px/s}$):** $\text{Distancia} / \text{Tiempo}$
   - **Tiempo ($s$):** $\text{Distancia} / \text{Velocidad}$
3. **Clasificación del ritmo del trazo (basado en velocidad):**
   - **Rápido:** Velocidad mayor a $500\text{ px/s}$.
   - **Moderado:** Velocidad entre $200\text{ px/s}$ y $500\text{ px/s}$.
   - **Lento / Detallado:** Velocidad menor a $200\text{ px/s}$.

## Solución implementada

```javascript
/**
 * Ejercicio 015 - Logica Matematica: Velocidad, Tiempo y Distancia (Dibujo Digital)
 */

function calcularRendimientoTrazo(calcular, valor1, valor2) {
    // 1. Validar caso borde: valores no numericos o menores/iguales a cero
    if (typeof valor1 !== 'number' || valor1 <= 0 || typeof valor2 !== 'number' || valor2 <= 0) {
        return {
            distancia_px: 0,
            velocidad_px_s: 0,
            tiempo_s: 0,
            clasificacion: "invalido",
            explicacion: "Los valores ingresados deben ser numeros mayores a cero."
        };
    }

    let distancia = 0;
    let velocidad = 0;
    let tiempo = 0;

    // 2. Aplicar formulas segun la variable solicitada
    switch (calcular) {
        case 'distancia':
            velocidad = valor1; // px/s
            tiempo = valor2;    // s
            distancia = velocidad * tiempo;
            break;
        case 'velocidad':
            distancia = valor1; // px
            tiempo = valor2;    // s
            velocidad = distancia / tiempo;
            break;
        case 'tiempo':
            distancia = valor1; // px
            velocidad = valor2; // px/s
            tiempo = distancia / velocidad;
            break;
        default:
            return {
                distancia_px: 0,
                velocidad_px_s: 0,
                tiempo_s: 0,
                clasificacion: "invalido",
                explicacion: "Tipo de calculo no valido. Use 'distancia', 'velocidad' o 'tiempo'."
            };
    }

    distancia = Number(distancia.toFixed(2));
    velocidad = Number(velocidad.toFixed(2));
    tiempo = Number(tiempo.toFixed(2));

    // 3. Determinar la clasificacion del trazo segun la velocidad
    let clasificacion = "";
    if (velocidad > 500) {
        clasificacion = "rapido";
    } else if (velocidad >= 200) {
        clasificacion = "moderado";
    } else {
        clasificacion = "lento_detallado";
    }

    return {
        distancia_px: distancia,
        velocidad_px_s: velocidad,
        tiempo_s: tiempo,
        clasificacion: clasificacion,
        explicacion: `Trazo de ${distancia} px realizado a ${velocidad} px/s durante${tiempo} segundos.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal (Calcular Distancia) ===");
const caso1 = calcularRendimientoTrazo('distancia', 350, 4);
console.log(caso1);

console.log("\n=== Caso Borde (Valores Invalidos) ===");
const caso2 = calcularRendimientoTrazo('velocidad', -100, 5);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `calcular: 'distancia'`, `valor1 (velocidad): 350`, `valor2 (tiempo): 4`
- **Resultado obtenido:**
  ```json
  {
    "distancia_px": 1400,
    "velocidad_px_s": 350,
    "tiempo_s": 4,
    "clasificacion": "moderado",
    "explicacion": "Trazo de 1400 px realizado a 350 px/s durante 4 segundos."
  }
  ```

### Caso borde
- **Entrada:** `calcular: 'velocidad'`, `valor1 (distancia): -100`, `valor2 (tiempo): 5`
- **Resultado obtenido:**
  ```json
  {
    "distancia_px": 0,
    "velocidad_px_s": 0,
    "tiempo_s": 0,
    "clasificacion": "invalido",
    "explicacion": "Los valores ingresados deben ser numeros mayores a cero."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-015/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Para resolver este reto utilicé las ecuaciones del movimiento rectilíneo uniforme adaptadas al trazado digital sobre lienzo ($\text{px}$, $\text{px/s}$, $s$). Validé que las entradas fueran positivas y determine la rapidez del trazo para clasificar si fue una pincelada rápida o detallada.