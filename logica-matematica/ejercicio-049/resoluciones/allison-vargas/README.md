# Plantilla de solucion - Módulos y Divisibilidad (Películas de Miedo)

## Analisis

- Entrada:
  - `duracionTotalDisponibleMinutos`: Número entero positivo que indica el tiempo total en minutos reservado para la maratón de cine de terror.
  - `peliculas`: Lista de objetos donde cada elemento incluye `titulo` y `duracionMinutos`.
- Proceso:
  - Validar que la duración disponible sea positiva y que la lista de películas contenga datos coherentes.
  - Acumular las películas secuencialmente mientras el tiempo total no supere el límite máximo permitido.
  - Utilizar la operación módulo (`%`) para determinar si las duraciones son divisibles de forma exacta entre bloques estándar de 30 minutos.
  - Utilizar división entera (`Math.floor`) y residuos con módulo para segmentar el tiempo total utilizado en bloques cortos de 15 minutos (ideales para pausas comerciales).
  - Calcular el margen de minutos sobrantes y categorizar el grado de precisión de la programación.
- Salida:
  - Tiempo disponible, tiempo total programado, tiempo sobrante, bloques de 15 min, residuo de minutos, detalle de películas aceptadas, clasificación del ajuste y resumen explicativo.

## Reglas identificadas

1. **Divisibilidad Estándar (30 minutos):**  
   $$\text{Es Múltiplo de 30} = (\text{Duración Película} \bmod 30) == 0$$
2. **Cálculo de Bloques de 15 Minutos:**  
   $$\text{Bloques} = \left\lfloor \frac{\text{Tiempo Acumulado}}{15} \right\rfloor$$  
   $$\text{Residuo} = \text{Tiempo Acumulado} \bmod 15$$
3. **Clasificación del Ajuste Horario:**
   - Si $\text{Tiempo Sobrante} == 0$: "Ajuste Perfecto (Uso Completo del Tiempo Transmitido)".
   - Si $\text{Tiempo Sobrante} \le 15$: "Ajuste Óptimo (Espacio Ideal para Tráilers o Pausas)".
   - Si $\text{Tiempo Sobrante} > 15$: "Tiempo Incompleto (Sobra un Espacio Considerable)".

## Pruebas

### Caso normal

Entrada:
- Duración disponible: `300 min` (5 horas)
- El Conjuro: `112 min`
- Scream: `111 min`
- Halloween: `91 min` (Supera el tiempo total si se agrega)

Resultado esperado:
- Películas incluidas: `El Conjuro` y `Scream`
- Tiempo acumulado: `223 min`
- Tiempo sobrante: `77 min`
- Bloques de 15 min: `14` (Residuo: `8 min`)
- Clasificación: `Tiempo Incompleto (Sobra un Espacio Considerable)`

### Caso borde (Ajuste exacto con divisibilidad)

Entrada:
- Duración disponible: `180 min`
- Psicosis: `90 min`
- El Exorcista: `90 min`

Resultado esperado:
- Tiempo acumulado: `180 min`
- Tiempo sobrante: `0 min`
- Bloques de 15 min: `12` (Residuo: `0 min`)
- Múltiplo de 30 min: `true` en ambos casos.
- Clasificación: `Ajuste Perfecto (Uso Completo del Tiempo Transmitido)`

## Explicacion final

La solución optimiza la programación de eventos continuos aprovechando operadores de módulo y divisibilidad. Este enfoque cuantitativo asegura la máxima ocupación del tiempo de emisión y organiza los bloques de pausa mediante aritmética de residuos.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.