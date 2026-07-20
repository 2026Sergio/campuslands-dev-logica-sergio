# Plantilla de solucion

## Analisis

* Entrada:

  * Nombre de la pelicula.
  * Genero de la pelicula.
  * Duracion en minutos.
  * Calificacion recibida.

* Proceso:

  * Validar que la informacion necesaria exista.
  * Ejecutar cada paso del flujo en orden.
  * Revisar si pertenece al genero de ciencia ficcion.
  * Analizar la duracion.
  * Evaluar la calificacion para definir el estado final.

* Salida:

  * Nombre de la pelicula.
  * Lista de pasos realizados.
  * Estado final del proceso.

## Reglas identificadas

1. Una pelicula debe tener titulo, genero y una duracion valida para ser procesada.
2. Cada pelicula debe pasar por un flujo ordenado de validacion y analisis.
3. Una pelicula con calificacion menor a 5 debe quedar en estado de revision.

## Pruebas

### Caso normal

Entrada:

```text
titulo: Horizonte Galactico
genero: ciencia ficcion
duracion: 140
calificacion: 8
```

Resultado esperado:

```text
pelicula: Horizonte Galactico

pasos:
- pelicula registrada
- genero validado
- duracion extensa

estado:
aprobada
```

### Caso borde

Entrada:

```text
titulo:
genero: ciencia ficcion
duracion: 0
calificacion: 3
```

Resultado esperado:

```text
pelicula:
sin titulo

estado:
rechazada

motivo:
datos incompletos
```

## Explicacion final

La solucion funciona porque divide el problema en etapas pequeñas y ordenadas. Cada paso del flujo representa una regla del sistema y se ejecuta solamente cuando los datos cumplen las condiciones necesarias.

La funcion recibe cualquier pelicula como objeto, analiza la informacion y devuelve un resultado verificable con los pasos realizados.

Esta estructura permite agregar nuevas etapas al flujo sin modificar toda la solucion.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
