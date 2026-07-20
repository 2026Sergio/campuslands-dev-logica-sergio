# Plantilla de solucion

## Analisis

* Entrada:

  * Lista de opciones de comida urbana.
  * Nombre del producto.
  * Precio.
  * Nivel de popularidad.
  * Estado de disponibilidad.

* Proceso:

  * Revisar cada opción de comida.
  * Ignorar productos que no estén disponibles.
  * Comparar la popularidad de cada opción.
  * En caso de empate, seleccionar la opción con menor precio.
  * Guardar la mejor opción encontrada.

* Salida:

  * Nombre de la comida seleccionada.
  * Precio.
  * Nivel de popularidad.
  * Mensaje cuando no existen opciones válidas.

## Reglas identificadas

1. Solo se pueden seleccionar comidas disponibles.
2. La opción con mayor popularidad tiene prioridad.
3. Si dos opciones tienen la misma popularidad, se selecciona la más económica.
4. Si ninguna comida está disponible, se debe informar que no existen opciones.

## Pruebas

### Caso normal

Entrada:

```text
[
 {
  nombre: Hamburguesa urbana,
  precio: 15000,
  popularidad: 90,
  disponible: true
 },
 {
  nombre: Perro caliente,
  precio: 10000,
  popularidad: 85,
  disponible: true
 },
 {
  nombre: Tacos,
  precio: 12000,
  popularidad: 95,
  disponible: true
 }
]
```

Resultado esperado:

```text
resultado:
opcion seleccionada

comida:
Tacos

precio:
12000

popularidad:
95
```

La selección se realiza porque tiene el mayor nivel de popularidad.

---

### Caso borde

Entrada:

```text
[
 {
  nombre: Pizza callejera,
  precio: 13000,
  popularidad: 80,
  disponible: false
 }
]
```

Resultado esperado:

```text
resultado:
sin opciones disponibles
```

No existen comidas que puedan ser seleccionadas.

## Explicacion final

La solución funciona porque aplica una estrategia de selección basada en reglas ordenadas.

Primero filtra las opciones válidas verificando disponibilidad. Después compara los valores importantes para tomar una decisión: popularidad como criterio principal y precio como criterio secundario.

El algoritmo puede trabajar con cualquier cantidad de comidas porque recorre la lista completa y mantiene únicamente la mejor opción encontrada.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
