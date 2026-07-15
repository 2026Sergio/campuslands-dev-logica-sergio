# Calculadora de Aterrizaje en Paracaidismo

## Análisis
- **Entrada:** Coordenadas de dos puntos y un radio de tolerancia.
- **Proceso:** Uso de la fórmula de distancia entre dos puntos en un plano cartesiano.
- **Salida:** Resultado booleano de éxito basado en el radio.

## Reglas
1. Distancia $d = \sqrt{\Delta x^2 + \Delta y^2}$.
2. Si $d \leq radio$, el aterrizaje es exitoso.

## Pruebas
- **Normal:** Salto (0,0) a Objetivo (3,4) con radio 6. Distancia = 5. Exitoso.
- **Borde:** Salto (0,0) a Objetivo (10,0) con radio 5. Distancia = 10. Fuera de zona.

## Instrucciones
Ejecuta el archivo principal con `node nombre-apellido.js`.