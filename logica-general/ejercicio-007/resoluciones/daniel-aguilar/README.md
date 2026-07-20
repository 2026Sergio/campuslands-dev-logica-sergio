# Entrega - ejercicio 007 (deteccion de inconsistencias)

Estudiante: Daniel Aguilar
Area: Logica general
Tematica: playlist musical

## Como pense el problema

Con datos de playlist musical conviene revisar dos tipos de fallas comunes: valores fuera de rango y duplicados, porque ambos pueden colarse en listas cargadas manualmente.

## Reglas que aplique

- Un valor negativo es una inconsistencia.
- Un nombre repetido en la lista es una inconsistencia (a partir de la segunda aparicion).
- Un mismo elemento puede reportar varias inconsistencias.

## Como ejecutar o revisar mi solucion

La solucion esta escrita en pseudocodigo en el archivo `daniel-aguilar.md` de esta misma carpeta.
Para revisarla: leer la seccion 'Entrada', seguir el 'Pseudocodigo' paso a paso con esos datos,
y comparar el resultado manual contra la seccion 'Salida esperada'. Las dos pruebas incluidas
(caso normal y caso borde) permiten verificar el comportamiento sin depender de un lenguaje o runtime especifico.

## Que casos probe

- Caso normal: usando los datos de ejemplo definidos para este ejercicio (ver Prueba 1 en la solucion).
- Caso borde: un escenario limite propio de esta categoria (lista vacia, empate, division por cero, valor fuera de rango, etc. segun aplique) (ver Prueba 2 en la solucion).
