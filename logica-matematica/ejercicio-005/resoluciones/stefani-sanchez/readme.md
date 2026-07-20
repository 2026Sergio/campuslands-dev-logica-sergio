# Logica matematica 005 - Minimos y limites

## Como pense el problema

Primero identifiqué las entradas: una lista de valores, un bono y una penalización.

Luego busqué el valor mínimo de la lista, le sumé el bono y le resté la penalización para obtener el puntaje final.

## Reglas aplicadas

- Buscar el valor mínimo.
- Sumar el bono.
- Restar la penalización.
- Clasificar el resultado:
  - 25 o más: competitivo.
  - Entre 15 y 24: intermedio.
  - Menor de 15: básico.
- Validar que la lista no esté vacía.

## Como ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

```
reparaciones = [12, 18, 25, 30]
bono = 8
penalizacion = 3
```

Resultado:

```
Valor mínimo: 12
Puntaje final: 17
Clasificación: intermedio
```

### Caso borde

```
reparaciones = []
```

Resultado:

```
Error: la lista está vacía.
```