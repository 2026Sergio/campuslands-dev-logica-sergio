# Logica matematica 095 - cálculo de velocidad, tiempo y distancia en trazos de dibujo digital

## Motor Matemático de Cinemática y Rendimiento de Trazos Artísticos

Este script procesa un arreglo de objetos que representan los trazos realizados en un software de dibujo digital, aplicando la fórmula física de velocidad ($v = \frac{d}{t}$) para calcular la velocidad individual de cada trazo, el promedio global del proyecto y clasificar el estilo de ejecución del artista.

* **Descripción del proceso:**
* **Validación de Integridad Global**: Comprueba si la lista de trazos no existe, no corresponde a un arreglo o se encuentra vacía, retornando un objeto de error en caso de cumplirse.
* **Iteración Cinemática (`for`)**: Recorre cada trazo del diseño asegurando que la distancia no sea negativa y previniendo divisiones por cero mediante un límite mínimo de tiempo ($0.1$ segundos).
* **Cálculo de Velocidad Individual**: Obtiene la velocidad en píxeles por segundo dividiendo la distancia entre el tiempo para cada elemento del arreglo.
* **Acumulación y Promedio Global**: Suma las distancias y los tiempos totales para calcular la velocidad promedio general de la sesión artística.
* **Clasificación por Estilo de Trazo**: Categoriza el ritmo de trabajo según la velocidad promedio obtenida:
* **Trazos Rápidos / Gestuales**: Mayor a 150 píxeles por segundo.
* **Estándar / Equilibrado**: Entre 50 y 150 píxeles por segundo.
* **Trazos Lentos / Alta Precisión (Lineart Fino)**: Menor a 50 píxeles por segundo.


* **Retorno del Reporte**: Devuelve un objeto estructurado que detalla la distancia total, el tiempo total, la velocidad promedio, el estilo clasificado, el detalle por trazo y la explicación del proceso.


* **Tecnologías:**
* JavaScript (ciclos iterativos `for`, operaciones aritméticas de cinemática, redondeo con `toFixed`, parseo numérico con `parseFloat`).



---

### Explicación técnica

1. **Aplicación de Principios Físicos Básicos**: El algoritmo traslada la fórmula de cinemática lineal ($v = \frac{d}{t}$) al análisis de trazos digitales, permitiendo cuantificar la velocidad de ejecución del artista en un entorno gráfico.
2. **Prevención de Errores Numéricos Críticos**: Incorpora validaciones defensivas que asignan un valor mínimo predeterminado al tiempo ($0.1$s), evitando fallos por división entre cero en trazos instantáneos o datos atípicos.

### Lógica del Código

```javascript
const calcularRendimientoTrazosDibujo = (trazos) => {
    // 1. Validar que la lista de trazos exista y sea un arreglo válido
    if (!trazos || !Array.isArray(trazos) || trazos.length === 0) {
        return { error: "La lista de trazos de dibujo digital está vacía o no es válida." };
    }

    let distanciaTotalPx = 0;
    let tiempoTotalSeg = 0;
    let detalleTrazos = [];

    // 2. Procesar cada trazo usando la relación física: Velocidad = Distancia / Tiempo
    for (let i = 0; i < trazos.length; i++) {
        let trazo = trazos[i];
        let distancia = trazo.distanciaPx > 0 ? trazo.distanciaPx : 0;
        let tiempo = trazo.tiempoSeg > 0 ? trazo.tiempoSeg : 0.1; // Evitar división por cero

        distanciaTotalPx += distancia;
        tiempoTotalSeg += tiempo;

        let velocidadPxPorSeg = distancia / tiempo;

        detalleTrazos.push({
            trazo_id: i + 1,
            distancia_px: parseFloat(distancia.toFixed(2)),
            tiempo_seg: parseFloat(tiempo.toFixed(2)),
            velocidad_px_s: parseFloat(velocidadPxPorSeg.toFixed(2))
        });
    }

    // 3. Calcular la velocidad promedio general del trazo digital
    const velocidadPromedio = tiempoTotalSeg > 0 ? (distanciaTotalPx / tiempoTotalSeg) : 0;

    // 4. Clasificar el estilo de trazo según la velocidad promedio
    let estiloTrazo = "Estándar / Equilibrado";
    if (velocidadPromedio > 150) {
        estiloTrazo = "Trazos Rápidos / Gestuales";
    } else if (velocidadPromedio < 50) {
        estiloTrazo = "Trazos Lentos / Alta Precisión (Lineart Fino)";
    }

    // 5. Retornar el reporte consolidado de rendimiento cinemático
    return {
        distancia_total_px: parseFloat(distanciaTotalPx.toFixed(2)),
        tiempo_total_seg: parseFloat(tiempoTotalSeg.toFixed(2)),
        velocidad_promedio_px_s: parseFloat(velocidadPromedio.toFixed(2)),
        estilo_clasificacion: estiloTrazo,
        detalle_trazos: detalleTrazos,
        explicacion: "Se aplicaron las fórmulas de velocidad, tiempo y distancia sobre los trazos de dibujo digital para determinar el ritmo y estilo de ejecución del artista según las reglas del reto."
    };
};

```

### Salida Esperada

```json
{
  "distancia_total_px": 1050,
  "tiempo_total_seg": 8.5,
  "velocidad_promedio_px_s": 123.53,
  "estilo_clasificacion": "Estándar / Equilibrado",
  "detalle_trazos": [
    {
      "trazo_id": 1,
      "distancia_px": 300,
      "tiempo_seg": 2.5,
      "velocidad_px_s": 120
    },
    {
      "trazo_id": 2,
      "distancia_px": 150,
      "tiempo_seg": 1,
      "velocidad_px_s": 150
    },
    {
      "trazo_id": 3,
      "distancia_px": 600,
      "tiempo_seg": 5,
      "velocidad_px_s": 120
    }
  ],
  "explicacion": "Se aplicaron las fórmulas de velocidad, tiempo y distancia sobre los trazos de dibujo digital para determinar el ritmo y estilo de ejecución del artista según las reglas del reto."
}
{
  "distancia_total_px": 20,
  "tiempo_total_seg": 0.1,
  "velocidad_promedio_px_s": 200,
  "estilo_clasificacion": "Trazos Rápidos / Gestuales",
  "detalle_trazos": [
    {
      "trazo_id": 1,
      "distancia_px": 20,
      "tiempo_seg": 0.1,
      "velocidad_px_s": 200
    }
  ],
  "explicacion": "Se aplicaron las fórmulas de velocidad, tiempo y distancia sobre los trazos de dibujo digital para determinar el ritmo y estilo de ejecución del artista según las reglas del reto."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-095/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco