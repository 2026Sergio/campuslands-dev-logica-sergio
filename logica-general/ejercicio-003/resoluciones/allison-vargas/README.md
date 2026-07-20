# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con las estadísticas de rendimiento de un equipo de Esports (nombre, victorias, cantidad de penalizaciones y estado de la inscripción).
- **Proceso:** Validar la integridad de los datos. Posteriormente, evaluar si el equipo infringe los límites de disciplina (penalizaciones) o si cumple con la cuota de victorias para avanzar en el torneo.
- **Salida:** Un objeto con la resolución final determinada (`accion`) y la justificación organizativa (`motivo`).

## Reglas identificadas

1. **Filtro de Integridad:** Si faltan métricas clave del equipo, la toma de decisiones se cancela para evitar registros corruptos.
2. **Criterio de Disciplina:** Cualquier equipo con más de 3 penalizaciones acumuladas queda automáticamente fuera, independientemente de sus victorias.
3. **Criterio de Clasificación:** Los equipos con estado activo y 5 o más victorias ganan el pase directo a la fase eliminatoria.

## Pruebas

### Caso normal

Entrada:

```json
{
  "nombre": "Alpha Squad",
  "victorias": 6,
  "penalizaciones": 1,
  "estado": "activo"
}


Resultado esperado:

JSON
{
  "accion": "clasificar a playoffs",
  "motivo": "El equipo cumple con el mínimo de 5 victorias y mantiene un historial limpio."
}
Caso borde
Entrada:

JSON
{
  "nombre": "Shadow Team",
  "victorias": 8,
  "penalizaciones": 4,
  "estado": "activo"
}
Resultado esperado:

JSON
{
  "accion": "eliminar del torneo",
  "motivo": "El equipo superó el límite de 3 penalizaciones permitidas o su estado es descalificado."
}

Explicacion final
La solución funciona porque implementa un enfoque estructurado de cascada condicional para la toma de decisiones. Primero, actúa como un guardián de consistencia descartando objetos corruptos. Luego, aplica la regla de mayor peso del negocio (la penalización conductual), asegurando que un equipo problemático no pueda clasificar aun teniendo un puntaje alto. Finalmente, premia el rendimiento deportivo bajo un entorno seguro de validación.

