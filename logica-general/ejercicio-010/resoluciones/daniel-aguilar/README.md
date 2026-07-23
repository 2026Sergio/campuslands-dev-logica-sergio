# Entrega - ejercicio 010 (lectura de instrucciones)

Estudiante: Daniel Aguilar
Area: Logica general
Tematica: viajes y turismo

## Como pense el problema

Antes de ejecutar cualquier accion sobre viajes y turismo hay que interpretar el texto crudo de la instruccion y validar que tenga la forma esperada.

## Reglas que aplique

- El formato esperado es: 'comando cantidad recurso'.
- La cantidad debe ser un numero entero, si no lo es la instruccion es invalida.
- El recurso puede tener varias palabras (todo lo que sigue despues de la cantidad).

## Como ejecutar o revisar mi solucion

La solucion esta escrita en pseudocodigo en el archivo `daniel-aguilar.md` de esta misma carpeta.
Para revisarla: leer la seccion 'Entrada', seguir el 'Pseudocodigo' paso a paso con esos datos,
y comparar el resultado manual contra la seccion 'Salida esperada'. Las dos pruebas incluidas
(caso normal y caso borde) permiten verificar el comportamiento sin depender de un lenguaje o runtime especifico.

## Que casos probe

- Caso normal: usando los datos de ejemplo definidos para este ejercicio (ver Prueba 1 en la solucion).
- Caso borde: un escenario limite propio de esta categoria (lista vacia, empate, division por cero, valor fuera de rango, etc. segun aplique) (ver Prueba 2 en la solucion).
