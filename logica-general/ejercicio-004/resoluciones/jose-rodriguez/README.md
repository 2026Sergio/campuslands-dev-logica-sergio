# Reto: Sistema de Filtros de Inventario - Motocicletas 🏍️
## Módulo: Lógica de Programación - Campuslands

Este repositorio contiene la arquitectura lógica y la documentación de la solución para el reto de filtrado condicional aplicado a un inventario de motos. A diferencia de los motores de decisión basados en ramificaciones (*árboles de decisión*), este ejercicio se enfoca en el **procesamiento simultáneo de reglas cruzadas mediante álgebra de Boole y operadores lógicos**.

---

## 🎯 Objetivo del Reto

Construir una solución interactiva por consola que evalúe las especificaciones de un artículo (motocicleta) contra un set predefinido de criterios restrictivos y preferenciales, determinando de forma binaria (Aprobado/Rechazado) si el producto pasa el control de búsqueda del inventario.

---

# Plantilla de solución

## Análisis

- **Entrada:**
  - `marca`: Cadena de texto (`str`) que representa el fabricante de la moto, normalizado con el método `.capitalize()`.
  - `cilindrada`: Valor numérico entero (`int`) que almacena la potencia del motor en centímetros cúbicos (CC).
  - `precio`: Valor numérico decimal de punto flotante (`float`) para la gestión del costo en Quetzales.
  - `tipo`: Cadena de texto (`str`) descriptiva sobre la categoría de uso de la unidad (Trabajo / Deportiva / Scooter).
- **Proceso:**
  - **Asignación Booleana de Reglas:** El sistema evalúa de forma aislada e independiente tres variables lógicas basadas en criterios de inclusión (`or`) y restricción matemática de rangos (`and`).
  - **Conector Restrictivo Total:** Una compuerta condicional simple (`if-else`) unifica las tres banderas mediante operadores `and`. Si una de las premisas falla, todo el sistema de filtrado colapsa y descarta el elemento.
- **Salida:**
  - `resultado_filtro`: Cadena de texto (`str`) que declara de manera binaria si la motocicleta fue aprobada o rechazada por el sistema.
  - `diagnostico`: Cadena de texto (`str`) que detalla los argumentos técnicos del éxito o la causa probable del rechazo.

## Reglas identificadas

1. **Inclusión de Marca Preferencial (`or`):** La propiedad de marca debe coincidir exactamente con `"Honda"` o con `"Yamaha"` para considerarse válida dentro de los parámetros del cliente.
2. **Espectro de Cilindrada Urbano (`and`):** El motor debe cumplir estrictamente con el rango de ser mayor o igual a 125 CC **Y** menor o igual a 250 CC de forma simultánea.
3. **Tope Presupuestario Comercial:** El costo total de la unidad no puede exceder el límite financiero lineal establecido (debe ser menor o igual a Q25,000.00).

## Pruebas

### Caso normal

- **Entrada:**
  - `marca`: honda
  - `cilindrada`: 150
  - `precio`: 18500
  - `tipo`: trabajo
- **Resultado esperado:**
  - `Estado del Filtro:  MOTO APROBADA: Cumple con todos los requisitos del cliente.`
  - `Diagnóstico: La moto Honda de 150CC se ajusta al presupuesto y cilindraje esperado.`

### Caso borde

- **Entrada:**
  - `marca`: yamaha
  - `cilindrada`: 250
  - `precio`: 25000
  - `tipo`: deportiva
- **Resultado esperado:**
  - `Estado del Filtro:  MOTO APROBADA: Cumple con todos los requisitos del cliente.`
  - `Diagnóstico: La moto Yamaha de 250CC se ajusta al presupuesto y cilindraje esperado.`
  *(Muestra efectividad en el límite superior exacto de los operadores relacionales `<=` y `>=`).*

## Explicación final

Mi solución funciona porque descentraliza el procesamiento lógico de los condicionales. En lugar de encadenar una estructura gigante y anidada dentro del `if`, el sistema almacena las reglas de negocio de manera atómica en variables booleanas intermedias (`condicion_marca`, `condicion_cilindrada` y `condicion_precio`). Al momento de aplicar la condicional definitiva, el operador restrictivo `and` evalúa estas banderas en un solo paso de CPU. Si el artículo no cumple con el 100% de los requisitos, el flujo es interceptado limpiamente por el bloque de contingencia `else`, garantizando un reporte de inventario seguro, legible y libre de falsos positivos.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar.