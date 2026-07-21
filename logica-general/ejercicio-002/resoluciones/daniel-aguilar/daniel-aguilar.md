# Solucion ejercicio 002 - validacion de datos

Area: Logica general | Tematica: ranking de futbol sala | Autor: Daniel Aguilar

## Entrada

```text
items: [{"nombre": "Halcones FC", "valor": 20}, {"nombre": "", "valor": -5}, {"nombre": "Cobras FS", "valor": -5}, {"nombre": "Tigres Sala", "valor": 20}]
```

## Reglas aplicadas

- Un elemento es invalido si el nombre esta vacio.
- Un elemento es invalido si el valor es negativo.
- Un elemento puede acumular varios motivos de invalidez a la vez.
- Los elementos validos y los invalidos se reportan por separado.

## Pseudocodigo

```text
FUNCION validar_datos(items)
  PARA CADA item EN items
    motivos <- lista vacia
    SI item.nombre esta vacio ENTONCES agregar 'nombre vacio' a motivos
    SI item.valor < 0 ENTONCES agregar 'valor negativo' a motivos
    SI motivos no esta vacio ENTONCES agregar item a invalidos
    SINO agregar item a validos
  DEVOLVER validos, invalidos
FIN FUNCION
```

## Salida esperada

```text
validos: [{"nombre": "Halcones FC", "valor": 20}, {"nombre": "Tigres Sala", "valor": 20}]
invalidos: [{"item": {"nombre": "", "valor": -5}, "motivo": "nombre vacio, valor negativo"}, {"item": {"nombre": "Cobras FS", "valor": -5}, "motivo": "valor negativo"}]
total_validos: 2
total_invalidos: 2
```

## Pruebas

### Prueba 1 (caso normal, el del ejemplo de entrada)

```text
entrada:
items: [{"nombre": "Halcones FC", "valor": 20}, {"nombre": "", "valor": -5}, {"nombre": "Cobras FS", "valor": -5}, {"nombre": "Tigres Sala", "valor": 20}]

salida:
validos: [{"nombre": "Halcones FC", "valor": 20}, {"nombre": "Tigres Sala", "valor": 20}]
invalidos: [{"item": {"nombre": "", "valor": -5}, "motivo": "nombre vacio, valor negativo"}, {"item": {"nombre": "Cobras FS", "valor": -5}, "motivo": "valor negativo"}]
total_validos: 2
total_invalidos: 2
```

### Prueba 2 (caso borde)

```text
entrada:
items: [{"nombre": "", "valor": -1}]

salida:
validos: []
invalidos: [{"item": {"nombre": "", "valor": -1}, "motivo": "nombre vacio, valor negativo"}]
total_validos: 0
total_invalidos: 1
```
