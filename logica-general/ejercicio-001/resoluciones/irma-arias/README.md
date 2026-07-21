
# Resolución de Lógica - irma-arias

## Pensamiento
El problema se enfoca en clasificar tareas según su estado y prioridad. Se utiliza una condicional para verificar si existe un elemento de riesgo ("bloqueado") cuando la prioridad es alta.

## Reglas aplicadas
- Si la prioridad es 'alta' y existe un elemento 'bloqueado', la acción es priorizar el bloqueado.
- De lo contrario, se revisa la lista de forma estándar.

## Ejecución
`node irma-arias.js`

## Casos probados
1. Caso ejemplo: Lista con elementos y prioridad alta.
2. Caso borde: Lista vacía.