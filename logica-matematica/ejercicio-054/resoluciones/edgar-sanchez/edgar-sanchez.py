def calcular_geometria_tatuaje(tipo_figura, dimensiones):
    if not isinstance(tipo_figura, str) or not isinstance(dimensiones, dict):
        return None

    figura = tipo_figura.strip().lower()

    if figura == "rectangulo":
        base = dimensiones.get("base")
        altura = dimensiones.get("altura")
        if not isinstance(base, (int, float)) or not isinstance(altura, (int, float)):
            return None
        if base <= 0 or altura <= 0:
            return None
        area = base * altura
        perimetro = 2 * (base + altura)

    elif figura == "circulo":
        radio = dimensiones.get("radio")
        if not isinstance(radio, (int, float)) or radio <= 0:
            return None
        pi_aproximado = 3.141592653589793
        area = pi_aproximado * (radio ** 2)
        perimetro = 2 * pi_aproximado * radio

    elif figura == "triangulo":
        a = dimensiones.get("lado_a")
        b = dimensiones.get("lado_b")
        c = dimensiones.get("lado_c")
        if not isinstance(a, (int, float)) or not isinstance(b, (int, float)) or not isinstance(c, (int, float)):
            return None
        if a <= 0 or b <= 0 or c <= 0:
            return None
        if (a + b <= c) or (a + c <= b) or (b + c <= a):
            return None
        perimetro = a + b + c
        s = perimetro / 2
        area = (s * (s - a) * (s - b) * (s - c)) ** 0.5

    else:
        return None

    return {
        "figura": figura,
        "area": round(area, 2),
        "perimetro": round(perimetro, 2)
    }


if __name__ == "__main__":
    tatuaje_1 = calcular_geometria_tatuaje("rectangulo", {"base": 10, "altura": 5})
    tatuaje_2 = calcular_geometria_tatuaje("circulo", {"radio": 4})
    tatuaje_3 = calcular_geometria_tatuaje("triangulo", {"lado_a": 3, "lado_b": 4, "lado_c": 5})

    print("Resultados de Tatuajes:")
    print(tatuaje_1)
    print(tatuaje_2)
    print(tatuaje_3)