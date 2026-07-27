# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto (`escenario`) que contiene las variables de supervivencia de la película de terror (`nivelOscuridad`, `presenciaMonstruo`, `bateriaLinterna` y `esconditeSeguro`).
* **Proceso**: Validación de existencia del escenario, desestructuración de sus propiedades, evaluación condicional jerárquica para determinar el nivel de amenaza (verificando la combinación crítica de monstruo presente y batería baja menor o igual a 15, o niveles altos de oscuridad con buena carga), resolución secundaria basada en la disponibilidad de un escondite seguro, registro de acciones en una bitácora y actualización de la máquina de estados.
* **Salida**: Un objeto que detalla el `estado_final_supervivencia`, la `bitacora` con el registro de eventos y una `explicacion` (o un objeto con un mensaje de `error` si los datos del escenario están vacíos).

## Reglas identificadas

1. **Regla de Peligro Inminente y Desenlace**: Si hay presencia de un monstruo y la batería de la linterna es crítica ($\le$ 15), el sistema evalúa de forma anidada si hay un escondite seguro para determinar si el personaje sobrevive u es atrapado.
2. **Regla de Exploración Precavida**: Si el nivel de oscuridad es alto ($\ge$ 80) pero la linterna cuenta con suficiente carga (> 15), el personaje avanza iluminando los pasillos con precaución.
3. **Regla de Zona Segura por Defecto**: Si ninguna de las condiciones de amenaza o alta oscuridad se cumple, el entorno se mantiene temporalmente en calma.

## Pruebas

### Caso normal

* **Entrada**: `{ nivelOscuridad: 90, presenciaMonstruo: false, bateriaLinterna: 60, esconditeSeguro: true }`
* **Resultado esperado**: `{ estado_final_supervivencia: "Avanzando con Precaución (Linterna Activa)", bitacora: [ { paso: 1, accion: "Se utiliza la linterna para iluminar pasillos oscuros." } ], explicacion: "Se simuló el cambio de estados del personaje en la película de terror basándose en la oscuridad, presencia de amenazas, recursos de batería y disponibilidad de escondites." }`

### Caso borde

* **Entrada**: `{ nivelOscuridad: 95, presenciaMonstruo: true, bateriaLinterna: 10, esconditeSeguro: false }`
* **Resultado esperado**: `{ estado_final_supervivencia: "Atrapado (Fin del Juego)", bitacora: [ { paso: 1, alerta: "Monstruo detectado con batería crítica en la linterna." }, { paso: 2, accion: "No hay escondite seguro; el personaje fue capturado." } ], explicacion: "Se simuló el cambio de estados del personaje en la película de terror basándose en la oscuridad, presencia de amenazas, recursos de batería y disponibilidad de escondites." }`

## Explicacion final

La solución funciona porque implementa una máquina de estados jerárquica basada en condiciones estructuradas. Prioriza de manera lógica las situaciones de máxima criticidad (amenaza activa con recursos agotados) antes de evaluar escenarios de exploración rutinaria. Además, utiliza estructuras condicionales anidadas para resolver los desenlaces secundarios y registra cada transición en una bitácora detallada, garantizando un flujo de simulación coherente y predecible.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para máquinas de estados condicionales**: Simula manualmente las combinaciones de umbrales (como batería crítica, niveles de oscuridad y presencia de recursos alternativos) para asegurar que las bifurcaciones y los estados finales devuelvan los resultados esperados antes de programar la lógica definitiva.