# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto `condiciones` que contiene propiedades numéricas y booleanas: `viento` (number), `visibilidad` (number) y `equipoRevisado` (boolean).
* **Proceso**: Evaluación jerárquica de variables meteorológicas y de equipo mediante una estructura condicional en cascada (`if-else if`) para determinar el estado de seguridad de un salto.
* **Salida**: Un objeto que detalla el `resultado` del dictamen ("Apto para salto", "Cancelado", "Espera" o "Revisión requerida") y un `motivo` descriptivo.

## Reglas identificadas

1. **Límite de Viento**: Si la velocidad del viento supera los 25 nudos/unidades, el salto se cancela por riesgo crítico.
2. **Límite de Visibilidad**: Si la visibilidad es menor a 5 unidades, el salto entra en estado de espera hasta nuevo aviso.
3. **Verificación de Equipo**: Si el equipo no ha sido revisado (`equipoRevisado` es falso), se exige una revisión técnica obligatoria antes de proceder.

## Pruebas

### Caso normal

* **Entrada**: `{ viento: 15, visibilidad: 10, equipoRevisado: true }`
* **Resultado esperado**: `{ resultado: "Apto para salto", motivo: "Todas las condiciones meteorológicas son favorables." }`

### Caso borde

* **Entrada**: `{ viento: 30, visibilidad: 10, equipoRevisado: true }`
* **Resultado esperado**: `{ resultado: "Cancelado", motivo: "Velocidad del viento excede el límite seguro." }`

## Explicacion final

La solución funciona gracias a una evaluación condicional en cascada que prioriza los riesgos más críticos en la parte superior de la estructura (`if-else if`). Al verificar primero el viento, luego la visibilidad y finalmente el equipo, el algoritmo garantiza que ningún factor de peligro secundario oculte una condición extrema de cancelación. Además, al inicializar variables predeterminadas para un escenario favorable, el código simplifica el flujo de retorno en caso de que todas las condiciones se cumplan sin inconvenientes.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de Viento**: `condiciones.viento > 25`
* **Condición de Visibilidad**: `condiciones.visibilidad < 5`
* **Condición de Equipo**: `!condiciones.equipoRevisado`