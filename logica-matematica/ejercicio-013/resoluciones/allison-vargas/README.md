# Plantilla de solucion - Coordenadas y distancia (Paracaidismo)

## Analisis del problema

El objetivo es calcular la distancia euclidiana desde el punto de aterrizaje real de un paracaidista $(x_1, y_1)$ hasta la zona de aterrizaje objetivo/blanco $(x_2, y_2)$ en un plano cartesiano bidimensional, clasificando la precision del salto segun el margen de error obtenido.

## Reglas aplicadas

1. **Validacion de datos invalidos (Caso Borde):** Si los puntos provienen de datos incompletos o con valores no numericos, la funcion retorna un estado `"invalido"`.
2. **Calculo de distancia:** Se utiliza la formula de distancia euclidiana:  
   `distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)`
3. **Clasificacion de precision:**
   - **Excelente:** Distancia menor o igual a 10 metros.
   - **Aceptable:** Distancia entre 11 y 30 metros.
   - **Fuera de zona:** Distancia mayor a 30 metros.

## Solucion implementada

```javascript
/**
 * Ejercicio 013 - Logica Matematica: Coordenadas y Distancia (Paracaidismo)
 */

function calcularPrecisionAterrizaje(puntoObjetivo, puntoAterrizaje) {
    // 1. Validar caso borde: puntos nulos o con coordenadas no numericas
    if (!puntoObjetivo || !puntoAterrizaje ||
        typeof puntoObjetivo.x !== 'number' || typeof puntoObjetivo.y !== 'number' ||
        typeof puntoAterrizaje.x !== 'number' || typeof puntoAterrizaje.y !== 'number') {
        return {
            distancia_metros: 0,
            clasificacion: "invalido",
            explicacion: "Las coordenadas ingresadas no son validas."
        };
    }

    // 2. Calcular la distancia euclidiana entre los dos puntos
    const deltaX = puntoAterrizaje.x - puntoObjetivo.x;
    const deltaY = puntoAterrizaje.y - puntoObjetivo.y;
    const distancia = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const distanciaRedondeada = Number(distancia.toFixed(2));

    // 3. Determinar nivel de precision
    let clasificacion = "";
    if (distanciaRedondeada <= 10) {
        clasificacion = "excelente";
    } else if (distanciaRedondeada <= 30) {
        clasificacion = "aceptable";
    } else {
        clasificacion = "fuera_de_zona";
    }

    return {
        distancia_metros: distanciaRedondeada,
        clasificacion: clasificacion,
        explicacion: `El paracaidista aterrizo a ${distanciaRedondeada} metros del objetivo.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularPrecisionAterrizaje({ x: 0, y: 0 }, { x: 6, y: 8 });
console.log(caso1);

console.log("\n=== Caso Borde (Coordenadas Invalidas) ===");
const caso2 = calcularPrecisionAterrizaje({ x: 0, y: 0 }, { x: null, y: 5 });
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `puntoObjetivo: { x: 0, y: 0 }`, `puntoAterrizaje: { x: 6, y: 8 }`
- **Resultado obtenido:**
  ```json
  {
    "distancia_metros": 10,
    "clasificacion": "excelente",
    "explicacion": "El paracaidista aterrizo a 10 metros del objetivo."
  }
  ```

### Caso borde
- **Entrada:** `puntoObjetivo: { x: 0, y: 0 }`, `puntoAterrizaje: { x: null, y: 5 }`
- **Resultado obtenido:**
  ```json
  {
    "distancia_metros": 0,
    "clasificacion": "invalido",
    "explicacion": "Las coordenadas ingresadas no son validas."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-013/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

En este reto aplique el Teorema de Pitagoras para obtener la distancia euclidiana entre las coordenadas del objetivo y el punto de llegada real. Verifique que los objetos recibieran numeros validos y formatee el resultado a dos decimales para clasificar el salto del paracaidista.