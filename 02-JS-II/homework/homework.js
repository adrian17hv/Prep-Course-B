// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) { console.log('EsString');
  return str

    // "Return" la string provista: str
    // Tu código:
  }
  
  function suma(x, y) { var suma = x + y;
    return suma
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
  }
  
  function resta(x, y) { var resta = x - y;
    return resta
    // Resta "y" de "x" y devuelve el valor
    // Tu código:
  }
  
  function multiplica(x, y) { var multiplica = x * y;
    return multiplica
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
  }
  
  function divide(x, y) { var divide = x / y;
  return divide
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
  }
  
  function sonIguales(x, y) {if (x === y) return true;
    console.log(sonIguales);
    return false
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
  }
  
  function tienenMismaLongitud(str1, str2) {if (str1.length === str2.length) return true;
  console.log(tienenMismaLongitud);
  return false
      // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
  }
  
  function menosQueNoventa(num) {if (num < 90) return true;
    console.log (menosQueNoventa);
    return false

    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
  }
  
  function mayorQueCincuenta(num) {if (num > 50) return true;
    console.log(mayorQueCincuenta);
    return false
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
  }
  
  function obtenerResto(x, y) { var module = x % y;
    return module
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
  }
  
  function esPar(num) {if (num % 2 == 0)
    {
    return true
    }
    return false
    }
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:

  
  function esImpar(num) {if (num % 2 == 0)
    {
      return false
    }
else {return true}
}
 
  function elevarAlCuadrado(num) {return num ** 2
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
  }
   
  function elevarAlCubo(num){return num ** 3  // Devuelve el valor de "num" elevado al cubo
    // Tu código:
  }
  
  function elevar(num, exponent) { return num ** exponent
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
  }
  
  function redondearNumero(num) {return Math.round(num)
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
  }
  
  function redondearHaciaArriba(num) { return Math.ceil(num)
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
  }
  
  function numeroRandom() {return Math.random();
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    // Tu código:
  }
  
  function esPositivo(numero) { if (numero > 0) {return ('Es' + ' ' + 'positivo')
}
else if(numero < 0) {return ('Es' + ' ' + 'negativo')
}else return false;
}
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    // Tu código:
  
  
  function agregarSimboloExclamacion(str) {return str =  str + '!'
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
  }
  
  function combinarNombres(nombre, apellido) {return nombre + ' ' + apellido
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:
  }
  
  function obtenerSaludo(nombre) {return 'Hola' + ' ' + nombre + '!';
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
  }
  
  function obtenerAreaRectangulo(alto, ancho) {return alto * ancho
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
  }
  
  function retornarPerimetro(lado) {return lado + lado + lado + lado
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
  }
  
  function areaDelTriangulo(base, altura) { return (base * altura) / 2
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
  }
  
  function deEuroAdolar(euro) {return (euro * 1.20)
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
  }
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    devolverString,
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    suma,
    resta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevarAlCuadrado,
    elevarAlCubo,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    agregarSimboloExclamacion,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    areaDelTriangulo,
    deEuroAdolar,
  };