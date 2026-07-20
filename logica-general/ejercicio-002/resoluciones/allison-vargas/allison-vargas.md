# Resolución Ejercicio 02 - Allison Vargas

## Pensamiento del problema
El problema requiere interceptar estados críticos dentro de un flujo de fútbol sala. Identifiqué que cuando la prioridad es "alta", cualquier estado "bloqueado" debe congelar el orden normal para mitigar riesgos inmediatamente.

## Reglas aplicadas
1. **Validación de existencia:** Si la lista de items viene vacía, el sistema reporta un error en lugar de colapsar.
2. **Priorización de riesgo:** Si hay un estado "bloqueado" y la prioridad es "alta", se dispara la acción de revisión inmediata.

## Casos probados
- **Caso Normal:** Datos con "bloqueado" y prioridad alta (retorna la acción del ejemplo).
- **Caso Borde:** Envío de arreglos vacíos para asegurar estabilidad del código.

## Cómo ejecutar
Ejecuta el archivo desde la terminal usando Node.js:
```bash
node allison-vargas.js