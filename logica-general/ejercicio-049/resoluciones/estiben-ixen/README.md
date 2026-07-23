# Plantilla de solucion

## Analisis

* Entrada:

  * Nombre de la pelicula.
  * Nivel de terror de la pelicula.
  * Tipo de final de la historia.

* Proceso:

  * Validar que los datos ingresados sean correctos.
  * Crear un estado inicial para la pelicula.
  * Evaluar el nivel de terror y cambiar el estado segun las reglas.
  * Revisar el tipo de final para determinar el ultimo estado.
  * Guardar cada cambio realizado durante la simulacion.

* Salida:

  * Nombre de la pelicula.
  * Historial de estados recorridos.
  * Estado final de la simulacion.

## Reglas identificadas

1. Una pelicula debe tener titulo y un nivel de terror valido para iniciar la simulacion.
2. Si el nivel de terror es mayor o igual a 8, la pelicula queda en estado de alto impacto.
3. Si el nivel de terror es menor a 8 pero mayor o igual a 5, queda en terror moderado; en otro caso queda en terror bajo.
4. Un final abierto cambia el estado a continuacion posible, mientras que un final cerrado termina la historia.

## Pruebas

### Caso normal

Entrada:

```text
titulo: La Casa Oscura
nivelTerror: 9
final: abierto
```

Resultado esperado:

```text
pelicula:
La Casa Oscura

historial:
- inicio
- alto impacto
- continuacion posible

estadoFinal:
continuacion posible
```

### Caso borde

Entrada:

```text
titulo:
nivelTerror: -1
final: cerrado
```

Resultado esperado:

```text
pelicula:
sin titulo

estado:
error

motivo:
datos invalidos
```

## Explicacion final

La solucion funciona porque representa el comportamiento de una pelicula mediante una simulacion de estados. Cada condicion representa una regla del sistema y cada cambio se almacena en un historial para poder verificar el recorrido completo.

La funcion permite recibir diferentes peliculas y aplicar el mismo flujo de decision sin depender de datos especificos.

La estructura puede ampliarse agregando nuevos estados o reglas sin cambiar la logica principal.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
