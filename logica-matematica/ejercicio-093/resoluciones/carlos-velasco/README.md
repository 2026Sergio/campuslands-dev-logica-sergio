# Logica matematica 093 - cálculo de distancia euclidiana y precisión de aterrizaje en paracaidismo

## Motor Matemático de Coordenadas Cartesianas y Precisión de Desplazamiento

Este script procesa dos objetos que representan las coordenadas cartesianas bidimensionales de un punto de salto y un punto de destino, aplicando la fórmula matemática de la distancia euclidiana para determinar la separación geométrica exacta y clasificar el nivel de precisión del aterrizaje.

* **Descripción del proceso:**
* **Validación de Integridad**: Comprueba si los puntos de coordenadas existen y verifica de manera estricta que sus propiedades `x` e `y` correspondan a valores numéricos válidos.
* **Cálculo de Diferencias (Deltas)**: Obtiene las distancias absolutas de desplazamiento sobre los ejes horizontal y vertical ($\Delta x = x_2 - x_1$, $\Delta y = y_2 - y_1$).
* **Aplicación de Distancia Euclidiana**: Calcula la longitud de la hipotenusa geométrica aplicando la fórmula de raíz cuadrada de la suma de los cuadrados ($\sqrt{(\Delta x)^2 + (\Delta y)^2}$).
* **Precisión y Redondeo**: Estandariza la distancia resultante a dos decimales utilizando los métodos `toFixed(2)` y `parseFloat`.
* **Clasificación por Umbrales de Desviación**: Categoriza el resultado según la magnitud del alejamiento en metros:
* **Desviación Crítica / Fuera de Zona**: Mayor a 50 metros.
* **Desviación Moderada**: Mayor a 20 metros y menor o igual a 50 metros.
* **Zona de Alta Precisión**: Menor o igual a 20 metros.


* **Retorno del Reporte**: Devuelve un objeto estructurado que detalla las coordenadas de salto y destino, la distancia en metros, la clasificación de precisión y la explicación del proceso.


* **Tecnologías:**
* JavaScript (operaciones matemáticas con el objeto `Math`, validación estricta de tipos de datos, redondeo y parseo numérico).



---

### Explicación técnica

1. **Implementación del Teorema de Pitágoras**: El algoritmo traduce el espacio físico bidimensional en un triángulo rectángulo, calculando la distancia lineal más corta entre dos puntos mediante la función de raíz cuadrada (`Math.sqrt`) y potencias aritméticas básicas.
2. **Defensa de Tipos de Datos**: Las validaciones previas garantizan que cualquier anomalía en los objetos de coordenadas sea detectada de inmediato, previniendo la propagación de valores nulos o no numéricos hacia las operaciones trigonométricas.

### Lógica del Código

```javascript
const calcularDistanciaAterrizajeParacaidismo = (puntoSalto, puntoDestino) => {
    // 1. Validar si los puntos de coordenadas existen
    if (!puntoSalto || !puntoDestino) {
        return { error: "Los puntos de coordenadas (salto y destino) están incompletos o no son válidos." };
    }

    // 2. Validar que las coordenadas contengan valores numéricos en x e y
    if (typeof puntoSalto.x !== 'number' || typeof puntoSalto.y !== 'number' ||
        typeof puntoDestino.x !== 'number' || typeof puntoDestino.y !== 'number') {
        return { error: "Las coordenadas deben contener valores numéricos en x e y." };
    }

    // 3. Calcular las diferencias (deltas) en los ejes X y Y
    const deltaX = puntoDestino.x - puntoSalto.x;
    const deltaY = puntoDestino.y - puntoSalto.y;
    
    // 4. Aplicar la fórmula de distancia euclidiana
    const distanciaCalculada = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

    // 5. Clasificar la precisión del aterrizaje según umbrales
    let precisionAterrizaje = "Zona de Alta Precisión";
    if (distanciaCalculada > 50) {
        precisionAterrizaje = "Desviación Crítica / Fuera de Zona";
    } else if (distanciaCalculada > 20) {
        precisionAterrizaje = "Desviación Moderada";
    }

    // 6. Retornar el reporte consolidado de distancia y precisión
    return {
        coordenada_salto: puntoSalto,
        coordenada_destino: puntoDestino,
        distancia_metros: parseFloat(distanciaCalculada.toFixed(2)),
        clasificacion_precision: precisionAterrizaje,
        explicacion: "Se calculó la distancia geométrica entre el punto de salto y el punto de aterrizaje usando coordenadas cartesianas y la fórmula de distancia euclidiana para el reto de paracaidismo."
    };
};

```

### Salida Esperada

```json
{
  "coordenada_salto": {
    "x": 10,
    "y": 20
  },
  "coordenada_destino": {
    "x": 40,
    "y": 60
  },
  "distancia_metros": 50,
  "clasificacion_precision": "Desviación Moderada",
  "explicacion": "Se calculó la distancia geométrica entre el punto de salto y el punto de aterrizaje usando coordenadas cartesianas y la fórmula de distancia euclidiana para el reto de paracaidismo."
}
{
  "coordenada_salto": {
    "x": 0,
    "y": 0
  },
  "coordenada_destino": {
    "x": 0,
    "y": 0
  },
  "distancia_metros": 0,
  "clasificacion_precision": "Zona de Alta Precisión",
  "explicacion": "Se calculó la distancia geométrica entre el punto de salto y el punto de aterrizaje usando coordenadas cartesianas y la fórmula de distancia euclidiana para el reto de paracaidismo."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-distancia-paracaidismo/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco