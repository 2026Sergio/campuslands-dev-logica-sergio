# Plantilla de solucion

## Analisis

* Entrada:

  * Lista de elementos necesarios para crear una fórmula química.
  * Inventario disponible de elementos.
  * Cantidad requerida de cada componente.

* Proceso:

  * Recorrer los elementos necesarios de la fórmula.
  * Comparar la cantidad requerida con la cantidad disponible en inventario.
  * Registrar los elementos faltantes.
  * Si existen suficientes elementos, descontar las cantidades utilizadas.
  * Generar el resultado final del inventario.

* Salida:

  * Confirmación de si la fórmula puede crearse.
  * Lista de elementos faltantes cuando no sea posible.
  * Inventario actualizado después de utilizar materiales.

## Reglas identificadas

1. Cada fórmula necesita elementos específicos con cantidades definidas.
2. Un elemento solo puede utilizarse si existe suficiente cantidad disponible.
3. Si falta algún elemento, la fórmula no puede crearse.
4. Cuando la fórmula es creada, las cantidades utilizadas deben descontarse del inventario.

## Pruebas

### Caso normal

Entrada:

```text
Inventario:

Hidrogeno: 10
Oxigeno: 5
Carbono: 3


Formula:

Hidrogeno: 2
Oxigeno: 1
```

Resultado esperado:

```text
estado:
formula creada

inventario actualizado:

Hidrogeno: 8
Oxigeno: 4
Carbono: 3
```

La fórmula puede realizarse porque existen suficientes componentes.

---

### Caso borde

Entrada:

```text
Inventario:

Hidrogeno: 1
Oxigeno: 0


Formula:

Hidrogeno: 2
Oxigeno: 1
```

Resultado esperado:

```text
estado:
formula no disponible

faltantes:

- Hidrogeno
- Oxigeno
```

No existen cantidades suficientes para crear la fórmula.

## Explicacion final

La solución funciona porque representa el inventario como un conjunto de datos que puede ser consultado y actualizado.

Primero se revisan todos los componentes necesarios antes de modificar el inventario. Esto evita descontar materiales cuando la fórmula no puede completarse.

La estructura permite manejar diferentes fórmulas químicas y diferentes cantidades de elementos sin cambiar la lógica principal.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
