# Reto: Simulador de Estados Inmersivos - Películas de Miedo 🎬 Intensidad de Terror
## Módulo: Lógica de Programación - Campuslands

Este repositorio contiene la arquitectura lógica y el código de resolución para el reto de simulación de estados dinámicos aplicado a la experiencia de usuario en películas de miedo. El objetivo de este ejercicio no es memorizar código, sino analizar una situación, identificar variables fisiológicas y del entorno, y convertirlas en un flujo de control ordenado.

---

## 🎯 Objetivo del Reto

Crear una solución interactiva por consola que capture métricas cuantitativas del usuario y del filme, procese las interacciones mediante reglas lógicas explícitas y entregue un estado simulado del entorno que sea verificable ante los instructores.

---

# Plantilla de solucion

## Analisis

- **Entrada:**
  - `titulo_pelicula`: Cadena de texto (`str`) que almacena el nombre nominal de la película analizada.
  - `intensidad_sustos`: Valor numérico entero (`int`) de control que califica el impacto del largometraje en una escala del 1 al 10.
  - `frecuencia_cardiaca`: Valor numérico entero (`int`) que registra las pulsaciones por minuto (BPM) actuales del espectador.
- **Proceso:**
  - **Mapeo Atómico de Criterios:** El simulador procesa las entradas para encender o apagar interruptores lógicos de riesgo (`es_terror_extremo` y `alerta_taquicardia`).
  - **Máquina de Estados Condicional:** Una estructura de control jerárquica (`if-elif-else`) evalúa las combinaciones lógicas de las banderas. Al utilizar operadores de conjunción (`and`) y disyunción (`or`), el sistema muta el estado del simulador hacia tres fases discretas de inmersión.
- **Salida:**
  - `estado_simulacion`: Cadena de texto (`str`) que define formalmente el estado de la experiencia (Pánico Total, Suspenso Elevado o Comodidad Controlada).
  - `accion_entorno`: Cadena de texto (`str`) con las directivas físicas simuladas para el hardware periférico (luces, sonido, alertas).
  - `recomendacion`: Diagnóstico o sugerencia técnica para la gestión del usuario.

## Reglas identificadas

1. **Umbral de Terror Extremo:** Una película califica como evento de terror extremo si su intensidad de sustos es mayor o igual a 8 (`>= 8`).
2. **Límite Fisiológico de Alerta:** El usuario entra en estado de alerta cardíaca si sus pulsaciones superan estrictamente el umbral base de 100 BPM (`> 100`).
3. **Estado de Pánico Total (Regla de Conjunción):** Si la película es de terror extremo **Y** el espectador presenta taquicardia al mismo tiempo, el simulador muta al estado máximo de emergencia e inmersión.
4. **Estado de Suspenso Elevado (Regla de Disyunción):** Si falla el estado crítico pero se cumple que la película es extrema **O** que el usuario tiene pulsaciones elevadas, el sistema ejecuta cambios ambientales en el hardware para acompañar la tensión.
5. **Estado de Comodidad (Caso Base):** Si no se cumple ninguna bandera, el bloque `else` absorbe el flujo asignando un estado pasivo y seguro.

## Pruebas

### Caso normal

- **Entrada:**
  - `titulo_pelicula`: El Conjuro
  - `intensidad_sustos`: 9
  - `frecuencia_cardiaca`: 115
- **Resultado esperado:**
  - `Resultado de Auditoría:  🚨 ESTADO: PÁNICO TOTAL (SISTEMA EN INMERSIÓN MÁXIMA)`
  - `Acción del Entorno:      Atenuar luces al 0%, activar vibración háptica en el asiento y preparar parada de seguridad.`

### Caso borde

- **Entrada:**
  - `titulo_pelicula`: El Resplandor
  - `intensidad_sustos`: 7
  - `frecuencia_cardiaca`: 101
- **Resultado esperado:**
  - `Resultado de Auditoría:  ⚠️ ESTADO: SUSPENSO ELEVADO (ENTORNO ADAPTATIVO)`
  - `Acción del Entorno:      Cambiar luces ambientales a color rojo e incrementar el volumen de los efectos de sonido.`
  *(Prueba la precisión de los operadores: la intensidad es menor a 8, pero las pulsaciones están exactamente una unidad sobre el límite condicional `> 100`, activando con éxito el estado intermedio por descarte).*

## Explicacion final

Mi solución funciona de forma robusta porque delega las transiciones a un motor de estados jerárquico predictivo. En lugar de procesar los datos directamente en condiciones anidadas difíciles de depurar, el script calcula primero variables booleanas limpias que representan el estado físico y biológico de la prueba. El flujo condicional actúa como un embudo de seguridad de arriba hacia abajo: evalúa la compuerta más restrictiva en el tope (`and`) para aislar emergencias, permite salidas intermedias seguras en el bloque `elif` mediante el operador inclusivo (`or`), y envía los estados normales al reposo en el `else`, previniendo falsos positivos y garantizando un resultado verificable.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.