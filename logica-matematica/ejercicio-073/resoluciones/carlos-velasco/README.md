# Logica matemática 073 - sistema de cálculo de distancia de aterrizaje

## Motor de Geometría Analítica (Distancia Euclidiana)

Este script calcula la distancia en línea recta entre dos puntos cartesianos (salida y aterrizaje) utilizando el teorema de Pitágoras. Es ideal para aplicaciones de navegación o simulación de trayectorias donde se requiere medir el desplazamiento espacial.

* **Descripción del proceso:**
* **Extracción de Coordenadas**: Obtiene los valores de las coordenadas $x$ e $y$ tanto para el punto de salida como para el de aterrizaje.
* **Aplicación de Fórmula Euclidiana**: Calcula la distancia utilizando la fórmula de la hipotenusa:

$$\text{Distancia} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$


* **Normalización de Salida**: Formaja el resultado numérico limitándolo a dos decimales con `toFixed(2)` y convirtiéndolo de nuevo a número mediante `parseFloat()`.
* **Reporte de Resultados**: Retorna un objeto con la distancia total calculada y una explicación detallada de las coordenadas procesadas.


* **Tecnologías:**
* JavaScript (métodos matemáticos `Math.sqrt` y `Math.pow`, manipulación de objetos, normalización numérica).



---

### Explicación técnica

1. **Precisión Geométrica**: El uso de `Math.sqrt` y potencias cuadradas implementa de forma exacta la distancia euclidiana estándar en un plano de dos dimensiones.
2. **Formato Limpio**: Las operaciones de coordenadas espaciales pueden generar decimales largos; aplicar `toFixed(2)` asegura que la lectura del reporte sea limpia y estandarizada para cualquier interfaz de usuario.

### Lógica del Código

```javascript
const calcularDistanciaAterrizaje = (puntoSalida, puntoAterrizaje) => {
    // 1. Extraer coordenadas de los objetos
    const x1 = puntoSalida.x;
    const y1 = puntoSalida.y;
    const x2 = puntoAterrizaje.x;
    const y2 = puntoAterrizaje.y;

    // 2. Aplicar fórmula de distancia euclidiana
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    // 3. Retornar objeto con formato normalizado
    return {
        distancia_total: parseFloat(distancia.toFixed(2)),
        explicacion: `Se calculó la distancia euclidiana entre el punto de salida (${x1}, ${y1}) y el punto de aterrizaje (${x2}, ${y2}).`
    };
};

```

### Salida Esperada

```json
{
  "distancia_total": 5,
  "explicacion": "Se calculó la distancia euclidiana entre el punto de salida (0, 0) y el punto de aterrizaje (3, 4)."
}
{
  "distancia_total": 0,
  "explicacion": "Se calculó la distancia euclidiana entre el punto de salida (1, 1) y el punto de aterrizaje (1, 1)."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-073/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco