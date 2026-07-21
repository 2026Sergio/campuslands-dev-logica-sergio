# Solucion ejercicio 010 - lectura de instrucciones

Area: Logica general | Tematica: viajes y turismo | Autor: Daniel Aguilar

## Entrada

```text
instruccion_cruda: reservar 1 destino Bogota
```

## Reglas aplicadas

- El formato esperado es: 'comando cantidad recurso'.
- La cantidad debe ser un numero entero, si no lo es la instruccion es invalida.
- El recurso puede tener varias palabras (todo lo que sigue despues de la cantidad).

## Pseudocodigo

```text
FUNCION leer_instruccion(cruda)
  partes <- separar cruda por espacios
  SI hay menos de 3 partes O partes[1] no es numero ENTONCES DEVOLVER invalido
  DEVOLVER comando=partes[0], cantidad=partes[1], recurso=resto
FIN FUNCION
```

## Salida esperada

```text
valido: True
comando: reservar
cantidad: 1
recurso: destino Bogota
```

## Pruebas

### Prueba 1 (caso normal, el del ejemplo de entrada)

```text
entrada:
instruccion_cruda: reservar 1 destino Bogota

salida:
valido: True
comando: reservar
cantidad: 1
recurso: destino Bogota
```

### Prueba 2 (caso borde)

```text
entrada:
instruccion_cruda: reservar equis Bogota

salida:
valido: False
motivo: formato incorrecto, se esperaba: comando cantidad recurso
```
