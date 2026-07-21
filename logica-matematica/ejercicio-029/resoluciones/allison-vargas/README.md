# Plantilla de solucion - Modulos y divisibilidad (Peliculas de Miedo)

## Analisis del problema

En las maratones de cine de terror, los espectadores suelen dividirse en grupos iguales según la duración total de las películas o el número de sustos programados por función. El objetivo es calcular si la cantidad de películas o minutos se puede repartir equitativamente entre un grupo de personas usando el operador de módulo (`%`), determinar cuántas unidades quedan libres y clasificar si la maratón fue perfectamente organizada.

## Reglas aplicadas

1. **Validación de Entradas (Caso Borde):**
   - Si el número de participantes es menor o igual a cero, o si la lista de películas/minutos está vacía o contiene números negativos, la solución responde con clasificación `"invalido"`.
2. **Cálculo de Divisibilidad:**
   - **Total acumulado:** Se suman todos los minutos o sustos de las películas en la lista.
   - **Reparto equitativo:** Se divide el total entre la cantidad de participantes ($\text{Total} / \text{Participantes}$).
   - **Sobrantes:** Se utiliza la operación de módulo ($\text{Total} \pmod{\text{Participantes}}$) para obtener el residuo exacto que no se pudo repartir de forma pareja.
3. **Clasificación de la Maratón:**
   - **Perfecta:** El residuo es igual a $0$ (divisibilidad exacta entre todos los asistentes).
   - **Ajustada:** El residuo es menor al $20\%$ de la cantidad de participantes.
   - **Desequilibrada:** El residuo es mayor o igual al $20\%$ de la cantidad de participantes.

## Solucion implementada

```javascript
/**
 * Ejercicio 029 - Logica Matematica: Modulos y Divisibilidad (Peliculas de Miedo)
 */

function analizarMaratonTerror(duraciones, personas) {
    // 1. Validar entradas
    if (!Array.isArray(duraciones) || duraciones.length === 0 || typeof personas !== 'number' || personas <= 0) {
        return {
            total_minutos: 0,
            por_persona: 0,
            sobrante: 0,
            clasificacion: "invalido",
            explicacion: "La lista de duraciones debe ser un arreglo no vacio y el numero de personas mayor a 0."
        };
    }

    // Validar duraciones numéricas válidas
    for (let i = 0; i < duraciones.length; i++) {
        const d = duraciones[i];
        if (typeof d !== 'number' || isNaN(d) || d < 0) {
            return {
                total_minutos: 0,
                por_persona: 0,
                sobrante: 0,
                clasificacion: "invalido",
                explicacion: "Se encontraron duraciones de peliculas invalidas."
            };
        }
    }

    // 2. Calcular total, reparto y residuo (modulo)
    let totalMinutos = 0;
    for (let i = 0; i < duraciones.length; i++) {
        totalMinutos += duraciones[i];
    }

    const porPersona = Math.floor(totalMinutos / personas);
    const sobrante = totalMinutos % personas;

    // 3. Clasificar segun el residuo
    let clasificacion = "";
    if (sobrante === 0) {
        clasificacion = "perfecta";
    } else if (sobrante < personas * 0.2) {
        clasificacion = "ajustada";
    } else {
        clasificacion = "desequilibrada";
    }

    return {
        total_minutos: totalMinutos,
        por_persona: porPersona,
        sobrante: sobrante,
        clasificacion: clasificacion,
        explicacion: `Total de ${totalMinutos} min para${personas} personas. Tocan ${porPersona} min cada uno y sobran${sobrante} min.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarMaratonTerror([90, 120, 90], 5);
console.log(caso1);

console.log("\n=== Caso Borde (Personas invalidas o lista vacia) ===");
const caso2 = analizarMaratonTerror([100, 90], 0);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `duraciones: [90, 120, 90]`, `personas: 5`
- **Proceso:**
  - Total minutos = $90 + 120 + 90 = 300$ minutos.
  - Minutos por persona = $300 / 5 = 60$ minutos.
  - Residuo (sobrante) = $300 \pmod 5 = 0$.
  - Como el sobrante es $0 \rightarrow$ **perfecta**.
- **Resultado obtenido:**
  ```json
  {
    "total_minutos": 300,
    "por_persona": 60,
    "sobrante": 0,
    "clasificacion": "perfecta",
    "explicacion": "Total de 300 min para 5 personas. Tocan 60 min cada uno y sobran 0 min."
  }
  ```

### Caso borde
- **Entrada:** `duraciones: [100, 90]`, `personas: 0`
- **Resultado obtenido:**
  ```json
  {
    "total_minutos": 0,
    "por_persona": 0,
    "sobrante": 0,
    "clasificacion": "invalido",
    "explicacion": "La lista de duraciones debe ser un arreglo no vacio y el numero de personas mayor a 0."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-029/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Armamos un programa que revisa el tiempo total de una maratón de películas de terror y lo divide en partes iguales entre los asistentes. Usa la operación de módulo para ver si la división da exacta o cuántos minutos quedan sobrantes sin repartir.