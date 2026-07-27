# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos (`trazos`) que representan los trazos digitales realizados, conteniendo la distancia en píxeles (`distanciaPx`) y el tiempo en segundos (`tiempoSeg`) de cada ejecución.
* **Proceso**: Validación de integridad global de la lista de trazos, iteración mediante un ciclo `for` para procesar cada elemento asegurando distancias no negativas y previniendo divisiones por cero mediante un tiempo mínimo de seguridad ($0.1$ segundos), aplicación de la fórmula física de velocidad ($v = \frac{d}{t}$), acumulación de distancias y tiempos totales para obtener la velocidad promedio global, y clasificación del estilo de trazo del artista según umbrales de velocidad.
* **Salida**: Un objeto que detalla la `distancia_total_px`, el `tiempo_total_seg`, la `velocidad_promedio_px_s`, el `estilo_clasificacion`, el `detalle_trazos` y una `explicacion` (o un objeto con un mensaje de `error` si la lista de trazos está vacía o no es válida).

## Reglas identificadas

1. **Regla de Prevención de División por Cero**: El tiempo de ejecución de cada trazo cuenta con un umbral defensivo mínimo de $0.1$ segundos para evitar errores matemáticos críticos en trazos instantáneos o datos atípicos.
2. **Regla de Cálculo Cinemático Global e Individual**: La velocidad se determina aplicando el cociente entre la distancia en píxeles y el tiempo en segundos tanto a nivel individual por cada trazo como de forma global utilizando los acumulados totales de la sesión.
3. **Regla de Clasificación por Estilo de Trazo**: La velocidad promedio obtenida categoriza automáticamente el ritmo de trabajo del artista en "Trazos Rápidos / Gestuales" (> 150 px/s), "Estándar / Equilibrado" ($\ge 50$ y $\le 150$ px/s) o "Trazos Lentos / Alta Precisión (Lineart Fino)" (< 50 px/s).

## Pruebas

### Caso normal

* **Entrada**: `trazos = [ { distanciaPx: 300, tiempoSeg: 2.5 }, { distanciaPx: 150, tiempoSeg: 1.0 }, { distanciaPx: 600, tiempoSeg: 5.0 } ]`
* **Resultado esperado**: `{ distancia_total_px: 1050, tiempo_total_seg: 8.5, velocidad_promedio_px_s: 123.53, estilo_clasificacion: "Estándar / Equilibrado", detalle_trazos: [ { trazo_id: 1, distancia_px: 300, tiempoSeg: 2.5, velocidad_px_s: 120 }, { trazo_id: 2, distancia_px: 150, tiempoSeg: 1, velocidad_px_s: 150 }, { trazo_id: 3, distancia_px: 600, tiempoSeg: 5, velocidad_px_s: 120 } ], explicacion: "Se aplicaron las fórmulas de velocidad, tiempo y distancia sobre los trazos de dibujo digital para determinar el ritmo y estilo de ejecución del artista según las reglas del reto." }`

### Caso borde

* **Entrada**: `trazos = [ { distanciaPx: 20, tiempoSeg: 0.1 } ]`
* **Resultado esperado**: `{ distancia_total_px: 20, tiempo_total_seg: 0.1, velocidad_promedio_px_s: 200, estilo_clasificacion: "Trazos Rápidos / Gestuales", detalle_trazos: [ { trazo_id: 1, distancia_px: 20, tiempoSeg: 0.1, velocidad_px_s: 200 } ], explicacion: "Se aplicaron las fórmulas de velocidad, tiempo y distancia sobre los trazos de dibujo digital para determinar el ritmo y estilo de ejecución del artista según las reglas del reto." }`

## Explicacion final

La solución funciona porque traslada con precisión los principios de la cinemática lineal ($v = \frac{d}{t}$) al análisis de trazos en entornos de diseño gráfico digital. Al integrar validaciones defensivas que garantizan la viabilidad matemática de las operaciones (como el control contra divisiones por cero) y combinar métricas individuales con acumulados globales, el algoritmo logra cuantificar y clasificar el rendimiento y estilo de ejecución del artista de manera confiable.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para cinemática de trazos**: Divide manualmente la distancia entre el tiempo para cada elemento del arreglo, calcula el promedio global sumando todas las distancias y dividiéndolas entre el tiempo total, y comprueba los umbrales de velocidad en papel o calculadora para asegurar que los resultados coincidan exactamente antes de implementar el código.