# Reto: Detector de Inconsistencias Lógicas - Playlist Musical 🎵
## Módulo: Lógica de Programación - Campuslands

Este repositorio contiene la arquitectura lógica y la solución automatizada para el reto de auditoría e integridad de datos aplicado a metadatos de archivos musicales. A diferencia de los motores de búsqueda de patrones o asignación de turnos, este ejercicio se enfoca en la **detección y aislamiento de anomalías estructurales mediante comparadores de desigualdad y lógica booleana**.

---

## 🎯 Objetivo del Reto

Construir un script interactivo por interfaz de línea de comandos (CLI) capaz de contrastar los datos declarados en el encabezado de una estructura de datos (*playlist*) contra la sumatoria real de sus componentes elementales (*tracks*), determinando con precisión si el archivo sufre de corrupción de metadatos o desfase de tiempo.

---

# Plantilla de solucion

## Analisis

- **Entrada:**
  - `nombre_playlist`: Cadena de texto (`str`) que representa el identificador cualitativo de la lista.
  - `cantidad_reportada`: Valor numérico entero (`int`) que indica el volumen de pistas declarado en el encabezado.
  - `duracion_reportada`: Valor numérico entero (`int`) con el tiempo total acumulado declarado en segundos.
  - `cancion_1_segundos`, `cancion_2_segundos`, `cancion_3_segundos`: Variables numéricas enteras (`int`) que capturan la duración discreta de cada pista ingresada para el desglose.
- **Proceso:**
  - **Aritmética de Control:** El programa calcula la duración real sumando las pistas individuales y define la cantidad fija de control (`cantidad_real = 3`).
  - **Aislamiento de Banderas de Error:** Se activan interruptores booleanos (`inconsistencia_contador`, `inconsistencia_tiempo`) usando el operador de desigualdad (`!=`) para identificar discrepancias frente a los metadatos globales.
  - **Matriz de Diagnóstico:** Un bloque jerárquico `if-elif-else` evalúa de forma descendente las banderas para aislar si el fallo es crítico, puramente numérico o de desfase temporal.
- **Salida:**
  - `estado_auditoria`: Cadena de texto (`str`) que almacena el estatus de la integridad del archivo (Crítico, Advertencia o Sincronizada).
  - `dictamen`: Cadena de texto (`str`) con la justificación técnica del diagnóstico emitido por el sistema.

## Reglas identificadas

1. **Consistencia del Contador:** El volumen declarado en el encabezado (`cantidad_reportada`) debe ser estrictamente idéntico a la cantidad real física de elementos procesados (`cantidad_real`).
2. **Consistencia Cronológica:** El tiempo total declarado (`duracion_reportada`) debe coincidir matemáticamente al 100% con la sumatoria lineal de los segundos de cada canción (`duracion_real_calculada`).
3. **Jerarquía de Aislamiento de Errores:**
   - Si fallan ambas leyes simultáneamente (`and`), el sistema declara un estado crítico de corrupción.
   - Si solo falla una de las leyes (`elif`), se aísla de forma específica si el error radica en el contador o en el desfase cronológico.

## Pruebas

### Caso normal

- **Entrada:**
  - `nombre_playlist`: Lo-Fi Study
  - `cantidad_reportada`: 3
  - `duracion_reportada`: 600
  - `cancion_1_segundos`: 200
  - `cancion_2_segundos`: 250
  - `cancion_3_segundos`: 150
- **Resultado esperado:**
  - `Estado de Integridad: INTEGRIDAD CONFIRMADA: PLAYLIST SINCRONIZADA`
  - `Dictamen del Sistema: Los metadatos del encabezado y la sumatoria del desglose físico cuadran al 100%.`

### Caso borde

- **Entrada:**
  - `nombre_playlist`: Synthwave Mix
  - `cantidad_reportada`: 3
  - `duracion_reportada`: 500
  - `cancion_1_segundos`: 200
  - `cancion_2_segundos`: 200
  - `cancion_3_segundos`: 200
- **Resultado esperado:**
  - `Estado de Integridad: ADVERTENCIA: ERROR DE DESFASE (TIEMPO)`
  - `Dictamen del Sistema: La suma real da 600s, pero el encabezado afirma tener 500s.`
  *(Muestra la eficacia del aislamiento analítico: el contador de pistas es correcto, pero el interruptor de inconsistencia cronológica detecta el desfase con exactitud).*

## Explicacion final

Mi solución funciona de manera eficiente porque implementa el principio de desacoplamiento lógico mediante banderas de error (*Error Flags*). En lugar de evaluar complejas fórmulas aritméticas directamente dentro de las instrucciones de control `if`, el sistema calcula primero las variables booleanas de desigualdad (`inconsistencia_contador` e `inconsistencia_tiempo`). Esto permite que el motor de diagnóstico condicional actúe como una tabla de verdad limpia: evalúa primero la falla total combinada con el operador `and` y luego desglosa cada anomalía de manera atómica por descarte descendente. De esta manera, el programa asegura que se emita un reporte preciso sin riesgo de solapamientos lógicos o falsos aprobados.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.