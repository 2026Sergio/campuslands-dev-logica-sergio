# Plantilla de solucion

## Analisis

* Entrada:

  * Nombre del paracaidista.
  * Nivel de experiencia.
  * Altura del salto.
  * Condicion climatica.

* Proceso:

  * Validar que la informacion del participante exista.
  * Revisar si cuenta con experiencia suficiente.
  * Evaluar que la altura del salto sea adecuada.
  * Verificar que las condiciones climaticas sean seguras.
  * Determinar el resultado final del caso.

* Salida:

  * Estado del salto.
  * Motivo de rechazo o aprobacion cuando corresponda.

## Reglas identificadas

1. El participante debe tener informacion valida para ser evaluado.
2. Un paracaidista con menos de 1 año de experiencia no puede realizar el salto.
3. Una altura menor a 1000 metros requiere revision.
4. El salto solo puede aprobarse cuando el clima sea favorable.

## Pruebas

### Caso normal

Entrada:

```text
nombre: Daniel
experiencia: 5
altura: 3000
clima: favorable
```

Resultado esperado:

```text
nombre:
Daniel

estado:
salto aprobado
```

El participante cumple todas las condiciones necesarias.

---

### Caso borde

Entrada:

```text
nombre: Luis
experiencia: 0
altura: 500
clima: desfavorable
```

Resultado esperado:

```text
nombre:
Luis

estado:
no autorizado

motivo:
experiencia insuficiente
```

El proceso termina porque no cumple la primera regla de seguridad.

## Explicacion final

La solucion funciona porque transforma el problema en una serie de decisiones ordenadas. Cada condicion representa una regla del sistema de seguridad del paracaidismo.

La funcion analiza un caso individual y devuelve un resultado claro dependiendo de las condiciones recibidas. Esto permite evaluar diferentes participantes sin cambiar la estructura del programa.

El orden de validacion evita procesar saltos que no cumplen requisitos basicos y mantiene la solucion organizada.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
