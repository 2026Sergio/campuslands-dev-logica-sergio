# Entrega - ejercicio 002 (validacion de datos)

Estudiante: Daniel Aguilar
Area: Logica general
Tematica: ranking de futbol sala

## Como pense el problema

Antes de procesar elementos de ranking de futbol sala hay que garantizar que los datos esten completos y sean coherentes (nombre presente y valor no negativo).

## Reglas que aplique

- Un elemento es invalido si el nombre esta vacio.
- Un elemento es invalido si el valor es negativo.
- Un elemento puede acumular varios motivos de invalidez a la vez.
- Los elementos validos y los invalidos se reportan por separado.

## Como ejecutar o revisar mi solucion

La solucion esta escrita en pseudocodigo en el archivo `daniel-aguilar.md` de esta misma carpeta.
Para revisarla: leer la seccion 'Entrada', seguir el 'Pseudocodigo' paso a paso con esos datos,
y comparar el resultado manual contra la seccion 'Salida esperada'. Las dos pruebas incluidas
(caso normal y caso borde) permiten verificar el comportamiento sin depender de un lenguaje o runtime especifico.

## Que casos probe

- Caso normal: usando los datos de ejemplo definidos para este ejercicio (ver Prueba 1 en la solucion).
- Caso borde: un escenario limite propio de esta categoria (lista vacia, empate, division por cero, valor fuera de rango, etc. segun aplique) (ver Prueba 2 en la solucion).
