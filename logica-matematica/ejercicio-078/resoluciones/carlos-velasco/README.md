# Logica matematica 078 - sistema de normalización de puntajes de soldadura

## Motor de Escalamiento Min-Max para Inspección de Calidad

Este script procesa un arreglo de puntajes numéricos obtenidos en inspecciones de calidad de soldadura, implementando la fórmula de normalización **Min-Max** para reescalar los valores dentro de un rango cerrado de 0 a 1, garantizando una comparación homogénea del rendimiento técnico.

* **Descripción del proceso:**
* **Validación de Integridad**: Comprueba si el arreglo de `puntajes` se encuentra vacío o es nulo, retornando un objeto de error descriptivo en caso de ser necesario.
* **Identificación de Extremos**: Obtiene el valor mínimo (`min`) y el valor máximo (`max`) del conjunto utilizando métodos estáticos de JavaScript (`Math.min` y `Math.max`).
* **Gestión de Caso Borde (Valores Idénticos)**: Si todos los puntajes del conjunto son exactamente iguales, la división por cero se previene asignando un valor estandarizado de `1` a cada elemento mediante el método `map`.
* **Aplicación de la Fórmula Min-Max**: Reescala cada puntaje en una escala de 0 a 1 utilizando la siguiente expresión matemática:

$$\text{Normalizado} = \frac{p - \min}{\max - \min}$$


* **Normalización de Formato**: Redondea cada resultado a dos decimales con `toFixed(2)` y retorna un reporte completo con los arreglos originales y transformados.


* **Tecnologías:**
* JavaScript (métodos de transformación de arreglos con `map`, funciones matemáticas globales, prevención de división por cero, formato numérico).



---

### Explicación técnica

1. **Escalamiento Estadístico**: La normalización Min-Max es fundamental en el análisis de datos industriales porque transforma métricas heterogéneas en una proporción estándar, permitiendo evaluar inspecciones de calidad sin sesgos de escala.
2. **Resiliencia ante Casos Borde**: Al verificar si `min === max`, el algoritmo evita de forma proactiva el error matemático de indeterminación (`NaN`) que ocurriría al intentar dividir entre cero en conjuntos de datos constantes.

### Lógica del Código

```javascript
const normalizarPuntajesSoldadura = (puntajes) => {
    // 1. Validar si la lista está vacía o nula
    if (!puntajes || puntajes.length === 0) {
        return { error: "La lista de puntajes de calidad está vacía." };
    }

    const min = Math.min(...puntajes);
    const max = Math.max(...puntajes);

    // 2. Manejar caso borde si todos los puntajes son iguales
    if (min === max) {
        const normalizadosUnicos = puntajes.map(() => 1);
        return {
            puntajes_normalizados: normalizadosUnicos,
            explicacion: "Todos los puntajes son idénticos, por lo que se normalizan a un valor base de 1."
        };
    }

    // 3. Aplicar fórmula Min-Max para escalar entre 0 y 1
    const normalizados = puntajes.map(p => parseFloat(((p - min) / (max - min)).toFixed(2)));

    // 4. Retornar reporte de normalización
    return {
        puntajes_originales: puntajes,
        puntajes_normalizados: normalizados,
        explicacion: "Se aplicó la fórmula de normalización Min-Max para escalar los puntajes de inspección de soldadura entre 0 y 1."
    };
};

```

### Salida Esperada

```json
{
  "puntajes_originales": [75, 85, 95, 60, 90],
  "puntajes_normalizados": [0.5, 0.83, 1, 0, 0.93],
  "explicacion": "Se aplicó la fórmula de normalización Min-Max para escalar los puntajes de inspección de soldadura entre 0 y 1."
}
{
  "puntajes_normalizados": [1, 1, 1],
  "explicacion": "Todos los puntajes son idénticos, por lo que se normalizan a un valor base de 1."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-078/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco