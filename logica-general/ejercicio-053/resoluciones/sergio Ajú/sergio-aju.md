# Validador de Seguridad para Paracaidismo

## Análisis
- **Entrada:** Objeto de estado con viento, visibilidad y chequeo de equipo.
- **Proceso:** Evaluación de reglas de seguridad en cascada (primero equipo, luego clima).
- **Salida:** Estado de autorización y motivo de la decisión.

## Reglas aplicadas
1. Equipo: Debe estar revisado (bloqueante).
2. Clima: Límite de viento (30 km/h) y visibilidad (mínimo 5 km).

## Ejecución
`node nombre-apellido.js`

## Explicación final
La lógica utiliza una estructura de guardias (early returns). Esto permite evaluar primero las condiciones más críticas (como la revisión del equipo) antes de realizar cálculos climáticos, haciendo el código más legible y eficiente.