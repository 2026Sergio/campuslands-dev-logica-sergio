# Reto: Motor Logístico de Toma de Decisiones - Torneo de Esports 🎮
## Módulo: Lógica de Programación - Campuslands

Este repositorio contiene la documentación y la arquitectura de software de la solución diseñada para el reto de automatización logística en torneos de Esports. A diferencia de los retos anteriores de clasificación lineal o validación de consistencia, este ejercicio modela un **sistema de toma de decisiones basado en múltiples variables independientes**.

---

## 🎯 Objetivo del Reto

Desarrollar un algoritmo interactivo por interfaz de línea de comandos (CLI) capaz de evaluar escenarios complejos cruzando variables numéricas y cadenas de texto, para emitir dictámenes, formatos de juego y acciones de hardware en tiempo real.

---

# Plantilla de solucion

## Analisis

- **Entrada:**
  - `participantes`: Valor numérico entero (`int`) capturado desde la consola que representa la cantidad de competidores inscritos.
  - `plataforma`: Cadena de texto (`str`) que define el entorno de hardware donde se ejecutará el torneo (PC o Consola).
- **Proceso:**
  - **Evaluación de Quórum:** Una estructura jerárquica descrita como un embudo condicional (`if-elif-else`) analiza la cantidad de participantes de menor a mayor exigencia numérica para determinar el formato de competencia óptimo por descarte secuencial.
  - **Bifurcación de Infraestructura:** Una compuerta binaria simple (`if-else`) evalúa por coincidencia estricta de texto si la plataforma corresponde a un entorno de ordenadores o consolas para asignar la logística de periféricos.
- **Salida:**
  - `accion_recomendada`: Cadena de texto (`str`) con el dictamen de formato de juego (o cancelación).
  - `accion_final`: Cadena de texto (`str`) con la directiva técnica para la preparación del hardware.

## Reglas identificadas

1. **Filtro de Quórum Mínimo (< 8):** Si la densidad de registros no alcanza el límite base de 8 competidores, el sistema detiene los preparativos recomendando la cancelación del torneo.
2. **Filtro de Formato Estándar ($\le$ 16):** Si el valor supera el caso base pero es menor o igual a 16, el sistema activa automáticamente la logística para una llave de **Eliminación Directa**.
3. **Filtro de Formato Masivo (> 16):** Cualquier volumen superior a 16 cae por descarte al bloque final, escalando el torneo a un formato de **Fase de Grupos + Playoffs**.
4. **Logística de Hardware:** Si la entrada de plataforma coincide exactamente con `"PC"`, se instruye a los jugadores a portar sus propios periféricos. Para cualquier otro caso, se asume por defecto la provisión de mandos estándar de consola.

## Pruebas

### Caso normal

- **Entrada:**
  - `participantes`: 12
  - `plataforma`: PC
- **Resultado esperado:**
  - `Participantes: 12`
  - `Acción Recomendada: Eliminación directa`
  - `Acción Final: Trae tus propios periféricos`

### Caso borde

- **Entrada:**
  - `participantes`: 8
  - `plataforma`: Consola
- **Resultado esperado:**
  - `Participantes: 8`
  - `Acción Recomendada: Eliminación directa` *(Se activa correctamente el límite inferior exacto evaluado en el bloque `elif`).*
  - `Acción Final: Proveer mandos estándar`

## Explicacion final

Esta solución es robusta y funciona de forma eficiente porque aprovecha el orden de evaluación descendente de Python en los bloques `if-elif-else`. Al organizar el quórum de menor a mayor, garantizamos que cada número caiga en su "bahía" de rango correcta sin necesidad de escribir condiciones lógicas compuestas redundantes (como `participantes >= 8 and participantes <= 16`). Por otro lado, aislar la evaluación de hardware en una estructura independiente permite que el software tome decisiones cruzadas en tiempo real sin entrelazar o corromper las métricas numéricas del torneo.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.