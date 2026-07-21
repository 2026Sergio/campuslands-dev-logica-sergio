## Analisis
El problema requiere filtrar una lista de opciones gastronómicas basándose en restricciones operativas (tiempo, disponibilidad) y preferencias dietéticas del usuario (saludable o no). Se busca optimizar la elección priorizando la rapidez.

- Entrada: Lista de diccionarios (menú), booleano de preferencia (saludable).
- Proceso: Filtrado inicial por disponibilidad e ingredientes, filtrado por salud, y selección final mediante el mínimo tiempo de preparación.
- Salida: El objeto (plato) que mejor cumple los criterios.

## Reglas identificadas

1. El tiempo de preparación no debe exceder los 20 minutos.
2. Los ingredientes deben estar disponibles.
3. Si el usuario prefiere saludable, se excluyen los platos marcados como False.
4. Entre las opciones aptas, se debe seleccionar automáticamente la más rápida.

## Pruebas

### Caso normal

Entrada: menu_food_truck, True

Resultado esperado: {'nombre': 'Ensalada', 'es_saludable': True, 'tiempo_preparacion': 15, 'ingredientes_disponibles': True}

### Caso borde

Entrada: menu_food_truck, False (donde Burger es la única opción pero tarda 25 min)

Resultado esperado: No hay opciones disponibles bajo estos criterios.

## Explicacion final por que tu solucion funciona.
La solución utiliza una estrategia de filtrado en cascada: primero se eliminan las opciones imposibles por tiempo o falta de insumos, luego se aplica el filtro de preferencia dietética y, finalmente, se utiliza la función `min()` con una `lambda` para encontrar la opción más eficiente en tiempo. Esta estructura modular permite añadir nuevos filtros o reglas sin necesidad de reescribir la lógica principal.