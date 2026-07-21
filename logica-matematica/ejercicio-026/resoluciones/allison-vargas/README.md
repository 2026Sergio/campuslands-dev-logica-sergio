# Plantilla de solucion - Conversion de unidades (Autos Hiperdeportivos)

## Analisis del problema

En las pruebas de rendimiento de autos hiperdeportivos, las fichas técnicas combinan diferentes unidades de medida (como kilómetros por hora `km/h`, millas por hora `mph` o metros por segundo `m/s`). El objetivo es convertir la velocidad de un auto a las distintas unidades para compararlo y clasificar su categoría según su velocidad en `km/h`.

## Reglas aplicadas

1. **Validación de Entradas (Caso Borde):**
   - Si la velocidad es menor o igual a cero, o no es un número válido, la solución responde con clasificación `"invalido"`.
2. **Factores de Conversión:**
   - Si la velocidad recibida está en `km/h`:
     - **Millas por hora (mph):** $\text{km/h} \times 0.621371$
     - **Metros por segundo (m/s):** $\text{km/h} / 3.6$
   - Si la velocidad está en otra unidad (`mph` o `m/s`), primero se convierte a `km/h` para estandarizar la clasificación.
3. **Clasificación de Categoría (según km/h):**
   - **Récord de pista:** Velocidad $\ge 400$ km/h.
   - **Hiperdeportivo:** Velocidad entre $300$ km/h y $399.99$ km/h.
   - **Deportivo:** Velocidad $< 300$ km/h.

## Solucion implementada

```javascript
/**
 * Ejercicio 026 - Logica Matematica: Conversion de Unidades (Autos Hiperdeportivos)
 */

function convertirVelocidadHiperdeportivo(datos) {
    // 1. Validar entradas
    if (!datos || typeof datos.velocidad !== 'number' || isNaN(datos.velocidad) || datos.velocidad <= 0) {
        return {
            kmh: 0,
            mph: 0,
            ms: 0,
            clasificacion: "invalido",
            explicacion: "La velocidad debe ser un numero mayor a 0."
        };
    }

    const { velocidad, unidad = "kmh" } = datos;
    let kmh = 0;

    // Convertir todo a km/h para estandarizar
    const unidadLwr = unidad.toLowerCase();
    if (unidadLwr === "kmh" || unidadLwr === "km/h") {
        kmh = velocidad;
    } else if (unidadLwr === "mph") {
        kmh = velocidad * 1.60934;
    } else if (unidadLwr === "ms" || unidadLwr === "m/s") {
        kmh = velocidad * 3.6;
    } else {
        return {
            kmh: 0,
            mph: 0,
            ms: 0,
            clasificacion: "invalido",
            explicacion: "Unidad de medida no soportada."
        };
    }

    // 2. Calcular equivalencias
    const mph = Number((kmh * 0.621371).toFixed(2));
    const ms = Number((kmh / 3.6).toFixed(2));
    kmh = Number(kmh.toFixed(2));

    // 3. Clasificar auto
    let clasificacion = "";
    if (kmh >= 400) {
        clasificacion = "record de pista";
    } else if (kmh >= 300) {
        clasificacion = "hiperdeportivo";
    } else {
        clasificacion = "deportivo";
    }

    return {
        kmh: kmh,
        mph: mph,
        ms: ms,
        clasificacion: clasificacion,
        explicacion: `El auto alcanza ${kmh} km/h (${mph} mph / ${ms} m/s).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = convertirVelocidadHiperdeportivo({
    velocidad: 420,
    unidad: "kmh"
});
console.log(caso1);

console.log("\n=== Caso Borde (Velocidad negativa o invalida) ===");
const caso2 = convertirVelocidadHiperdeportivo({
    velocidad: -100,
    unidad: "kmh"
});
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `{ velocidad: 420, unidad: "kmh" }`
- **Proceso:**
  - Velocidad en km/h = $420$.
  - Conversión a mph = $420 \times 0.621371 = 260.98$ mph.
  - Conversión a m/s = $420 / 3.6 = 116.67$ m/s.
  - Como es mayor a $400$ km/h $\rightarrow$ **record de pista**.
- **Resultado obtenido:**
  ```json
  {
    "kmh": 420,
    "mph": 260.98,
    "ms": 116.67,
    "clasificacion": "record de pista",
    "explicacion": "El auto alcanza 420 km/h (260.98 mph / 116.67 m/s)."
  }
  ```

### Caso borde
- **Entrada:** `{ velocidad: -100, unidad: "kmh" }`
- **Resultado obtenido:**
  ```json
  {
    "kmh": 0,
    "mph": 0,
    "ms": 0,
    "clasificacion": "invalido",
    "explicacion": "La velocidad debe ser un numero mayor a 0."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-026/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Creamos un programa que convierte la velocidad de un auto de carreras a diferentes medidas (como kilómetros por hora, millas por hora y metros por segundo). Dependiendo de qué tan rápido sea el vehículo, lo clasifica dentro de una categoría de rendimiento.