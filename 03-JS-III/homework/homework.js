// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var suma = 1;
  for(var i = 1; i < numeros.length; i++){
    suma = numeros[i] + suma;
  }
return suma
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
}

function encuentraPares(array){var pares = array.filter((element) => element % 2 === 0);
  return pares
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
}  

function elevaAlCuadrado(array){
 var cuadrado = array.map((element) => element ** 2)
 return cuadrado
  

  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
}

function sumaArray(array){return array.reduce((acumulador,siguiente) => acumulador + siguiente);
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
}

function numeroDigitos(num){return num.toString().length

  // Devuelve el número de dígitos de un número dado
  // Tu código:
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
