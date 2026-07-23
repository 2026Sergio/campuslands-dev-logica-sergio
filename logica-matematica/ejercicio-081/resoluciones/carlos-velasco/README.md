# Logica matematica 081 - sistema de operaciones aritméticas controladas para puntajes

## Motor de Cálculo de Promedios, Bonificaciones y Restricciones Numéricas

Este script procesa un arreglo de puntajes numéricos de participantes para calcular un promedio base, aplicando posteriormente operaciones aritméticas controladas (adición de bonos y sustracción de penalizaciones) junto con restricciones de rango mínimo y una clasificación jerárquica final.

* **Descripción del proceso:**
* **Validación de Integridad**: Comprueba si el arreglo de `participantes` está vacío o es nulo, retornando un objeto de error en caso de cumplirse.
* **Cálculo del Promedio Base**: Suma todos los elementos del arreglo utilizando el método `reduce` y divide el resultado entre la cantidad total de participantes.
* **Operaciones Aritméticas Controladas**: Ajusta el promedio base sumando el `bono` y restando la `penalizacion`.
* **Restricción de Rango (Caso Borde)**: Evalúa si el puntaje final resultante es menor a cero; de ser así, lo fija obligatoriamente en `0` para evitar valores negativos.
* **Clasificación por Umbrales**: Asigna una categoría según el puntaje final obtenido:
* **Competitivo**: Puntaje final $\ge$ 25.
* **Avanzado**: Puntaje final $\ge$ 15.
* **Estándar**: Valores por debajo de 15.


* **Retorno del Reporte**: Devuelve un objeto con el puntaje final redondeado a dos decimales, la clasificación asignada y la explicación del proceso.


* **Tecnologías:**
* JavaScript (método de reducción `reduce`, operaciones aritméticas básicas, control de condiciones y redondeo numérico con `toFixed`).



---

### Explicación técnica

1. **Aritmética con Validación de Bordes**: Permite aplicar transformaciones matemáticas combinadas (promedios, sumas y restas) asegurando que el resultado se mantenga dentro de un dominio físico o lógico válido (evitando números negativos).
2. **Estructura de Decisión Escalonada**: Categoriza los resultados numéricos transformados mediante umbrales claros que facilitan la lectura e interpretación del rendimiento.

### Lógica del Código

```javascript
const calcularPuntajeCompetitivo = (participantes, bono, penalizacion) => {
    // 1. Validar si la lista de participantes está vacía
    if (!participantes || participantes.length === 0) {
        return { error: "La lista de participantes está vacía." };
    }

    // 2. Calcular el promedio base
    const sumaPuntajes = participantes.reduce((acc, val) => acc + val, 0);
    const promedioBase = sumaPuntajes / participantes.length;

    // 3. Aplicar operaciones aritméticas controladas
    let puntajeFinal = promedioBase + bono - penalizacion;

    // 4. Restricción de control: el puntaje no puede ser menor a 0
    if (puntajeFinal < 0) {
        puntajeFinal = 0;
    }

    // 5. Clasificación según el resultado aritmético
    let clasificacion = "Estándar";
    if (puntajeFinal >= 25) {
        clasificacion = "Competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "Avanzado";
    }

    // 6. Retornar el reporte final
    return {
        puntaje_final: parseFloat(puntajeFinal.toFixed(2)),
        clasificacion: clasificacion,
        explicacion: "Se sumó el bono y se restó la penalización al promedio base según las reglas de operaciones controladas."
    };
};

```

### Salida Esperada

```json
{
  "puntaje_final": 25.75,
  "clasificacion": "Competitivo",
  "explicacion": "Se sumó el bono y se restó la penalización al promedio base según las reglas de operaciones controladas."
}
{
  "puntaje_final": 0,
  "clasificacion": "Estándar",
  "explicacion": "Se sumó el bono y se restó la penalización al promedio base según las reglas de operaciones controladas."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-081/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco