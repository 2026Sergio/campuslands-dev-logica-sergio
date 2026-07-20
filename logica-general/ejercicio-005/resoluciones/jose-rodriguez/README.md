# Reto: Sistema de Ordenamiento de Prioridades - Taller Mecánico 👨‍🔧
## Módulo: Lógica de Programación - Campuslands

Este repositorio contiene la arquitectura lógica y el código de resolución para el reto de ordenamiento de prioridades en un taller de servicio automotriz. A diferencia de los filtros restrictivos (*operaciones puramente binarias*), este ejercicio implementa un **algoritmo de clasificación jerárquica (Triage)** para optimizar la asignación de recursos y tiempos de respuesta operativos.

---

## 🎯 Objetivo del Reto

Construir un script interactivo por consola (CLI) que reciba el estado de un vehículo, evalúe factores de riesgo y variables logísticas, y asigne de manera inequívoca un nivel de prioridad y una ruta de acción inmediata dentro del taller.

---

# Plantilla de solución

## Análisis

- **Entrada:**
  - `cliente`: Cadena de texto (`str`) con el nombre del operador o propietario del vehículo.
  - `tipo_vehiculo`: Categoría del transporte (`str`), estandarizada mediante el método `.capitalize()` (Auto / Moto / Camión).
  - `motivo_ingreso`: Diagnóstico inicial reportado (`str`), estandarizado mediante `.capitalize()` (Accidente / Mantenimiento / Falla eléctrica).
  - `es_emergencia`: Bandera de texto condicional (`str`) con los valores `"Si"` o `"No"`, estandarizada mediante `.capitalize()`, que mide si se compromete la seguridad del conductor.
- **Proceso:**
  - Control de flujo descendente a través de un embudo secuencial de prioridad de arriba hacia abajo (`if-elif-else`). El sistema evalúa primero las variables de alto impacto técnico o de seguridad humana antes de pasar a las condiciones operativas o comerciales estándar.
- **Salida:**
  - `nivel_prioridad`: Cadena de texto (`str`) que almacena el rango asignado (Crítica, Alta, Media-Alta o Estándar).
  - `accion_taller`: Cadena de texto (`str`) con la directiva técnica u orden operativa para el personal del taller.
  - `dias_estimados`: Valor numérico entero (`int`) que define el tiempo proyectado para el retiro del vehículo.

## Reglas identificadas

1. **Prioridad Crítica (Nivel 1):** Controlado por una compuerta inclusiva (`or`). Si `es_emergencia` equivale a `"Si"` **O** `motivo_ingreso` equivale a `"Accidente"`, el flujo se interrumpe asignando bahía inmediata y un estimado de 1 día de entrega.
2. **Prioridad Alta (Nivel 2):** Si el filtro anterior falla pero el `motivo_ingreso` coincide con `"Falla eléctrica"`, se prioriza para escaneo en un plazo menor a 2 horas y un tiempo de entrega de 3 días.
3. **Prioridad Media-Alta (Nivel 3):** Evaluada mediante el tipo de hardware logística. Si el `tipo_vehiculo` coincide con `"Camión"`, se le da prioridad sobre autos o motos particulares para optimizar el transporte comercial, proyectando 4 días de entrega.
4. **Prioridad Estándar (Nivel 4):** El bloque `else` actúa como la cola de espera por defecto para mantenimientos de rutina o fallas menores, asignando atención por orden de llegada y un estimado de 5 días.

## Pruebas

### Caso normal

- **Entrada:**
  - `cliente`: José Rodríguez
  - `tipo_vehiculo`: auto
  - `motivo_ingreso`: falla eléctrica
  - `es_emergencia`: no
- **Resultado esperado:**
  - `Prioridad Asignada: ALTA (Nivel 2)`
  - `Acción Operativa: Enviar a escaneo de diagnóstico en las próximas 2 horas.`
  - `Tiempo Estimado de Retiro: 3 día(s) hábil(es)`

### Caso borde

- **Entrada:**
  - `cliente`: Operador Logístico
  - `tipo_vehiculo`: moto
  - `motivo_ingreso`: mantenimiento
  - `es_emergencia`: si
- **Resultado esperado:**
  - `Prioridad Asignada: CRÍTICA (Nivel 1)` *(El sistema activa correctamente la prioridad más alta gracias al operador `or`, priorizando la seguridad humana por encima de que el motivo sea solo rutina).*
  - `Acción Operativa: Asignar bahía de reparación inmediata. Mecánico jefe asignado.`
  - `Tiempo Estimado de Retiro: 1 día(s) hábil(es)`

## Explicación final

Mi solución funciona porque utiliza un embudo condicional estructurado jerárquicamente de mayor a menor criticidad. Al procesar las condiciones mediante la estructura `if-elif-else`, Python evalúa el hilo de arriba hacia abajo y detiene la ejecución del bloque tan pronto como una regla se cumple. Esto actúa como un "mecanismo de interrupción" natural que protege las prioridades más urgentes del taller (como emergencias o accidentes), enviando los casos de rutina automáticamente hacia la base del bloque sin duplicar validaciones ni generar superposiciones lógicas.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar.