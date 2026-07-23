## Analisis
El problema requiere implementar un sistema de colas o turnos donde la asignación no es simplemente por orden de llegada, sino por competencia técnica (certificación) y criticidad del trabajo (urgencia).

- Entrada: Lista de diccionarios de soldadores, Nivel de urgencia del proyecto (alta/normal).
- Proceso: Ordenamiento de la lista basado en un mapa de prioridad y filtrado lógico según la urgencia.
- Salida: Objeto (diccionario) con los datos del soldador seleccionado.

## Reglas identificadas

1. Certificaciones válidas tienen un orden: A es superior a B, B es superior a C.
2. Si la urgencia es "alta", el sistema debe intentar asignar obligatoriamente a un soldador nivel A.
3. Si no hay nivel A disponible para urgencias, se asigna el mejor disponible según el orden de certificación.
4. Si la urgencia es normal, se sigue el orden natural de certificación.

## Pruebas

### Caso normal

Entrada: lista_soldadores, "normal"

Resultado esperado: {'nombre': 'Ana', 'certificacion': 'A'}

### Caso borde

Entrada: [{"nombre": "Luis", "certificacion": "C"}], "alta"

Resultado esperado: {'nombre': 'Luis', 'certificacion': 'C'}

## Explicacion final por que tu solucion funciona.
La solución utiliza una técnica de mapeo de prioridades para convertir etiquetas de texto ("A", "B", "C") en valores numéricos comparables. Al combinar `sorted()` con una función `lambda`, garantizamos que la lógica de selección sea escalable: si mañana se agrega un nivel "D", solo se debe actualizar el diccionario `orden_prioridad` sin alterar el flujo principal.