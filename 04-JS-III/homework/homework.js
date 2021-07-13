// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
return array[0] // Devuelve el primer elemento de un array
  // Tu código:
}


function devolverUltimoElemento(array) {
 return array[array.length-1] // Devuelve el último elemento de un array
  // Tu código:
}


function obtenerLargoDelArray(array) {
 return array.length // Devuelve el largo de un array
  // Tu código:
}


function incrementarPorUno(array) {
 var nuevoArray=[] // "array" debe ser una matriz de enteros (int/integers)
 for(var i=0;i<array.length;i++) // Aumenta cada entero por 1
 {nuevoArray[i]=array[i] + 1} // y devuelve el array
  return nuevoArray// Tu código:
}


function agregarItemAlFinalDelArray(array, elemento) {
 // Añade el "elemento" al final del array
 array.push(elemento) // y devuelve el array
 return array // Tu código:
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
array.unshift(elemento)  // Pista: usa el método `.unshift`
 return array // Tu código:
}


function dePalabrasAFrase(palabras) {
  return palabras.join(' ')// "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}


function arrayContiene(array, elemento) {
  for(var i=0; i < array.length; i++)// Comprueba si el elemento existe dentro de "array"
{if(array[i]===elemento){return true}} // Devuelve "true" si está, o "false" si no esta
{return false} // Tu código:
}


function agregarNumeros(numeros) {
  var suma=0// "numeros" debe ser un arreglo de enteros (int/integers)
 for(var i=0;i<numeros.length;i++){suma=suma+numeros[i]} // Suma todos los enteros y devuelve el valor
  return suma// Tu código:
}


function promedioResultadosTest(resultadosTest) {
 var suma=0 // "resultadosTest" debe ser una matriz de enteros (int/integers)
 for(var i=0;i<resultadosTest.length;i++){suma=suma+resultadosTest[i]} // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
 return suma/resultadosTest.length // Tu código:
}


function numeroMasGrande(numeros) {
 var maximo=numeros[0] // "numeros" debe ser una matriz de enteros (int/integers)
 for(var i=1;i<numeros.length;i++){if(numeros[i]>maximo){maximo=numeros[i]}} // Devuelve el número más grande
 return maximo // Tu código:
}


function multiplicarArgumentos() {
 if(arguments.length<1) {return 0}; // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
 var multiplicacion=1;// Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  for(var i=0;i<arguments.length;i++){multiplicacion=multiplicacion*arguments[i];}// Escribe tu código aquí:
return multiplicacion
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
 var suma=0; //Escribe tu código aquí
for(var i=0;i<arreglo.length;i++){if(arreglo[i]>18){suma++}}
return suma}


function diaDeLaSemana(numeroDeDia) {
 if(numeroDeDia==1||numeroDeDia==7){return 'Es fin de semana'} //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
 return'Es dia Laboral' //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString()
  if(num.charAt(0) === "9"){
    return true
  }
  return false

}


function todosIguales(arreglo) {
  for(var i=0;i<arreglo.length-1;i++){if(arreglo[i]==arreglo[i+1])//Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  {return true}}//retornar true, caso contrario retornar false.
 return false //Escribe tu código aquí  
  
} 


function mesesDelAño(array) {
 var nuevoArray=[];//Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
 for(var i=0;i<array.length;i++)
  {if(array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre"){nuevoArray.push(array[i]);}}// "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  if(nuevoArray.length<3){return "No se encontraron los meses pedidos";}//Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
 else{return nuevoArray;} // Tu código:
}


function mayorACien(array) {
 var nuevoArray=[]; //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
 for(let i=0;i<array.length;i++){if(array[i]>100){nuevoArray.push(array[i]);}} //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
 return nuevoArray // Tu código:
}


function breakStatement(numero) {
 var array=[] //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
 var suma=numero //Guardar cada nuevo valor en un array. 
  for(var i=0;i<10;i++){suma=suma+2;//Devolver el array
  if(suma===i)break;//Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  else{array.push(suma)}}//devolver: "Se interrumpió la ejecución"
  if(i<10){return 'Se interrumpió la ejecución'}//Pista: usá el statement 'break'
 else{return array} // Tu código:
}


function continueStatement(numero) {
 var array=[] //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  var suma=numero//Guardar cada nuevo valor en un array.    
 for(var i=0;i<10;i++){if(i===5){continue}else{suma=suma+2; array.push(suma)}} //Devolver el array
  return array//Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
