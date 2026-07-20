# Solucion ejercicio 004 - filtros por condiciones

Area: Logica general | Tematica: inventario de motos | Autor: Daniel Aguilar

## Entrada

```text
items: [{"nombre": "Honda CB500", "valor": 62, "estado": "activo"}, {"nombre": "Kawasaki Z400", "valor": 12, "estado": "activo"}, {"nombre": "Yamaha MT-03", "valor": 3, "estado": "inactivo"}, {"nombre": "KTM Duke", "valor": 71, "estado": "inactivo"}, {"nombre": "Bajaj Dominar", "valor": 98, "estado": "activo"}]
umbral: 40
```

## Reglas aplicadas

- Un elemento pasa el filtro solo si su valor es estrictamente mayor al umbral (40).
- Ademas el elemento debe estar en estado 'activo'.
- Un valor igual al umbral NO pasa el filtro (se exige estrictamente mayor).

## Pseudocodigo

```text
FUNCION filtrar_por_condiciones(items, umbral)
  resultado <- lista vacia
  PARA CADA item EN items
    SI item.valor > umbral Y item.estado == 'activo' ENTONCES
      agregar item.nombre a resultado
  DEVOLVER resultado
FIN FUNCION
```

## Salida esperada

```text
umbral: 40
resultado: ["Honda CB500", "Bajaj Dominar"]
```

## Pruebas

### Prueba 1 (caso normal, el del ejemplo de entrada)

```text
entrada:
items: [{"nombre": "Honda CB500", "valor": 62, "estado": "activo"}, {"nombre": "Kawasaki Z400", "valor": 12, "estado": "activo"}, {"nombre": "Yamaha MT-03", "valor": 3, "estado": "inactivo"}, {"nombre": "KTM Duke", "valor": 71, "estado": "inactivo"}, {"nombre": "Bajaj Dominar", "valor": 98, "estado": "activo"}]
umbral: 40

salida:
umbral: 40
resultado: ["Honda CB500", "Bajaj Dominar"]
```

### Prueba 2 (caso borde)

```text
entrada:
items: [{"nombre": "Honda CB500", "valor": 40, "estado": "activo"}]
umbral: 40

salida:
umbral: 40
resultado: []
```
