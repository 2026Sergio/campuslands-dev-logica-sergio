# Reto: Asistente de Planificación - Viajes y Turismo ✈️
## Módulo: Lógica de Programación - Campuslands

Este repositorio contiene la documentación y la arquitectura lógica de la solución diseñada para el reto de lectura y procesamiento de instrucciones aplicado al sector de viajes y turismo. El enfoque de este ejercicio no radica en memorizar código, sino en analizar un escenario real, transformarlo en reglas de negocio claras y construir una solución secuencial ordenada.

---

## 🎯 Objetivo del Reto

Desarrollar una solución interactiva por consola capaz de recibir variables de planificación turística, procesarlas mediante un embudo de reglas directas y entregar un resultado verificable que clasifique la viabilidad del itinerario.

---

# Plantilla de solucion

## Analisis

- **Entrada:**
  - `destino`: Cadena de texto (`str`) con el nombre del lugar turístico, sanitizada con el método `.strip()`.
  - `presupuesto`: Valor numérico decimal (`float`) que representa los fondos del usuario en dólares (USD).
  - `temporada`: Cadena de texto (`str`) que define la demanda del viaje, estandarizada mediante `.strip().capitalize()` (Alta / Baja).
  - `dias_estancia`: Valor numérico entero (`int`) que almacena la cantidad de días planeados para el viaje.
- **Proceso:**
  - **Mapeo de Instrucciones Reales:** El sistema evalúa de forma independiente los límites financieros, temporales y logísticos mediante banderas booleanas (`tiene_presupuesto_minimo`, `es_temporada_accesible`, `estancia_valida`).
  - **Estructura de Control Jerárquica:** A través de un bloque `if-elif-else`, el software lee de arriba hacia abajo las condiciones compuestas con el conector de conjunción `and` para descartar opciones no viables y asignar el paquete correcto.
- **Salida:**
  - `estado_itinerario`: Cadena de texto (`str`) que actúa como el indicador visual del estado del paquete (Aprobado, Advertencia o Rechazado).
  - `detalles_ruta`: Mensaje dinámico explicativo que detalla la cobertura técnica del viaje o las causas del rechazo.

## Reglas identificadas

1. **Fondo de Reserva Base:** El presupuesto del viajero debe ser mayor o igual a los 500 dólares (`>= 500.0`) para costear las tasas operativas.
2. **Ventaja por Temporada:** Para maximizar el valor del dinero, el sistema identifica si la temporada ingresada equivale estrictamente a `"Baja"`.
3. **Estancia Mínima Permitida:** Por políticas operativas de las agencias asociadas, el viaje debe contar con una duración mínima de 3 días (`>= 3`).
4. **Criterio de Asignación:** Si se cumplen las tres directivas a la vez, se otorga un paquete completo. Si hay presupuesto y días suficientes pero es temporada alta, se reduce a paquete esencial. Si no se cubren los mínimos, el flujo cae en el bloque de rechazo.

## Pruebas

### Caso normal

- **Entrada:**
  - `destino`: Flores Petén
  - `presupuesto`: 650.0
  - `temporada`: baja
  - `dias_estancia`: 4
- **Resultado esperado:**
  - `Estado del Viaje:    🟢 APROBADO: PAQUETE EXPLORADOR COMPLETO`
  - `Detalles de la Ruta: Felicidades, tu viaje a 'Flores Petén' es viable. Incluye hospedaje básico, tours locales y seguro de viaje.`

### Caso borde

- **Entrada:**
  - `destino`: Antigua Guatemala
  - `presupuesto`: 500.0
  - `temporada`: alta
  - `dias_estancia`: 3
- **Resultado esperado:**
  - `Estado del Viaje:    实时 ADVERTENCIA: PAQUETE ESENCIAL (AJUSTE POR TEMPORADA ALTA)`
  - `Detalles de la Ruta: El viaje a 'Antigua Guatemala' es posible, pero debido a la Temporada Alta, el presupuesto solo cubre hospedaje sin tours.`
  *(Comprueba la precisión exacta de los límites inferiores de presupuesto y días, aislando con éxito el impacto del cambio a temporada alta en el bloque `elif`).*

## Explicacion final

Mi solución funciona de manera óptima porque transforma la lectura de instrucciones en un sistema jerárquico de control de flujo. Al almacenar las comparaciones en variables lógicas independientes, el código se vuelve altamente legible y mantenible. Al organizar el condicional principal de la opción más restrictiva (el cumplimiento simultáneo del 100% de las instrucciones) a la menos restrictiva, garantizo que el software actúe como un embudo perfecto, asignando a cada turista el itinerario que matemáticamente le corresponde y rechazando anomalías sin generar fallos lógicos o asignaciones duplicadas.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.