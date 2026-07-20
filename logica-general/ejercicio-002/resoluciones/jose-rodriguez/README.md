# Reto: Validador de Datos - Ranking de Fútbol Sala ⚽
## Módulo: Lógica de Programación - Campuslands

Este repositorio contiene la documentación y la arquitectura lógica de la solución para el reto de validación estadística de equipos de fútbol sala. A diferencia de un clasificador, el objetivo principal de este componente es la robustez y la integridad de los datos, actuando como un filtro de consistencia matemática antes de registrar la información en el ranking oficial.

---

## 🎯 Objetivo del Reto

Construir una solución interactiva por consola capaz de interceptar errores de usuario o "datos imposibles" (incoherencias matemáticas o valores negativos), garantizando que las estadísticas ingresadas cumplan estrictamente con las leyes del deporte y el análisis numérico.

---

# Plantilla de solucion

## Analisis

- **Entrada:**
  - `partidos_jugados`: Valor numérico entero (`int`) que representa el total de encuentros disputados reportados por el usuario.
  - `partidos_ganados`: Valor numérico entero (`int`) con la cantidad de victorias acumuladas.
  - `partidos_perdidos`: Valor numérico entero (`int`) con la cantidad de derrotas acumuladas.
  - `partidos_empatados`: Valor numérico entero (`int`) con la cantidad de empates acumulados.
- **Proceso:**
  - Cálculo de control (`total_resultados`): El sistema realiza una función de agregación sumando de manera lineal los partidos ganados, empatados y perdidos.
  - Filtro de consistencia: Se aplica una estructura condicional binaria (`if-else`) que contrasta mediante un operador de igualdad estricta (`==`) si la sumatoria calculada coincide exactamente con el total de partidos jugados declarados al inicio.
- **Salida:**
  - `clasificacion_final`: Cadena de texto (`str`) que contiene el veredicto del sistema de auditoría, indicando si los datos son aptos para el ranking o si el registro fue rechazado debido a un error.

## Reglas identificadas

1. **Ley de Cierre Estadístico:** La suma de los estados discretos de un partido (Ganado + Empatado + Perdido) debe ser matemática y estrictamente idéntica al universo total de los partidos jugados reportados.
2. **Aislamiento de Anomalías:** Si la sumatoria calculada difiere en una sola unidad del total declarado, el flujo de datos debe bloquearse inmediatamente, denegando el registro en el ranking para prevenir la propagación de metadatos corruptos.

## Pruebas

### Caso normal

- **Entrada:**
  - `partidos_jugados`: 10
  - `partidos_ganados`: 5
  - `partidos_perdidos`: 3
  - `partidos_empatados`: 2
- **Resultado esperado:**
  - `VALIDACIÓN EXITOSA: Datos consistentes para el ranking.`

### Caso borde

- **Entrada:**
  - `partidos_jugados`: 5
  - `partidos_ganados`: 0
  - `partidos_perdidos`: 0
  - `partidos_empatados`: 0
- **Resultado esperado:**
  - `ERROR DE VALIDACIÓN: La suma de Partdos Ganados, Partidos Empatados y Partidos Perdidos no cuadra con los partidos jugados.` *(El sistema detecta con éxito que un torneo con 5 partidos jugados no puede tener todas sus métricas en cero).*

## Explicacion final

Mi solución funciona porque descentraliza la auditoría de datos confiando en operaciones aritméticas directas. Al sumar de manera independiente el desglose físico de los encuentros (`ganados + empatados + perdidos`) y guardarlo en una variable de control, creo un espejo matemático exacto de lo que debió ser el torneo. El condicional posterior actúa como una aduana digital infalible: si hay una discrepancia, por mínima que sea, el operador relacional falla y el flujo cae limpiamente en el bloque de contingencia de manejo de errores.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.