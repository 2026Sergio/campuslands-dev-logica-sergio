# Plantilla de solución

## Analisis

* **Entrada**: Un *array* de números (`participantes`), un número para `bono` y un número para `penalizacion`.
* **Proceso**: Cálculo del promedio de los participantes utilizando `reduce`, seguido de la aplicación de los ajustes aritméticos (suma del bono y resta de la penalización) y una clasificación basada en un umbral de 25 puntos.
* **Salida**: Un objeto que contiene el puntaje final calculado, la clasificación resultante y un mensaje explicativo.

## Reglas identificadas

1. Si el *array* de participantes está vacío, se debe retornar un mensaje de error ("No hay participantes").
2. El promedio se calcula dividiendo la suma total de los valores entre la cantidad de participantes.
3. El `puntajeFinal` se obtiene mediante la fórmula: `(promedio + bono) - penalizacion`.
4. El usuario es "competitivo" si el puntaje final es mayor o igual a 25; de lo contrario, se clasifica "en entrenamiento".

## Pruebas

### Caso normal

* **Entrada**: `participantes: [12, 28, 13, 40], bono: 8, penalizacion: 3`
* **Resultado esperado**: `{ puntaje_final: 28.25, clasificacion: "competitivo", explicacion: "..." }`

### Caso borde

* **Entrada**: `participantes: [10], bono: 5, penalizacion: 2`
* **Resultado esperado**: `{ puntaje_final: 13, clasificacion: "en entrenamiento", explicacion: "..." }`

## Explicacion final

La solución es efectiva porque combina el uso de **programación funcional** para la agregación de datos (`reduce`) con lógica de **control de flujo** para la clasificación. Al encapsular el resultado en un objeto, se mantiene una estructura clara y legible, permitiendo que la función no solo entregue el valor numérico, sino también el contexto del estado del participante. Además, la validación inicial garantiza que el programa sea robusto frente a datos vacíos.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Caso normal (Cálculo manual)**:
* Suma: $12+28+13+40 = 93$
* Promedio: $93 / 4 = 23.25$
* Ajuste: $23.25 + 8 - 3 = 28.25$
* Clasificación: $28.25 \ge 25$ es verdadero (**Competitivo**).