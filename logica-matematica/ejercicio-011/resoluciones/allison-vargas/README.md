# Plantilla de solucion - Conteo combinatorio simple (Kickboxing)

## Analisis del problema

El objetivo es calcular la cantidad total de combinaciones de ataques (combinaciones de golpes de puno y patadas) que un peleador de kickboxing puede realizar segun sus listas de tecnicas disponibles, aplicando filtros o reglas para descartar combinaciones no permitidas.

## Reglas aplicadas

1. **Validacion de datos vacios (Caso Borde):** Si alguna de las listas de tecnicas (punos o patadas) esta vacia o no es valida, el total de combinaciones es `0` y se clasifica como `"invalido"`.
2. **Generacion de combinaciones:** Se utiliza un principio de conteo mediante ciclos anidados para combinar cada golpe de puno con cada tipo de patada (`punos.length * patadas.length`).
3. **Clasificacion de variedad del arsenal:**
   - **Amplio:** Mas de 10 combinaciones posibles.
   - **Moderado:** Entre 5 y 10 combinaciones posibles.
   - **Limitado:** Menos de 5 combinaciones posibles.

## Solucion implementada

```javascript
/**
 * Ejercicio 011 - Logica Matematica: Conteo Combinatorio Simple (Kickboxing)
 */

function calcularCombinacionesKickboxing(golpesPuno, patadas) {
    // 1. Validar caso borde
    if (!golpesPuno || golpesPuno.length === 0 || !patadas || patadas.length === 0) {
        return {
            total_combinaciones: 0,
            combinaciones: [],
            clasificacion: "invalido",
            explicacion: "Alguna de las listas de tecnicas esta vacia o no es valida."
        };
    }

    // 2. Generar combinaciones mediante ciclos anidados
    const combinaciones = [];
    for (let i = 0; i < golpesPuno.length; i++) {
        for (let j = 0; j < patadas.length; j++) {
            combinaciones.push(`${golpesPuno[i]} +${patadas[j]}`);
        }
    }

    const total = combinaciones.length;

    // 3. Determinar nivel de variedad
    let clasificacion = "";
    if (total > 10) {
        clasificacion = "amplio";
    } else if (total >= 5) {
        clasificacion = "moderado";
    } else {
        clasificacion = "limitado";
    }

    return {
        total_combinaciones: total,
        combinaciones: combinaciones,
        clasificacion: clasificacion,
        explicacion: `Se generaron ${total} combinaciones unicas a partir de ${golpesPuno.length} golpes de puno y${patadas.length} patadas.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularCombinacionesKickboxing(
    ["Jab", "Cross", "Hook"], 
    ["Low Kick", "Middle Kick", "High Kick"]
);
console.log(caso1);

console.log("\n=== Caso Borde (Lista Vacia) ===");
const caso2 = calcularCombinacionesKickboxing([], ["Low Kick"]);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `golpesPuno: ["Jab", "Cross", "Hook"]`, `patadas: ["Low Kick", "Middle Kick", "High Kick"]`
- **Resultado obtenido:**
  ```json
  {
    "total_combinaciones": 9,
    "combinaciones": [
      "Jab + Low Kick",
      "Jab + Middle Kick",
      "Jab + High Kick",
      "Cross + Low Kick",
      "Cross + Middle Kick",
      "Cross + High Kick",
      "Hook + Low Kick",
      "Hook + Middle Kick",
      "Hook + High Kick"
    ],
    "clasificacion": "moderado",
    "explicacion": "Se generaron 9 combinaciones unicas a partir de 3 golpes de puno y 3 patadas."
  }
  ```

### Caso borde
- **Entrada:** `golpesPuno: []`, `patadas: ["Low Kick"]`
- **Resultado obtenido:**
  ```json
  {
    "total_combinaciones": 0,
    "combinaciones": [],
    "clasificacion": "invalido",
    "explicacion": "Alguna de las listas de tecnicas esta vacia o no es valida."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-011/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

En este ejercicio aplique el principio multiplicativo de conteo mediante ciclos anidados. Combine cada tecnica de puno disponible con cada tipo de patada, validando primero que ninguna lista estuviera vacia antes de construir el arsenal de combinaciones.