# Entrega - ejercicio 009 (simulacion de estados)

Estudiante: Daniel Aguilar
Area: Logica general
Tematica: peliculas de miedo

## Como pense el problema

Un elemento de peliculas de miedo se modela como una maquina de estados simple; lo importante es no permitir transiciones que no correspondan al estado actual.

## Reglas que aplique

- El estado inicial siempre es 'disponible'.
- 'prestar' solo funciona si el estado actual es 'disponible', y lo cambia a 'prestado'.
- 'devolver' solo funciona si el estado actual es 'prestado', y lo regresa a 'disponible'.
- Cualquier evento que no aplique al estado actual se ignora y queda registrado en el historial.

## Como ejecutar o revisar mi solucion

La solucion esta escrita en pseudocodigo en el archivo `daniel-aguilar.md` de esta misma carpeta.
Para revisarla: leer la seccion 'Entrada', seguir el 'Pseudocodigo' paso a paso con esos datos,
y comparar el resultado manual contra la seccion 'Salida esperada'. Las dos pruebas incluidas
(caso normal y caso borde) permiten verificar el comportamiento sin depender de un lenguaje o runtime especifico.

## Que casos probe

- Caso normal: usando los datos de ejemplo definidos para este ejercicio (ver Prueba 1 en la solucion).
- Caso borde: un escenario limite propio de esta categoria (lista vacia, empate, division por cero, valor fuera de rango, etc. segun aplique) (ver Prueba 2 en la solucion).
