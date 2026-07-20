# Reto: Motor de Búsqueda y Coincidencia de Elementos - Autos Hiperdeportivos 🏎️
## Módulo: Lógica de Programación - Campuslands

Este repositorio contiene la arquitectura lógica y la solución en código para el reto de búsqueda de elementos y validación de perfiles técnicos en el sector de los autos hiperdeportivos. A diferencia de los turnos de atención jerárquica (*Triage*), este ejercicio implementa un **algoritmo de búsqueda de patrones por atributos (Pattern Matching)** para clasificar elementos en un ecosistema de datos discretos.

---

## 🎯 Objetivo del Reto

Construir un script interactivo por interfaz de línea de comandos (CLI) que reciba los atributos técnicos de un vehículo, los compare contra un perfil de ingeniería indexado y devuelva si el elemento coincide (total o parcialmente) con los criterios de búsqueda establecidos.

---

# Plantilla de solucion

## Analisis

- **Entrada:**
  - `modelo`: Cadena de texto (`str`) con el nombre comercial o identificador nominal del vehículo, sanitizado con `.strip().capitalize()`.
  - `velocidad_maxima`: Valor numérico entero (`int`) que captura la velocidad tope registrada en km/h.
  - `caballos_fuerza`: Valor numérico entero (`int`) que almacena la potencia mecánica en Caballos de Fuerza (HP).
  - `produccion_limitada`: Cadena de texto (`str`) que define la exclusividad comercial con un valor de "Si" o "No", normalizado mediante `.strip().capitalize()`.
- **Proceso:**
  - **Asignación de Banderas Booleanas:** El sistema evalúa individualmente las capacidades físicas y comerciales del vehículo generando interruptores lógicos (`es_velocidad_top`, `es_potencia_top`, `es_exclusivo`).
  - **Evaluación Matricial Compuesta:** Una estructura condicional anidada (`if-elif-else`) analiza las banderas usando lógica restrictiva (`and`) e inclusiva (`or`) para resolver el nivel de coincidencia.
- **Salida:**
  - `estado_busqueda`: Cadena de texto (`str`) que declara de manera explícita el estatus del indexador en la base de datos.
  - `categoria_asignada`: Cadena de texto (`str`) con la clasificación final del vehículo dentro del ecosistema.
  - `dictamen_tecnico`: Cadena de texto (`str`) redactada de manera dinámica que justifica los motivos del dictamen