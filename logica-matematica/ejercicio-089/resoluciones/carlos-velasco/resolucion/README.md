# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo numérico (`tiemposRituales`) que representa la duración en minutos de cada ritual y un valor numérico (`divisorClave`) que actúa como factor divisor de control.
* **Proceso**: Validación de integridad de los datos de entrada (arreglo no vacío y divisor estrictamente mayor a cero), control defensivo para neutralizar tiempos negativos, iteración mediante un ciclo `for`, aplicación del operador aritmético de módulo (`%`) para evaluar si el residuo de la división es igual a cero, conteo y clasificación individual de los elementos en purificados o corruptos, y categorización global del estado de la sesión.
* **Salida**: Un objeto que detalla el `total_rituales`, los contadores de `rituales_exitosos` y `rituales_bloqueados`, la `clasificacion_sesion`, el `reporte` detallado por cada ritual y una `explicacion` (o un objeto con un mensaje de `error` si los parámetros no son válidos).

## Reglas identificadas

1. **Validación del Divisor Clave**: El divisor clave debe ser obligatoriamente un número válido estrictamente mayor a cero para evitar errores matemáticos de división por cero o indeterminaciones.
2. **Evaluación de Divisibilidad por Módulo**: Un ritual se considera purificado y exitoso si el residuo de dividir su tiempo entre el divisor clave es exactamente igual a cero (`tiempo % divisorClave === 0`).
3. **Clasificación Global de la Sesión**: La sesión se categoriza jerárquicamente en "Protegido / Seguro" (si los exitosos superan a los bloqueados), "Equilibrio Precario" (si ambos contadores son iguales) o "Inestable" (si predominan los bloqueados).

## Pruebas

### Caso normal

* **Entrada**: `tiemposRituales = [15, 20, 30, 42, 10]`, `divisorClave = 5`
* **Resultado esperado**: `{ total_rituales: 5, rituales_exitosos: 3, rituales_bloqueados: 2, clasificacion_sesion: "Protegido / Seguro", reporte: [ { ritual_id: 1, tiempo_minutos: 15, estado: "Ritual Purificado (Divisible)" }, { ritual_id: 2, tiempo_minutos: 20, estado: "Ritual Purificado (Divisible)" }, { ritual_id: 3, tiempo_minutos: 30, estado: "Ritual Purificado (Divisible)" }, { ritual_id: 4, tiempo_minutos: 42, estado: "Ritual Corrupto / Inestable (No Divisible)" }, { ritual_id: 5, tiempo_minutos: 10, estado: "Ritual Purificado (Divisible)" } ], explicacion: "Se aplicaron operaciones de módulo y divisibilidad sobre los tiempos de los rituales para determinar cuáles cumplían con el factor clave de purificación en la temática de películas de terror." }`

### Caso borde

* **Entrada**: `tiemposRituales = [7, 13, 19]`, `divisorClave = 3`
* **Resultado esperado**: `{ total_rituales: 3, rituales_exitosos: 0, rituales_bloqueados: 3, clasificacion_sesion: "Inestable", reporte: [ { ritual_id: 1, tiempo_minutos: 7, estado: "Ritual Corrupto / Inestable (No Divisible)" }, { ritual_id: 2, tiempo_minutos: 13, estado: "Ritual Corrupto / Inestable (No Divisible)" }, { ritual_id: 3, tiempo_minutos: 19, estado: "Ritual Corrupto / Inestable (No Divisible)" } ], explicacion: "Se aplicaron operaciones de módulo y divisibilidad sobre los tiempos de los rituales para determinar cuáles cumplían con el factor clave de purificación en la temática de películas de terror." }`

## Explicacion final

La solución funciona porque utiliza de manera eficiente el operador aritmético de módulo (`%`) para comprobar con absoluta precisión matemática la divisibilidad de cada valor frente a un factor clave. Al combinar validaciones defensivas de entrada, controles de límites para datos negativos y acumuladores condicionales, el algoritmo procesa de forma estructurada cada elemento de la colección y emite un diagnóstico y una clasificación global perfectamente confiables.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para operaciones de módulo**: Calcula de forma manual el residuo (`%`) de diversos números frente a tus divisores clave propuestos para asegurar que las condiciones de divisibilidad exactas coincidan con los estados esperados antes de implementar el código.