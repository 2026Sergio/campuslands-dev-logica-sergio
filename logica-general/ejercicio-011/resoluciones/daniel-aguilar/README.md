# Entrega - ejercicio 011 (organizacion de listas)

Estudiante: Daniel Aguilar
Area: Logica general
Tematica: kickboxing

## Como pense el problema

Con una lista de elementos de kickboxing conviene agruparlos por categoria para poder revisarlos por bloques en vez de uno por uno.

## Reglas que aplique

- Los elementos se agrupan por su campo 'categoria'.
- Dentro de cada grupo, los nombres se ordenan alfabeticamente.
- Si una categoria no tiene elementos, no aparece en el resultado.

## Como ejecutar o revisar mi solucion

La solucion esta escrita en pseudocodigo en el archivo `daniel-aguilar.md` de esta misma carpeta.
Para revisarla: leer la seccion 'Entrada', seguir el 'Pseudocodigo' paso a paso con esos datos,
y comparar el resultado manual contra la seccion 'Salida esperada'. Las dos pruebas incluidas
(caso normal y caso borde) permiten verificar el comportamiento sin depender de un lenguaje o runtime especifico.

## Que casos probe

- Caso normal: usando los datos de ejemplo definidos para este ejercicio (ver Prueba 1 en la solucion).
- Caso borde: un escenario limite propio de esta categoria (lista vacia, empate, division por cero, valor fuera de rango, etc. segun aplique) (ver Prueba 2 en la solucion).
