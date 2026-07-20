# Entrega - ejercicio 004 (filtros por condiciones)

Estudiante: Daniel Aguilar
Area: Logica general
Tematica: inventario de motos

## Como pense el problema

Se necesita quedarse solo con elementos de inventario de motos que superen un umbral de valor y que ademas esten activos; ambas condiciones son obligatorias (AND).

## Reglas que aplique

- Un elemento pasa el filtro solo si su valor es estrictamente mayor al umbral (40).
- Ademas el elemento debe estar en estado 'activo'.
- Un valor igual al umbral NO pasa el filtro (se exige estrictamente mayor).

## Como ejecutar o revisar mi solucion

La solucion esta escrita en pseudocodigo en el archivo `daniel-aguilar.md` de esta misma carpeta.
Para revisarla: leer la seccion 'Entrada', seguir el 'Pseudocodigo' paso a paso con esos datos,
y comparar el resultado manual contra la seccion 'Salida esperada'. Las dos pruebas incluidas
(caso normal y caso borde) permiten verificar el comportamiento sin depender de un lenguaje o runtime especifico.

## Que casos probe

- Caso normal: usando los datos de ejemplo definidos para este ejercicio (ver Prueba 1 en la solucion).
- Caso borde: un escenario limite propio de esta categoria (lista vacia, empate, division por cero, valor fuera de rango, etc. segun aplique) (ver Prueba 2 en la solucion).
