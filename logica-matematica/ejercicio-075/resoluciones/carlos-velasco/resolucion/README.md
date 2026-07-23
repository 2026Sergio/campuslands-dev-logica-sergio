# Plantilla de solucion

## Analisis

* **Entrada**: Dos valores numéricos: `trazosTotales` y `tiempoMinutos`.
* **Proceso**: Validación de que el tiempo sea mayor a cero, cálculo de la velocidad de trazo por minuto (división de trazos entre tiempo), proyección del tiempo restante para alcanzar un objetivo de 1000 trazos, y normalización de los resultados numéricos a dos decimales.
* **Salida**: Un objeto que detalla la `velocidad_por_minuto`, el `tiempo_estimado_restante` y una `explicacion` del cálculo (o un objeto con un mensaje de `error` si el tiempo es inválido).

## Reglas identificadas

1. **Validación de Tiempo**: El tiempo en minutos debe ser estrictamente mayor a cero para prevenir errores matemáticos de división por cero o indefinición.
2. **Cálculo de Velocidad**: La velocidad operativa se determina dividiendo los trazos totales ejecutados entre el tiempo transcurrido en minutos.
3. **Proyección de Productividad**: El tiempo restante se calcula restando los trazos actuales de la meta objetivo (1000) y dividiendo el resultado entre la velocidad de trazo calculada.

## Pruebas

### Caso normal

* **Entrada**: `250, 10`
* **Resultado esperado**: `{ velocidad_por_minuto: 25, tiempo_estimado_restante: 30, explicacion: "Se calculó la velocidad basada en 250 trazos realizados en 10 minutos." }`

### Caso borde

* **Entrada**: `500, 20`
* **Resultado esperado**: `{ velocidad_por_minuto: 25, tiempo_estimado_restante: 20, explicacion: "Se calculó la velocidad basada en 500 trazos realizados en 20 minutos." }`

## Explicacion final

La solución funciona porque implementa un flujo matemático secuencial respaldado por una validación inicial de seguridad. Al comprobar primero que `tiempoMinutos` sea mayor a cero, el algoritmo evita fallos críticos en tiempo de ejecución. Posteriormente, utiliza proporciones aritméticas directas para calcular tanto la velocidad actual como la proyección de tiempo restante hacia una meta fija, aplicando `toFixed(2)` y `parseFloat` para entregar métricas limpias y estandarizadas aptas para la gestión de proyectos de diseño.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Cálculo manual (250 trazos en 10 min)**:
* Velocidad: $250 / 10 = 25$ trazos/min.
* Trazos restantes para 1000: $1000 - 250 = 750$ trazos.
* Tiempo restante: $750 / 25 = 30$ minutos.