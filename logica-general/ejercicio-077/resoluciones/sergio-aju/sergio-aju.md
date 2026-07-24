# Plantilla de solucion

## Analisis

- Entrada: 
  - `datos_proyecto`: Objeto con los parámetros de arquitectura 3D (ej. tipo de estructura, presupuesto y nivel de complejidad).

- Proceso: 
  1. Validar que los datos de entrada existan y sean correctos.
  2. Evaluar las condiciones mediante una tabla de decisión lógica (combinación de tipo de estructura y presupuesto).
  3. Determinar la categoría de aprobación y los recursos asignados según la regla cruzada.

- Salida: 
  - `estado`: Resultado de la evaluación (ej. "aprobado", "revision_manual", "rechazado").
  - `recursos`: Asignación de personal o software para el proyecto 3D.
  - `motivo`: Explicación de la decisión tomada según la tabla.

## Reglas identificadas

1. **Tabla de Decisión 1**: Si la estructura es "residencial" y el presupuesto es alto (> 10000), el estado es "aprobado" con equipo senior.
2. **Tabla de Decisión 2**: Si la estructura es "industrial", requiere revisión manual independientemente del presupuesto por normativas de seguridad.
3. **Validación General**: Si faltan datos, se retorna un error de formato.

## Pruebas

### Caso normal

Entrada:
```javascript
{
  tipo_estructura: "residencial",
  presupuesto: 15000,
  complejidad: "media"
}