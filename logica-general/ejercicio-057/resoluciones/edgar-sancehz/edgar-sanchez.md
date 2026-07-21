## Analisis
El problema requiere clasificar el material de construcción óptimo mediante una tabla de decisión que combina la altura del edificio con el riesgo sísmico del terreno. Se busca estandarizar la elección para garantizar la integridad estructural.

- Entrada: Altura del edificio (metros), Zona sísmica (1, 2 o 3).
- Proceso: Evaluación jerárquica de condiciones (altura primero, luego zona sísmica) para retornar el material adecuado.
- Salida: Cadena de texto indicando el material recomendado o un error de validación.

## Reglas identificadas

1. Edificios de hasta 20m usan siempre Madera reforzada.
2. Edificios entre 21m y 50m: Zona 1 usa Acero, zonas 2 y 3 usan Hormigón.
3. Edificios mayores a 50m: Zona 3 usa Acero de alta ductilidad, zonas 1 y 2 usan Acero estructural.
4. Las entradas deben validarse para evitar valores negativos o zonas fuera del rango 1-3.

## Pruebas

### Caso normal

Entrada: 40, 2

Resultado esperado: Material recomendado: Hormigon armado

### Caso borde

Entrada: 60, 3

Resultado esperado: Material recomendado: Acero de alta ductilidad

## Explicacion final por que tu solucion funciona.
La solución organiza la lógica mediante condicionales anidados que actúan como una tabla de decisión. Al evaluar primero el rango de altura, se segmenta el problema en subconjuntos manejables, permitiendo que la segunda condición (zona sísmica) determine la especificación técnica final de forma precisa y ordenada.