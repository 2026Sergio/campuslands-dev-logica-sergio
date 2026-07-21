# Plantilla de solucion - Estadisticas de ranking (Arquitectura 3D)

## Analisis del problema

El objetivo es evaluar una lista de puntuaciones otorgadas por un jurado a diferentes proyectos de arquitectura 3D. A partir de los datos, se debe calcular la puntuacion promedio, identificar la nota mas alta (lider del ranking), la nota mas baja y clasificar el rendimiento general del grupo de proyectos.

## Reglas aplicadas

1. **Validacion de datos invalidos (Caso Borde):** Si el listado de puntuaciones esta vacio, no es un arreglo o contiene elementos no numericos, la funcion retorna un estado `"invalido"`.
2. **Calculo de metricas:**
   - **Promedio:** Suma de todas las puntuaciones dividida entre el total de proyectos evaluados.
   - **Puntaje Maximo / Minimo:** Evaluacion del valor mas alto y mas bajo del conjunto de datos.
3. **Clasificacion de nivel del ranking (segun promedio):**
   - **Alto Rendimiento:** Promedio mayor o igual a 85 puntos.
   - **Rendimiento Medio:** Promedio entre 60 y 84 puntos.
   - **Bajo Rendimiento:** Promedio menor a 60 puntos.

## Solucion implementada

```javascript
/**
 * Ejercicio 017 - Logica Matematica: Estadisticas de Ranking (Arquitectura 3D)
 */

function analizarRankingArquitectura(puntuaciones) {
    // 1. Validar caso borde: arreglo vacio, no valido o con datos no numericos
    if (!Array.isArray(puntuaciones) || puntuaciones.length === 0 || 
        !puntuaciones.every(p => typeof p === 'number' && !isNaN(p) && p >= 0)) {
        return {
            promedio: 0,
            puntaje_maximo: 0,
            puntaje_minimo: 0,
            clasificacion: "invalido",
            explicacion: "El listado de puntuaciones debe ser un arreglo no vacio con numeros validos."
        };
    }

    // 2. Calcular acumulador, maximo y minimo
    let suma = 0;
    let maximo = puntuaciones[0];
    let minimo = puntuaciones[0];

    for (let i = 0; i < puntuaciones.length; i++) {
        const nota = puntuaciones[i];
        suma += nota;

        if (nota > maximo) maximo = nota;
        if (nota < minimo) minimo = nota;
    }

    const promedio = Number((suma / puntuaciones.length).toFixed(2));

    // 3. Determinar nivel de rendimiento general
    let clasificacion = "";
    if (promedio >= 85) {
        clasificacion = "alto_rendimiento";
    } else if (promedio >= 60) {
        clasificacion = "rendimiento_medio";
    } else {
        clasificacion = "bajo_rendimiento";
    }

    return {
        promedio: promedio,
        puntaje_maximo: maximo,
        puntaje_minimo: minimo,
        clasificacion: clasificacion,
        explicacion: `Se evaluaron ${puntuaciones.length} proyectos. Promedio: ${promedio}, nota maxima: ${maximo}, nota minima:${minimo}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal (Alto Rendimiento) ===");
const caso1 = analizarRankingArquitectura([88, 92, 79, 95, 90]);
console.log(caso1);

console.log("\n=== Caso Borde (Arreglo Vacio) ===");
const caso2 = analizarRankingArquitectura([]);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `puntuaciones: [88, 92, 79, 95, 90]`
- **Proceso:** Suma = 444, Total = 5, Promedio = 88.8.
- **Resultado obtenido:**
  ```json
  {
    "promedio": 88.8,
    "puntaje_maximo": 95,
    "puntaje_minimo": 79,
    "clasificacion": "alto_rendimiento",
    "explicacion": "Se evaluaron 5 proyectos. Promedio: 88.8, nota maxima: 95, nota minima: 79."
  }
  ```

### Caso borde
- **Entrada:** `puntuaciones: []`
- **Resultado obtenido:**
  ```json
  {
    "promedio": 0,
    "puntaje_maximo": 0,
    "puntaje_minimo": 0,
    "clasificacion": "invalido",
    "explicacion": "El listado de puntuaciones debe ser un arreglo no vacio con numeros validos."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-017/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Para resolver este ejercicio utilicé un bucle para acumular la suma de los puntajes y comparar progresivamente los valores máximos y mínimos. Validé previamente que el arreglo contuviera datos válidos para evitar errores numéricos en la división del promedio.