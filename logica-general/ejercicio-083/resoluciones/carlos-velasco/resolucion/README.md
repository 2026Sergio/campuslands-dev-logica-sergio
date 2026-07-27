# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto (`estadoPartida`) que contiene métricas tácticas como `oroEquipo`, `oroRival`, `torresDerribadas`, `baronesConseguidos` y `vidaBasePropia`.
* **Proceso**: Validación de existencia del objeto de estado, desestructuración de propiedades, establecimiento de un comportamiento base por defecto, y evaluación jerárquica de reglas condicionales compuestas para determinar la estrategia táctica óptima según el riesgo, los objetivos y la economía.
* **Salida**: Un objeto que detalla la `estrategia_recomendada` y la `explicacion` (o un objeto con un mensaje de `error` si no se proporciona el estado de la partida).

## Reglas identificadas

1. **Emergencia Defensiva Prioritaria**: Si la vida de la base propia es menor o igual a 20 y el oro del rival supera al del equipo, la regla de supervivencia obliga a dictar "Defensa Total en Base".
2. **Presión y Finalización por Objetivos**: Si se han conseguido barones (`baronesConseguidos > 0`) y el oro del equipo es igual o mayor al del rival, el algoritmo ordena "Iniciar Empuje Global (Push / Finalizar)".
3. **Control de Mapa por Estructuras**: Si el equipo cuenta con 5 o más torres derribadas y ventaja de oro, se recomienda el "Control de Objetivos Neutrales (Dragón / Visión)".

## Pruebas

### Caso normal

* **Entrada**: `{ oroEquipo: 45000, oroRival: 40000, torresDerribadas: 6, baronesConseguidos: 1, vidaBasePropia: 100 }`
* **Resultado esperado**: `{ estrategia_recomendada: "Iniciar Empuje Global (Push / Finalizar)", explicacion: "Se cuenta con el beneficio del Barón y ventaja o igualdad de oro para presionar la base enemiga." }`

### Caso borde

* **Entrada**: `{ oroEquipo: 30000, oroRival: 50000, torresDerribadas: 2, baronesConseguidos: 0, vidaBasePropia: 15 }`
* **Resultado esperado**: `{ estrategia_recomendada: "Defensa Total en Base", explicacion: "La vida de la base es crítica y el rival tiene ventaja económica; priorizar despeje de súbditos." }`

## Explicacion final

La solución funciona porque implementa un sistema de toma de decisiones en cascada (estructuras `if-else if`) que prioriza lógicamente las situaciones de mayor criticidad para el equipo. Al evaluar primero el riesgo extremo de derrota (vida de la base baja con desventaja financiera) antes de considerar estrategias ofensivas o de control de mapa, el algoritmo garantiza una respuesta táctica segura y coherente con el entorno de los eSports.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Jerarquía de riesgos y ventajas**: Organiza tus estructuras de decisión condicional evaluando los escenarios de peligro crítico o supervivencia en los primeros bloques lógicos, dejando las condiciones de ventaja u optimización para las sentencias subsecuentes.