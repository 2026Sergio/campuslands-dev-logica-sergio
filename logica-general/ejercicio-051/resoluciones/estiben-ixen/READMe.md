# Plantilla de solucion

## Analisis

* Entrada:

  * Lista de competidores de kickboxing.
  * Cada competidor contiene nombre, categoria y puntaje obtenido.

* Proceso:

  * Validar que exista una lista con datos.
  * Recorrer y ordenar los competidores.
  * Primero organizar por categoria de peso.
  * Dentro de cada categoria ordenar por puntaje de mayor a menor.
  * Generar una lista final organizada.

* Salida:

  * Lista de competidores ordenados según categoria y rendimiento.

## Reglas identificadas

1. La informacion recibida debe ser una lista valida de competidores.
2. Los competidores deben agruparse primero por categoria.
3. Dentro de cada categoria, el mayor puntaje debe aparecer primero.
4. Si no existen competidores, se debe devolver una lista vacia.

## Pruebas

### Caso normal

Entrada:

```text
[
 {
  nombre: Carlos Ruiz,
  categoria: pesado,
  puntaje: 85
 },
 {
  nombre: Luis Perez,
  categoria: ligero,
  puntaje: 92
 },
 {
  nombre: Ana Torres,
  categoria: ligero,
  puntaje: 88
 },
 {
  nombre: Mario Diaz,
  categoria: pesado,
  puntaje: 95
 }
]
```

Resultado esperado:

```text
[
 {
  nombre: Ana Torres,
  categoria: ligero,
  puntaje: 88
 },
 {
  nombre: Luis Perez,
  categoria: ligero,
  puntaje: 92
 },
 {
  nombre: Mario Diaz,
  categoria: pesado,
  puntaje: 95
 },
 {
  nombre: Carlos Ruiz,
  categoria: pesado,
  puntaje: 85
 }
]
```

La lista queda organizada por categoria y puntaje.

---

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
[]
```

No existen competidores para organizar.

## Explicacion final

La solucion funciona porque divide la organizacion de datos en reglas simples. Primero valida la lista recibida y despues aplica un ordenamiento utilizando dos criterios: categoria y puntaje.

La funcion puede recibir diferentes listas de competidores porque no depende de valores especificos, solamente de la estructura esperada de cada objeto.

El uso de una funcion independiente permite reutilizar la solucion en diferentes torneos o rankings de kickboxing.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
