# Plantilla de solucion

## Analisis

* Entrada:

  * Una matriz que representa una escena de animación 3D.
  * Cada posición puede contener un objeto o estar vacía.

* Proceso:

  * Validar que la matriz tenga información.
  * Recorrer cada fila y columna de la matriz.
  * Identificar las posiciones que contienen objetos.
  * Contar los elementos activos de la escena.
  * Guardar la ubicación de cada objeto encontrado.

* Salida:

  * Cantidad de objetos encontrados.
  * Lista de posiciones donde existen elementos dentro de la matriz.

## Reglas identificadas

1. La matriz debe contener datos para poder ser analizada.
2. Cada posición representa una ubicación dentro de la escena 3D.
3. Los valores diferentes de null representan objetos activos.
4. Cada objeto encontrado debe registrarse con su posición dentro de la matriz.

## Pruebas

### Caso normal

Entrada:

```text
[
 ["robot", null, "arbol"],
 [null, "casa", null],
 ["auto", null, "personaje"]
]
```

Resultado esperado:

```text
cantidadObjetos:
5

posiciones:
- fila 0 columna 0 robot
- fila 0 columna 2 arbol
- fila 1 columna 1 casa
- fila 2 columna 0 auto
- fila 2 columna 2 personaje
```

La matriz contiene cinco objetos dentro de la escena.

---

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
estado:
error

motivo:
matriz vacia
```

No existen elementos para analizar.

## Explicacion final

La solución funciona porque utiliza una estructura de matriz para representar una escena de animación 3D y recorre cada posición mediante ciclos anidados.

Cada fila y columna es evaluada para encontrar objetos activos. Cuando se encuentra un elemento válido, se almacena su información y ubicación.

Esta organización permite trabajar con diferentes tamaños de matrices sin modificar la lógica principal.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
