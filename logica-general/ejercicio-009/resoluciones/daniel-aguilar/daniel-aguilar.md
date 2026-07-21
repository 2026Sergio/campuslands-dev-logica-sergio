# Solucion ejercicio 009 - simulacion de estados

Area: Logica general | Tematica: peliculas de miedo | Autor: Daniel Aguilar

## Entrada

```text
elemento: Insidious
estado_inicial: disponible
eventos: ["prestar", "devolver", "prestar"]
```

## Reglas aplicadas

- El estado inicial siempre es 'disponible'.
- 'prestar' solo funciona si el estado actual es 'disponible', y lo cambia a 'prestado'.
- 'devolver' solo funciona si el estado actual es 'prestado', y lo regresa a 'disponible'.
- Cualquier evento que no aplique al estado actual se ignora y queda registrado en el historial.

## Pseudocodigo

```text
FUNCION simular_estados(eventos)
  estado <- 'disponible'
  PARA CADA evento EN eventos
    SI evento es valido para el estado actual ENTONCES actualizar estado
    SINO registrar evento ignorado
  DEVOLVER estado_final, historial
FIN FUNCION
```

## Salida esperada

```text
estado_final: prestado
historial: ["disponible", "prestado", "disponible", "prestado"]
```

## Pruebas

### Prueba 1 (caso normal, el del ejemplo de entrada)

```text
entrada:
elemento: Insidious
estado_inicial: disponible
eventos: ["prestar", "devolver", "prestar"]

salida:
estado_final: prestado
historial: ["disponible", "prestado", "disponible", "prestado"]
```

### Prueba 2 (caso borde)

```text
entrada:
elemento: Insidious
estado_inicial: disponible
eventos: ["devolver"]

salida:
estado_final: disponible
historial: ["disponible", "evento ignorado: devolver (estado actual: disponible)"]
```
