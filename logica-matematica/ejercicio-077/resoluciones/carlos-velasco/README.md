# Logica matematica 077 - sistema de estadísticas de ranking y rendimiento de renders

## Motor de Análisis Estadístico para Evaluaciones de Renders

Este script procesa un arreglo de puntajes numéricos obtenidos en evaluaciones de renders arquitectónicos, calculando métricas estadísticas clave como el promedio, el puntaje máximo, el puntaje mínimo y asignando una categoría general de clasificación basada en el rendimiento global.

* **Descripción del proceso:**
* **Validación de Integridad**: Comprueba si el arreglo de `puntajes` es nulo o se encuentra vacío, retornando un objeto de error en caso de cumplirse esta condición.
* **Cálculo de Acumulados y Promedio**: Utiliza el método `reduce` para sumar los elementos y obtener la media aritmética dividiendo entre la cantidad total de puntajes.
* **Identificación de Extremos**: Extrae los valores máximo y mínimo del conjunto utilizando las funciones nativas `Math.max` y `Math.min` combinadas con el operador de propagación (`...`).
* **Clasificación por Rangos**:
* Promedio $\ge$ 85 $\rightarrow$ **Elite**.
* Promedio $\ge$ 70 y $<$ 85 $\rightarrow$ **Competitivo**.
* Promedio $<$ 70 $\rightarrow$ **Estándar**.


* **Normalización de Salida**: Formatea el promedio a dos decimales y retorna un objeto estructurado con todas las estadísticas calculadas.


* **Tecnologías:**
* JavaScript (métodos de arreglos como `reduce`, funciones matemáticas estáticas, propagación de elementos, operadores condicionales).



---

### Explicación técnica

1. **Eficiencia en Reducción de Datos**: La combinación de `reduce` junto con métodos matemáticos nativos permite procesar colecciones de datos de manera limpia, imperativa y altamente legible sin necesidad de bucles extensos.
2. **Control de Casos Vacíos**: La validación inicial previene fallas críticas de ejecución ante arreglos vacíos u nulos, asegurando la robustez de la función en entornos de producción.

### Lógica del Código

```javascript
const calcularRankingRenders = (puntajes) => {
    // 1. Validar si la lista de puntajes está vacía o nula
    if (!puntajes || puntajes.length === 0) {
        return { error: "La lista de puntajes está vacía." };
    }

    // 2. Calcular estadísticas principales
    const total = puntajes.reduce((acc, val) => acc + val, 0);
    const promedio = total / puntajes.length;
    const maximo = Math.max(...puntajes);
    const minimo = Math.min(...puntajes);

    // 3. Clasificación general según el promedio
    let clasificacion = "Estándar";
    if (promedio >= 85) {
        clasificacion = "Elite";
    } else if (promedio >= 70) {
        clasificacion = "Competitivo";
    }

    // 4. Retornar el reporte consolidado
    return {
        puntaje_promedio: parseFloat(promedio.toFixed(2)),
        puntaje_maximo: maximo,
        puntaje_minimo: minimo,
        clasificacion_general: clasificacion,
        explicacion: `Se procesaron ${puntajes.length} puntajes de renders arquitectónicos obteniendo un promedio de ${promedio.toFixed(2)}.`
    };
};

```

### Salida Esperada

```json
{
  "puntaje_promedio": 87.6,
  "puntaje_maximo": 95,
  "puntaje_minimo": 79,
  "clasificacion_general": "Elite",
  "explicacion": "Se procesaron 5 puntajes de renders arquitectónicos obteniendo un promedio de 87.60."
}
{
  "puntaje_promedio": 60,
  "puntaje_maximo": 60,
  "puntaje_minimo": 60,
  "clasificacion_general": "Estándar",
  "explicacion": "Se procesaron 1 puntajes de renders arquitectónicos obteniendo un promedio de 60.00."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-077/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco