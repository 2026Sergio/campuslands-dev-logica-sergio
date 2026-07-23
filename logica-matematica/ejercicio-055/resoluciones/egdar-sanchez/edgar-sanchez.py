def calcular_cinematica_trazo(velocidad, tiempo, distancia):
    parametros = [velocidad, tiempo, distancia]
    nulos = [v for v in parametros if v is None]

    if len(nulos) != 1:
        return None

    for v in parametros:
        if v is not None:
            if not isinstance(v, (int, float)) or v < 0:
                return None

    if velocidad is None:
        if tiempo == 0:
            return None
        v_calc = distancia / tiempo
        t_calc = tiempo
        d_calc = distancia

    elif tiempo is None:
        if velocidad == 0:
            if distancia == 0:
                t_calc = 0.0
            else:
                return None
        else:
            t_calc = distancia / velocidad
        v_calc = velocidad
        d_calc = distancia

    else:
        d_calc = velocidad * tiempo
        v_calc = velocidad
        t_calc = tiempo

    return {
        "velocidad": round(v_calc, 2),
        "tiempo": round(t_calc, 2),
        "distancia": round(d_calc, 2)
    }


if __name__ == "__main__":
    trazo_1 = calcular_cinematica_trazo(velocidad=None, tiempo=2.5, distancia=500.0)
    trazo_2 = calcular_cinematica_trazo(velocidad=150.0, tiempo=None, distancia=300.0)
    trazo_3 = calcular_cinematica_trazo(velocidad=200.0, tiempo=1.5, distancia=None)

    print("Resultados de Trazo Digital:")
    print(trazo_1)
    print(trazo_2)
    print(trazo_3)