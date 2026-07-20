# Entrega - ejercicio 006 (busqueda de elementos)

Estudiante: Daniel Aguilar
Area: Logica general
Tematica: autos hiperdeportivos

## Como pense el problema

Buscar un elemento de autos hiperdeportivos en una lista requiere recorrerla y comparar de forma insensible a mayusculas, cubriendo el caso de no encontrarlo.

## Reglas que aplique

- La busqueda del nombre no distingue mayusculas de minusculas.
- Si el elemento existe, se devuelve su posicion (0-index) y sus datos.
- Si no existe, se devuelve encontrado=false y posicion=-1.

## Como ejecutar o revisar mi solucion

La solucion esta escrita en pseudocodigo en el archivo `daniel-aguilar.md` de esta misma carpeta.
Para revisarla: leer la seccion 'Entrada', seguir el 'Pseudocodigo' paso a paso con esos datos,
y comparar el resultado manual contra la seccion 'Salida esperada'. Las dos pruebas incluidas
(caso normal y caso borde) permiten verificar el comportamiento sin depender de un lenguaje o runtime especifico.

## Que casos probe

- Caso normal: usando los datos de ejemplo definidos para este ejercicio (ver Prueba 1 en la solucion).
- Caso borde: un escenario limite propio de esta categoria (lista vacia, empate, division por cero, valor fuera de rango, etc. segun aplique) (ver Prueba 2 en la solucion).
