# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo numérico `participantes` (los puntajes de base), un número `bono` a sumar, y un número `penalizacion` a restar.
* **Proceso**: Validación de que el arreglo no esté vacío, cálculo de la suma total mediante `reduce` y división entre la cantidad de elementos para obtener el promedio base, aplicación de operaciones aritméticas controladas (sumar bono y restar penalización), verificación de límite mínimo (evitando puntajes negativos), y clasificación según umbrales predefinidos.
* **Salida**: Un objeto que detalla el `puntaje_final` redondeado a dos decimales, la `clasificacion` asignada y una `explicacion` (o un objeto con un mensaje de `error` si la lista está vacía).

## Reglas identificadas

1. **Validación de Arreglo Vacío**: Si la lista de participantes es nula o no contiene elementos, el sistema debe retornar un objeto de error descriptivo de inmediato.
2. **Restricción de Límite Mínimo**: Si el resultado de las operaciones aritméticas (promedio base más bono menos penalización) resulta menor a cero, el puntaje final debe ajustarse obligatoriamente a `0`.
3. **Clasificación por Umbrales**: El puntaje final se categoriza de forma jerárquica en "Competitivo" ($\ge$ 25), "Avanzado" ($\ge$ 15) o "Estándar" (menores a 15).

## Pruebas

### Caso normal

* **Entrada**: `participantes = [12, 18, 25, 30]`, `bono = 8`, `penalizacion = 3`
* **Resultado esperado**: `{ puntaje_final: 25.75, clasificacion: "Competitivo", explicacion: "Se sumó el bono y se restó la penalización al promedio base según las reglas de operaciones controladas." }`

### Caso borde

* **Entrada**: `participantes = [5, 10]`, `bono = 2`, `penalizacion = 20`
* **Resultado esperado**: `{ puntaje_final: 0, clasificacion: "Estándar", explicacion: "Se sumó el bono y se restó la penalización al promedio base según las reglas de operaciones controladas." }`

## Explicacion final

La solución funciona porque implementa un flujo matemático secuencial y controlado. Primero, calcula con precisión el promedio base de los participantes usando métodos de reducción de arreglos. A continuación, aplica de forma directa los ajustes de bonificación y penalización. Lo más importante es que incluye una guarda de seguridad que previene valores negativos si las penalizaciones superan el puntaje acumulado, asegurando que la clasificación posterior mediante umbrales se ejecute sobre datos lógicos y consistentes.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Control de dominios numéricos**: Diseña explícitamente una condición límite para los resultados negativos antes de evaluar las reglas de clasificación por rangos, garantizando que ninguna operación aritmética viole las restricciones físicas o lógicas del sistema.