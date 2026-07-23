# Entrega - ejercicio 005 (ordenamiento de prioridades)

Estudiante: Daniel Aguilar
Area: Logica general
Tematica: taller mecanico

## Como pense el problema

Ordenar elementos de taller mecanico por prioridad exige definir bien el desempate: primero valor, luego alfabetico, para que el resultado sea siempre determinista.

## Reglas que aplique

- Se ordena primero por prioridad: alta antes que media antes que baja.
- En caso de empate en prioridad, gana el de mayor valor.
- Si tambien empatan en valor, se ordena alfabeticamente por nombre.

## Como ejecutar o revisar mi solucion

La solucion esta escrita en pseudocodigo en el archivo `daniel-aguilar.md` de esta misma carpeta.
Para revisarla: leer la seccion 'Entrada', seguir el 'Pseudocodigo' paso a paso con esos datos,
y comparar el resultado manual contra la seccion 'Salida esperada'. Las dos pruebas incluidas
(caso normal y caso borde) permiten verificar el comportamiento sin depender de un lenguaje o runtime especifico.

## Que casos probe

- Caso normal: usando los datos de ejemplo definidos para este ejercicio (ver Prueba 1 en la solucion).
- Caso borde: un escenario limite propio de esta categoria (lista vacia, empate, division por cero, valor fuera de rango, etc. segun aplique) (ver Prueba 2 en la solucion).
