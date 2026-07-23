# Logica matematica 004 - Rangos y maximos

## Como pense el problema

Primero identifiqué las entradas: una lista de valores, un bono y una penalización.

Después determiné que debía encontrar el valor más alto de la lista, aplicarle el bono, restarle la penalización y clasificar el resultado.

## Reglas aplicadas

- Buscar el valor máximo del arreglo.
- Sumar el bono.
- Restar la penalización.
- Clasificar el resultado:
  - 25 o más: competitivo.
  - Entre 15 y 24: intermedio.
  - Menor de 15: básico.
- Validar que la lista no esté vacía.

## Como ejecutar la solucion

Abrir una terminal y ejecutar:

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Entradas:

```
motos = [12, 18, 25, 30]
bono = 8
penalizacion = 3
```

Resultado:

```
Mayor valor: 30
Puntaje final: 35
Clasificación: competitivo
```

### Caso borde

Entradas:

```
motos = []
```

Resultado:

```
Error: la lista está vacía.
```