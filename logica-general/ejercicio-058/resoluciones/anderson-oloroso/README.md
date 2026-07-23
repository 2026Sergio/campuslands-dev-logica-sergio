# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con trabajadores de soldadura.
  - Cada trabajador contiene nombre y años de experiencia.

- Proceso:
  - Recorrer la lista de trabajadores.
  - Evaluar la experiencia de cada persona.
  - Asignar un turno según el nivel de experiencia.

- Salida:
  - Lista de trabajadores organizados por turno.

## Reglas identificadas

1. Los trabajadores con 5 o más años de experiencia reciben turno de mañana.
2. Los trabajadores con experiencia entre 2 y 4 años reciben turno de tarde.
3. Los trabajadores con menos de 2 años reciben turno de noche.

## Pruebas

### Caso normal

Entrada:

- Carlos: 6 años
- Ana: 3 años
- Luis: 1 año
- Sofía: 5 años

Resultado esperado:

- Mañana:
  - Carlos
  - Sofía

- Tarde:
  - Ana

- Noche:
  - Luis

### Caso borde

Entrada:

- Trabajador:
  - Pedro
  - Experiencia: 2 años

Resultado esperado:

- Tarde:
  - Pedro

## Explicacion final

La solución funciona porque organiza los trabajadores mediante reglas de asignación de turnos. Recorre cada registro y utiliza condiciones para determinar en qué grupo debe ubicarse cada persona según sus años de experiencia.