# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto `parametrosSesion` que contiene las propiedades `esterilizado` (boolean), `voltajeMaquina` (number) y `consentimientoFirmado` (boolean).
* **Proceso**: Evaluación independiente de múltiples condiciones de seguridad, técnicas y legales mediante declaraciones `if` sucesivas que acumulan incidencias en un arreglo de errores, determinando la aptitud global de la sesión.
* **Salida**: Un objeto que indica si es `aptoParaIniciar` (boolean) y un `diagnostico` que lista las fallas encontradas o un mensaje de aprobación.

## Reglas identificadas

1. **Protocolo de Esterilización**: El equipo de trabajo debe estar esterilizado obligatoriamente; de lo contrario, se registra una falla crítica.
2. **Rango de Voltaje Seguro**: El voltaje de operación de la máquina debe mantenerse estrictamente dentro de los márgenes de 4V y 9V.
3. **Resguardo Legal**: Es indispensable contar con la firma de consentimiento del cliente antes de dar inicio a la sesión.

## Pruebas

### Caso normal

* **Entrada**: `{ esterilizado: true, voltajeMaquina: 6, consentimientoFirmado: true }`
* **Resultado esperado**: `{ aptoParaIniciar: true, diagnostico: ["Sesión lista para iniciar sin anomalías."] }`

### Caso borde

* **Entrada**: `{ esterilizado: false, voltajeMaquina: 11, consentimientoFirmado: false }`
* **Resultado esperado**: `{ aptoParaIniciar: false, diagnostico: ["Falla crítica: El equipo no ha pasado por el proceso de esterilización.", "Advertencia: El voltaje de la máquina está fuera del rango seguro (4V - 9V).", "Falla legal: Falta la firma de consentimiento del cliente."] }`

## Explicacion final

La solución funciona mediante la técnica de acumulación de errores en un arreglo dinámico. A diferencia de las estructuras condicionales en cascada (que se detienen en la primera coincidencia), este enfoque revisa cada regla de manera independiente, permitiendo reportar todas las anomalías presentes en una sola ejecución. Al final, el estado de aptitud se calcula de forma limpia evaluando si la longitud del arreglo de errores es igual a cero, ofreciendo un reporte integral y transparente para el control de calidad.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (Voltaje fuera de rango)**: Comprueba de forma independiente que los valores menores a 4 o mayores a 9 disparen el mensaje de advertencia, asegurando que los límites inclusivos/exclusivos de la condición lógica sean correctos.