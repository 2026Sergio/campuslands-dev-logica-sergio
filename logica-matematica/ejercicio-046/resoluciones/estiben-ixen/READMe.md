# Plantilla de solucion

## Analisis

* Entrada:

  * Nombre del auto hiperdeportivo.
  * Valor de velocidad.
  * Unidad inicial de velocidad.
  * Unidad final de velocidad.

* Proceso:

  * Validar que la velocidad sea un numero positivo.
  * Revisar si la conversion solicitada existe.
  * Aplicar la formula correspondiente entre kilometros por hora y millas por hora.
  * Redondear el resultado para mostrar un valor facil de verificar.

* Salida:

  * Velocidad convertida en la unidad solicitada.
  * Mensaje de error si los datos no son validos.

## Reglas identificadas

1. Una velocidad negativa o un valor que no sea numerico no puede procesarse.
2. Para convertir de km/h a mph se multiplica el valor por 0.621371.
3. Para convertir de mph a km/h se divide el valor entre 0.621371.

## Pruebas

### Caso normal

Entrada:

```text
Auto: hyper-x
Velocidad: 300
Unidad origen: mph
Unidad destino: kmh
```

Resultado esperado:

```text
Velocidad aproximada: 482.8 km/h
```

### Caso borde

Entrada:

```text
Velocidad: 0
Unidad origen: kmh
Unidad destino: mph
```

Resultado esperado:

```text
0 mph
```

## Explicacion final

La solucion funciona porque separa la conversion en una funcion independiente que recibe los datos necesarios y aplica reglas claras. Primero valida la informacion recibida, despues identifica el tipo de conversion y finalmente devuelve un resultado verificable.

El programa puede adaptarse facilmente para agregar nuevas unidades porque la logica de conversion esta organizada en condiciones separadas.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
