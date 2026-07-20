# Reto: Sistema de Curación de Catálogo - Películas de Ciencia Ficción 🎬
## Módulo: Lógica de Programación - Campuslands

Este repositorio contiene la arquitectura lógica y el código de resolución para el reto de flujos ordenados paso a paso aplicado al análisis de un catálogo de películas de ciencia ficción. El objetivo principal de este ejercicio no es memorizar código, sino analizar una situación del mundo real, estructurarla en reglas de negocio numéricas y construir una solución algorítmica ordenada.

---

## 🎯 Objetivo del Reto

Crear una solución interactiva por consola que reciba metadatos dinámicos de una obra fílmica, aplique un embudo secuencial de reglas y entregue un resultado verificable que determine su viabilidad dentro de un evento de streaming continuo.

---

# Plantilla de solucion

## Analisis

- **Entrada:**
  - `titulo`: Cadena de texto (`str`) con el nombre comercial de la película, sanitizado con el método `.strip()`.
  - `año_estreno`: Valor numérico entero (`int`) que almacena el año de lanzamiento en cines.
  - `calificacion`: Valor numérico flotante (`float`) que representa el puntaje de la crítica especializada en una escala de 0.0 a 10.0.
  - `duracion_minutos`: Valor numérico entero (`int`) que mide el tiempo de ejecución de la cinta.
- **Proceso:**
  - **Asignación de Banderas Booleanas:** El sistema procesa los inputs de forma atómica para validar de manera aislada tres criterios (si es clásico moderno, si tiene buena crítica y si posee un metraje adecuado).
  - **Embudo Secuencial Descendente:** Se aplica una estructura `if-elif-else` que evalúa de mayor a menor restricción técnica las banderas utilizando los conectores booleanos `and`.
- **Salida:**
  - `estado_curacion`: Cadena de texto (`str`) que declara de forma visual y categórica el estatus del filme (Recomendada, Advertencia o Rechazada).
  - `dictamen`: Cadena de texto (`str`) con la justificación técnica que explica los motivos de la decisión final del algoritmo.

## Reglas identificadas

1. **Clásico Moderno:** La película debe haber sido estrenada a partir del año 1990 en adelante (`>= 1990`).
2. **Aclamación Crítica:** El puntaje de evaluación debe ser mayor o igual a los 8.0 puntos (`>= 8.0`).
3. **Límite de Fatiga (Metraje):** Para pertenecer al maratón continuo, la duración del filme no puede exceder el tope lineal de los 150 minutos (`<= 150`).
4. **Criterio de Selección:** Si se cumplen las tres reglas simultáneamente (`and`), el título clasifica al evento premium. Si tiene la calidad y el año pero falla en el tiempo, pasa a edición extendida. En cualquier otro caso, es descartado.

## Pruebas

### Caso normal

- **Entrada:**
  - `titulo`: Matrix
  - `año_estreno`: 1999
  - `calificacion`: 8.7
  - `duracion_minutos`: 136
- **Resultado esperado:**
  - `Estado de Selección: 🟢 RECOMENDADA: MARATÓN PREMIUM`
  - `Dictamen Técnico:    La película 'Matrix' cumple perfectamente con el perfil de accesibilidad y calidad esperada.`

### Caso borde

- **Entrada:**
  - `titulo`: Interstellar
  - `año_estreno`: 2014
  - `calificacion`: 8.6
  - `duracion_minutos`: 169
- **Resultado esperado:**
  - `Estado de Selección: 🟡 ADVERTENCIA: SOLO DISPONIBLE EN EDICIÓN EXTENDIDA`
  - `Dictamen Técnico:    'Interstellar' tiene excelente calidad, pero excede los 150 minutos recomendados para el maratón continuo.`
  *(Prueba la efectividad del bloque `elif` al interceptar películas de altísima calidad pero que quiebran el límite superior exacto de la regla de tiempo).*

## Explicacion final

Escribe aqui por que tu solucion funciona.
Mi solución funciona porque divide el problema en dos capas bien definidas: el análisis de datos y la toma de decisiones. En lugar de evaluar operaciones matemáticas crudas dentro del flujo condicional, primero asigno el resultado de las comparaciones a variables booleanas claras (`es_clasico_moderno`, `tiene_buena_critica`, `es_metraje_adecuado`). Al estructurar el flujo de arriba hacia abajo con `if-elif-else`, Python evalúa primero el escenario óptimo más restrictivo (el cumplimiento del 100% de las condiciones) y va descartando los casos parciales de forma limpia y ordenada, garantizando que cada película termine exactamente en la categoría lógica que le corresponde sin errores de solapamiento.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.