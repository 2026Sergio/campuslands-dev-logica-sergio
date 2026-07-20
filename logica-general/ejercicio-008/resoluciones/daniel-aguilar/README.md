# Entrega - ejercicio 008 (flujos paso a paso)

Estudiante: Daniel Aguilar
Area: Logica general
Tematica: peliculas de ciencia ficcion

## Como pense el problema

Un elemento de peliculas de ciencia ficcion pasa por un flujo de estados fijo; el ejercicio es validar que cada transicion respete el orden permitido.

## Reglas que aplique

- El flujo valido es: recibido -> revisado -> (aprobado o rechazado).
- No se puede pasar de 'recibido' directo a 'aprobado' o 'rechazado' sin pasar por 'revisado'.
- Cualquier transicion no permitida se marca como invalida y el estado no cambia.

## Como ejecutar o revisar mi solucion

La solucion esta escrita en pseudocodigo en el archivo `daniel-aguilar.md` de esta misma carpeta.
Para revisarla: leer la seccion 'Entrada', seguir el 'Pseudocodigo' paso a paso con esos datos,
y comparar el resultado manual contra la seccion 'Salida esperada'. Las dos pruebas incluidas
(caso normal y caso borde) permiten verificar el comportamiento sin depender de un lenguaje o runtime especifico.

## Que casos probe

- Caso normal: usando los datos de ejemplo definidos para este ejercicio (ver Prueba 1 en la solucion).
- Caso borde: un escenario limite propio de esta categoria (lista vacia, empate, division por cero, valor fuera de rango, etc. segun aplique) (ver Prueba 2 en la solucion).
