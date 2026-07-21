# Plantilla de solucion - Minimos y limites (Taller Mecanico)

## Analisis del problema

En la gestión diaria de un taller mecánico, es fundamental controlar el tiempo de reparación de cada vehículo y el límite de capacidad operativa diaria. El objetivo es procesar la lista de reparaciones del día, verificar que no se supere el límite de horas disponibles del taller, identificar el servicio que tomó menos tiempo y clasificar la jornada de trabajo.

## Reglas aplicadas

1. **Validación de Entradas (Caso Borde):**
   - Si la lista de reparaciones no es un arreglo, está vacía o incluye tiempos negativos o no numéricos, la función responde con clasificación `"invalido"`.
2. **Control de Límites y Mínimos:**
   - **Tiempo total ocupado:** Se suman las horas de cada reparación.
   - **Reparación más rápida (Mínimo):** Se identifica el servicio que tomó la menor cantidad de horas.
   - **Límite operativo:** Si el tiempo total supera el límite máximo del taller (por ejemplo, $40$ horas semanales o $8$ horas diarias), los trabajos excedentes no pueden procesarse completos.
3. **Clasificación de la Jornada:**
   - **Sobrecargado:** Si el tiempo total supera el límite máximo permitido.
   - **Eficiente:** Si el tiempo total está entre el $70\%$ y el $100\%$ del límite.
   - **Baja ocupacion:** Si el tiempo total es menor al $70\%$ del límite.

## Solucion implementada

```javascript
/**
 * Ejercicio 025 - Logica Matematica: Minimos y Limites (Taller Mecanico)
 */

function analizarJornadaTaller(reparaciones, limiteHoras = 8) {
    // 1. Validar entradas
    if (!Array.isArray(reparaciones) || reparaciones.length === 0 || typeof limiteHoras !== 'number' || limiteHoras <= 0) {
        return {
            tiempo_total: 0,
            tiempo_minimo: 0,
            clasificacion: "invalido",
            explicacion: "La lista de reparaciones debe ser un arreglo no vacio y el limite debe ser mayor a 0."
        };
    }

    // Validar que cada servicio tenga datos correctos
    for (let i = 0; i < reparaciones.length; i++) {
        const item = reparaciones[i];
        if (!item || typeof item.horas !== 'number' || isNaN(item.horas) || item.horas <= 0) {
            return {
                tiempo_total: 0,
                tiempo_minimo: 0,
                clasificacion: "invalido",
                explicacion: "Se encontraron registros de tiempo invalidos."
            };
        }
    }

    // 2. Procesar total y buscar el minimo
    let tiempoTotal = 0;
    let reparacionRapida = reparaciones[0];

    for (let i = 0; i < reparaciones.length; i++) {
        const actual = reparaciones[i];
        tiempoTotal += actual.horas;

        if (actual.horas < reparacionRapida.horas) {
            reparacionRapida = actual;
        }
    }

    // 3. Clasificar segun el limite de horas
    let clasificacion = "";
    const porcentajeUso = (tiempoTotal / limiteHoras) * 100;

    if (tiempoTotal > limiteHoras) {
        clasificacion = "sobrecargado";
    } else if (porcentajeUso >= 70) {
        clasificacion = "eficiente";
    } else {
        clasificacion = "baja ocupacion";
    }

    return {
        tiempo_total: tiempoTotal,
        servicio_mas_rapido: reparacionRapida.servicio,
        tiempo_minimo: reparacionRapida.horas,
        limite_horas: limiteHoras,
        clasificacion: clasificacion,
        explicacion: `Se realizaron ${reparaciones.length} servicios sumando ${tiempoTotal} horas de un limite de${limiteHoras} hrs.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarJornadaTaller([
    { servicio: "Cambio de aceite", horas: 1 },
    { servicio: "Alineacion y balanceo", horas: 2 },
    { servicio: "Revision de frenos", horas: 3 }
], 8);
console.log(caso1);

console.log("\n=== Caso Borde (Valores invalidos) ===");
const caso2 = analizarJornadaTaller([
    { servicio: "Reparacion motor", horas: -4 }
], 8);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:**
  - `reparaciones`: `[{ servicio: "Cambio de aceite", horas: 1 }, { servicio: "Alineacion y balanceo", horas: 2 }, { servicio: "Revision de frenos", horas: 3 }]`
  - `limiteHoras`: `8`
- **Proceso:**
  - Tiempo total = $1 + 2 + 3 = 6$ horas.
  - Servicio más rápido = `"Cambio de aceite"` ($1$ hora).
  - Porcentaje de uso = $(6 / 8) \times 100 = 75\%$ $\rightarrow$ **eficiente**.
- **Resultado obtenido:**
  ```json
  {
    "tiempo_total": 6,
    "servicio_mas_rapido": "Cambio de aceite",
    "tiempo_minimo": 1,
    "limite_horas": 8,
    "clasificacion": "eficiente",
    "explicacion": "Se realizaron 3 servicios sumando 6 horas de un limite de 8 hrs."
  }
  ```

### Caso borde
- **Entrada:** `reparaciones: [{ servicio: "Reparacion motor", horas: -4 }]`, `limiteHoras: 8`
- **Resultado obtenido:**
  ```json
  {
    "tiempo_total": 0,
    "tiempo_minimo": 0,
    "clasificacion": "invalido",
    "explicacion": "Se encontraron registros de tiempo invalidos."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-025/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Creamos un programa que calcula el tiempo usado en el taller durante el día. Encuentra la reparación que se hizo más rápido, suma el tiempo de todos los trabajos y nos avisa si el taller trabajó a buen ritmo, si se quedó corto de trabajo o si se pasó del límite de horas disponibles.