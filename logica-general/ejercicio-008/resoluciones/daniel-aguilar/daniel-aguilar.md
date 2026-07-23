# Solucion ejercicio 008 - flujos paso a paso

Area: Logica general | Tematica: peliculas de ciencia ficcion | Autor: Daniel Aguilar

## Entrada

```text
elemento: Interstellar
eventos: ["recibido", "revisado", "rechazado"]
```

## Reglas aplicadas

- El flujo valido es: recibido -> revisado -> (aprobado o rechazado).
- No se puede pasar de 'recibido' directo a 'aprobado' o 'rechazado' sin pasar por 'revisado'.
- Cualquier transicion no permitida se marca como invalida y el estado no cambia.

## Pseudocodigo

```text
FUNCION simular_flujo(eventos)
  transiciones_validas <- { recibido: [revisado], revisado: [aprobado, rechazado] }
  estado <- primer evento
  PARA CADA evento SIGUIENTE en eventos
    SI evento esta en transiciones_validas[estado] ENTONCES estado <- evento
    SINO marcar transicion invalida
  DEVOLVER estado_final, historial
FIN FUNCION
```

## Salida esperada

```text
estado_final: rechazado
historial: ["recibido", "revisado", "rechazado"]
```

## Pruebas

### Prueba 1 (caso normal, el del ejemplo de entrada)

```text
entrada:
elemento: Interstellar
eventos: ["recibido", "revisado", "rechazado"]

salida:
estado_final: rechazado
historial: ["recibido", "revisado", "rechazado"]
```

### Prueba 2 (caso borde)

```text
entrada:
elemento: Interstellar
eventos: ["recibido", "aprobado"]

salida:
estado_final: recibido
historial: ["recibido", "transicion invalida: recibido -> aprobado"]
```
