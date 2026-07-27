# Logica matematica 083 - sistema de promedios y medianas para estadísticas de eSports

## Motor de Análisis Estadístico de Puntajes y Clasificación de Torneo

Este script procesa un arreglo de puntajes numéricos obtenidos en un torneo de eSports para calcular métricas estadísticas fundamentales (promedio aritmético y mediana), aplicando además un sistema de clasificación por umbrales basado en el rendimiento global.

* **Descripción del proceso:**
* **Validación de Integridad**: Comprueba si el arreglo de `puntajes` está vacío o es nulo, retornando un objeto de error en caso de cumplirse.
* **Cálculo del Promedio Aritmético**: Suma todos los elementos del arreglo mediante el método `reduce` y divide el resultado entre la cantidad total de puntajes.
* **Cálculo de la Mediana Estadística**:
* Copia y ordena de forma ascendente los puntajes utilizando `sort`.
* Evalúa si la cantidad de elementos es par o impar.
* Si es par, obtiene el promedio de los dos valores centrales; si es impar, selecciona directamente el valor del elemento medio.


* **Clasificación por Umbrales**: Categoriza el rendimiento global según el promedio obtenido:
* **Elite**: Promedio $\ge$ 80.
* **Competitivo**: Promedio $\ge$ 50.
* **Estándar**: Valores de promedio inferiores a 50.


* **Retorno del Reporte**: Devuelve un objeto estructurado con el promedio y la mediana redondeados a dos decimales, la clasificación asignada y la explicación del proceso.


* **Tecnologías:**
* JavaScript (método de reducción `reduce`, ordenamiento de arreglos con `sort`, operaciones matemáticas con `Math.floor`, formato de números con `toFixed`).



---

### Explicación técnica

1. **Análisis Estadístico Dual**: Combinar el promedio con la mediana permite evaluar tanto la tendencia general afectada por valores extremos como el punto central real de la distribución de puntajes del torneo.
2. **Resiliencia ante Arreglos Unitarios**: El algoritmo maneja correctamente casos de conjuntos pequeños (como un solo elemento) mediante el ordenamiento y la selección directa del índice medio, evitando errores de desbordamiento.

### Lógica del Código

```javascript
const calcularEstadisticasEsports = (puntajes) => {
    // 1. Validar si la lista de puntajes está vacía
    if (!puntajes || puntajes.length === 0) {
        return { error: "La lista de puntajes del torneo de esports está vacía." };
    }

    // 2. Calcular el promedio aritmético
    const suma = puntajes.reduce((acc, val) => acc + val, 0);
    const promedio = suma / puntajes.length;

    // 3. Calcular la mediana estadística
    const puntajesOrdenados = [...puntajes].sort((a, b) => a - b);
    const mitad = Math.floor(puntajesOrdenados.length / 2);
    let mediana = 0;

    if (puntajesOrdenados.length % 2 === 0) {
        mediana = (puntajesOrdenados[mitad - 1] + puntajesOrdenados[mitad]) / 2;
    } else {
        mediana = puntajesOrdenados[mitad];
    }

    // 4. Regla de clasificación basada en el promedio
    let clasificacion = "Estándar";
    if (promedio >= 80) {
        clasificacion = "Elite";
    } else if (promedio >= 50) {
        clasificacion = "Competitivo";
    }

    // 5. Retornar el reporte estadístico consolidado
    return {
        promedio: parseFloat(promedio.toFixed(2)),
        mediana: parseFloat(mediana.toFixed(2)),
        clasificacion: clasificacion,
        explicacion: "Se calculó el promedio aritmético y la mediana estadística de los puntajes del torneo de esports para clasificar el rendimiento global."
    };
};

```

### Salida Esperada

```json
{
  "promedio": 72,
  "mediana": 70,
  "clasificacion": "Competitivo",
  "explicacion": "Se calculó el promedio aritmético y la mediana estadística de los puntajes del torneo de esports para clasificar el rendimiento global."
}
{
  "promedio": 100,
  "mediana": 100,
  "clasificacion": "Elite",
  "explicacion": "Se calculó el promedio aritmético y la mediana estadística de los puntajes del torneo de esports para clasificar el rendimiento global."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-083/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco