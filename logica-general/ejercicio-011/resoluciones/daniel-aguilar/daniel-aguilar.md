# Solucion ejercicio 011 - organizacion de listas

Area: Logica general | Tematica: kickboxing | Autor: Daniel Aguilar

## Entrada

```text
items: [{"nombre": "peleador D", "categoria": "B", "valor": 41}, {"nombre": "peleador E", "categoria": "A", "valor": 7}, {"nombre": "peleador F", "categoria": "B", "valor": 20}, {"nombre": "peleador B", "categoria": "A", "valor": 6}, {"nombre": "peleador A", "categoria": "A", "valor": 39}, {"nombre": "peleador C", "categoria": "B", "valor": 29}]
```

## Reglas aplicadas

- Los elementos se agrupan por su campo 'categoria'.
- Dentro de cada grupo, los nombres se ordenan alfabeticamente.
- Si una categoria no tiene elementos, no aparece en el resultado.

## Pseudocodigo

```text
FUNCION organizar_listas(items)
  grupos <- diccionario vacio
  PARA CADA item EN items
    agregar item.nombre al grupo item.categoria
  PARA CADA grupo EN grupos
    ordenar alfabeticamente
  DEVOLVER grupos
FIN FUNCION
```

## Salida esperada

```text
grupos: {"B": ["peleador C", "peleador D", "peleador F"], "A": ["peleador A", "peleador B", "peleador E"]}
```

## Pruebas

### Prueba 1 (caso normal, el del ejemplo de entrada)

```text
entrada:
items: [{"nombre": "peleador D", "categoria": "B", "valor": 41}, {"nombre": "peleador E", "categoria": "A", "valor": 7}, {"nombre": "peleador F", "categoria": "B", "valor": 20}, {"nombre": "peleador B", "categoria": "A", "valor": 6}, {"nombre": "peleador A", "categoria": "A", "valor": 39}, {"nombre": "peleador C", "categoria": "B", "valor": 29}]

salida:
grupos: {"B": ["peleador C", "peleador D", "peleador F"], "A": ["peleador A", "peleador B", "peleador E"]}
```

### Prueba 2 (caso borde)

```text
entrada:
items: [{"nombre": "peleador D", "categoria": "A", "valor": 1}]

salida:
grupos: {"A": ["peleador D"]}
```
