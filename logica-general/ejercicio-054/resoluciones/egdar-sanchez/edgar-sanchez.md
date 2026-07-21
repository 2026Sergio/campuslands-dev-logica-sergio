## Analisis
El problema se centra en validar la viabilidad de un servicio basado en restricciones legales (edad), físicas (tamaño) y técnicas (complejidad). El sistema actúa como un filtro de diagnóstico previo a la asignación de una cita.

- Entrada: Edad del cliente, Tamaño del diseño en cm, Nivel de complejidad (escala 1-10).
- Proceso: Verificación lógica de reglas de cumplimiento y categorización del resultado.
- Salida: Mensaje de diagnóstico indicando si es aprobado, rechazado o requiere evaluación adicional.

## Reglas identificadas

1. Cliente debe ser mayor de 18 años.
2. Tamaño del tatuaje debe ser mayor a 0 cm.
3. Tamaños superiores a 50 cm requieren consulta extendida.
4. Complejidad superior a nivel 5 requiere un artista senior.

## Pruebas

### Caso normal

Entrada: 22, 15, 3

Resultado esperado: Diagnostico: Aprobado para cita

### Caso borde

Entrada: 17, 10, 2

Resultado esperado: Diagnostico: Rechazado (Menor de edad)

## Explicacion final por que tu solucion funciona.
La solución utiliza una estructura de control secuencial que prioriza las restricciones de mayor impacto (edad y validez física) antes de evaluar la complejidad técnica. Esto permite filtrar rápidamente casos no aptos y clasificar correctamente los servicios que requieren una gestión especializada, cumpliendo con las reglas de negocio establecidas.