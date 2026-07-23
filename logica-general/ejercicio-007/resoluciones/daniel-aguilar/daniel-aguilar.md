# Solucion ejercicio 007 - deteccion de inconsistencias

Area: Logica general | Tematica: playlist musical | Autor: Daniel Aguilar

## Entrada

```text
items: [{"nombre": "Reggaeton", "valor": 10}, {"nombre": "Pop latino", "valor": 10}, {"nombre": "Jazz", "valor": 20}, {"nombre": "Salsa", "valor": 10}, {"nombre": "Reggaeton", "valor": 10}]
```

## Reglas aplicadas

- Un valor negativo es una inconsistencia.
- Un nombre repetido en la lista es una inconsistencia (a partir de la segunda aparicion).
- Un mismo elemento puede reportar varias inconsistencias.

## Pseudocodigo

```text
FUNCION detectar_inconsistencias(items)
  vistos <- conjunto vacio
  PARA CADA (indice, item) EN items
    SI item.valor < 0 ENTONCES reportar 'valor negativo'
    SI item.nombre YA esta en vistos ENTONCES reportar 'nombre duplicado'
    SINO agregar item.nombre a vistos
  DEVOLVER lista de inconsistencias
FIN FUNCION
```

## Salida esperada

```text
inconsistencias: [{"indice": 4, "nombre": "Reggaeton", "problema": "nombre duplicado"}]
total: 1
```

## Pruebas

### Prueba 1 (caso normal, el del ejemplo de entrada)

```text
entrada:
items: [{"nombre": "Reggaeton", "valor": 10}, {"nombre": "Pop latino", "valor": 10}, {"nombre": "Jazz", "valor": 20}, {"nombre": "Salsa", "valor": 10}, {"nombre": "Reggaeton", "valor": 10}]

salida:
inconsistencias: [{"indice": 4, "nombre": "Reggaeton", "problema": "nombre duplicado"}]
total: 1
```

### Prueba 2 (caso borde)

```text
entrada:
items: [{"nombre": "Reggaeton", "valor": 5}]

salida:
inconsistencias: []
total: 0
```
