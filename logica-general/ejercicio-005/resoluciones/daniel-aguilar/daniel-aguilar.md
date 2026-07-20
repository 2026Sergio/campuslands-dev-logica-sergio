# Solucion ejercicio 005 - ordenamiento de prioridades

Area: Logica general | Tematica: taller mecanico | Autor: Daniel Aguilar

## Entrada

```text
items: [{"nombre": "bateria", "prioridad": "media", "valor": 50}, {"nombre": "frenos", "prioridad": "alta", "valor": 42}, {"nombre": "transmision", "prioridad": "alta", "valor": 11}, {"nombre": "suspension", "prioridad": "alta", "valor": 24}, {"nombre": "cambio de aceite", "prioridad": "media", "valor": 16}]
```

## Reglas aplicadas

- Se ordena primero por prioridad: alta antes que media antes que baja.
- En caso de empate en prioridad, gana el de mayor valor.
- Si tambien empatan en valor, se ordena alfabeticamente por nombre.

## Pseudocodigo

```text
FUNCION ordenar_prioridades(items)
  DEVOLVER items ORDENADOS POR (prioridad asc segun alta<media<baja, valor desc, nombre asc)
FIN FUNCION
```

## Salida esperada

```text
orden: ["frenos", "suspension", "transmision", "bateria", "cambio de aceite"]
```

## Pruebas

### Prueba 1 (caso normal, el del ejemplo de entrada)

```text
entrada:
items: [{"nombre": "bateria", "prioridad": "media", "valor": 50}, {"nombre": "frenos", "prioridad": "alta", "valor": 42}, {"nombre": "transmision", "prioridad": "alta", "valor": 11}, {"nombre": "suspension", "prioridad": "alta", "valor": 24}, {"nombre": "cambio de aceite", "prioridad": "media", "valor": 16}]

salida:
orden: ["frenos", "suspension", "transmision", "bateria", "cambio de aceite"]
```

### Prueba 2 (caso borde)

```text
entrada:
items: [{"nombre": "bateria", "prioridad": "alta", "valor": 10}, {"nombre": "frenos", "prioridad": "alta", "valor": 10}]

salida:
orden: ["bateria", "frenos"]
```
