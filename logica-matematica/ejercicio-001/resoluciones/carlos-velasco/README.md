# Logica matematica 001 - operaciones aritmeticas controladas

## Sistema de Cálculo de Puntaje de Participantes

Este script implementa un motor de procesamiento de datos numéricos para determinar la clasificación de un grupo de participantes. Utiliza métodos de programación funcional para consolidar resultados y aplicar criterios de rendimiento.

* **Descripción del proceso:**
* **Validación:** Comprueba si la lista de participantes está vacía para evitar errores de división por cero.
* **Procesamiento matemático:** Calcula el promedio de los valores proporcionados utilizando `reduce`.
* **Aplicación de variables:** Ajusta el puntaje promedio sumando un bono y restando una penalización.
* **Clasificación:** Determina si el participante es "competitivo" o está "en entrenamiento" basado en un umbral de 25 puntos.


* **Tecnologías:**
* JavaScript (lógica matemática y funcional).

---

### Explicación técnica: ¿Cómo funciona la lógica?

La implementación destaca por la limpieza en el manejo de datos:

1. **`reduce`**: Es la forma más eficiente y legible en JavaScript para sumar todos los elementos de un *array*. Al pasar `0` como valor inicial, garantizamos que el acumulador tenga una base numérica sólida.
2. **Operador Ternario**: La línea `puntajeFinal >= 25 ? ...` permite una toma de decisiones compacta, reemplazando una estructura `if-else` tradicional por una expresión de una sola línea, ideal para asignaciones simples de estado.
3. **Objeto de retorno**: Al devolver un objeto, el código proporciona no solo el resultado final, sino también el contexto del mismo (la explicación), lo que hace que la función sea mucho más útil para integrarse en sistemas que requieran logs o auditorías de procesos.


### Lógica del Código

```javascript
const calcularPuntaje = (participantes, bono, penalizacion) => {
    // Protección contra arrays vacíos
    if (participantes.length === 0) return "No hay participantes";

    // Obtener promedio mediante reduce
    const suma = participantes.reduce((acc, curr) => acc + curr, 0);
    const promedio = suma / participantes.length;

    // Ajuste de puntaje final
    const puntajeFinal = promedio + bono - penalizacion;
    const clasificacion = puntajeFinal >= 25 ? "competitivo" : "en entrenamiento";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "Se calculó el promedio, se sumó el bono y se restó la penalización."
    };
};

```

### Salida Esperada

De acuerdo con la ejecución registrada en el archivo {90503B57-F3E4-41AD-9709-F5B739D63D2B}.png, los resultados obtenidos son:

```text
{
  puntaje_final: 28.25,
  clasificacion: 'competitivo',
  explicacion: 'Se calculó el promedio, se sumó el bono y se restó la penalización.'
}
{
  puntaje_final: 13,
  clasificacion: 'en entrenamiento',
  explicacion: 'Se calculó el promedio, se sumó el bono y se restó la penalización.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-001/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

