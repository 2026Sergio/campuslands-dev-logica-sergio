# Solucion ejercicio 006 - busqueda de elementos

Area: Logica general | Tematica: autos hiperdeportivos | Autor: Daniel Aguilar

## Entrada

```text
items: [{"nombre": "Ferrari SF90", "valor": 1}, {"nombre": "Bugatti Chiron", "valor": 19}, {"nombre": "McLaren Senna", "valor": 85}, {"nombre": "Koenigsegg Jesko", "valor": 76}, {"nombre": "Rimac Nevera", "valor": 61}]
buscar: McLaren Senna
```

## Reglas aplicadas

- La busqueda del nombre no distingue mayusculas de minusculas.
- Si el elemento existe, se devuelve su posicion (0-index) y sus datos.
- Si no existe, se devuelve encontrado=false y posicion=-1.

## Pseudocodigo

```text
FUNCION buscar_elemento(items, objetivo)
  PARA CADA (posicion, item) EN items
    SI item.nombre en minusculas == objetivo en minusculas ENTONCES
      DEVOLVER encontrado=true, posicion, item
  DEVOLVER encontrado=false, posicion=-1
FIN FUNCION
```

## Salida esperada

```text
encontrado: True
posicion: 2
dato: {"nombre": "McLaren Senna", "valor": 85}
```

## Pruebas

### Prueba 1 (caso normal, el del ejemplo de entrada)

```text
entrada:
items: [{"nombre": "Ferrari SF90", "valor": 1}, {"nombre": "Bugatti Chiron", "valor": 19}, {"nombre": "McLaren Senna", "valor": 85}, {"nombre": "Koenigsegg Jesko", "valor": 76}, {"nombre": "Rimac Nevera", "valor": 61}]
buscar: McLaren Senna

salida:
encontrado: True
posicion: 2
dato: {"nombre": "McLaren Senna", "valor": 85}
```

### Prueba 2 (caso borde)

```text
entrada:
items: [{"nombre": "Ferrari SF90", "valor": 1}, {"nombre": "Bugatti Chiron", "valor": 19}, {"nombre": "McLaren Senna", "valor": 85}, {"nombre": "Koenigsegg Jesko", "valor": 76}, {"nombre": "Rimac Nevera", "valor": 61}]
buscar: elemento-inexistente-xyz

salida:
encontrado: False
posicion: -1
dato: None
```
