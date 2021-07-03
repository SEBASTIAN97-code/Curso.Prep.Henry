// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
 x , y // "x" e "y" son números enteros (int).
if(x>y){ return x } // Devuelve el número más grande
else{ return y } // Si son iguales, devuelve cualquiera de los dos
if(x==y){return x}  // Tu código:
}

function mayoriaDeEdad(edad) {
 var edad //Determinar si la persona según su edad puede ingresar a un evento.
 if(edad>=18){return 'Allowed'} //Si tiene 18 años ó más, devolver --> "Allowed"
 else{return 'Not allowed'}  //Si es menor, devolver --> "Not allowed"
}
  
function conection(status) {
 var status //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
 if(status==1){return 'Online'} //Cuando el estado es igual a 1, el usuario está "Online"
 else if(status==2){return 'Away'} //Cuando el estado es igual a 2, el usuario está "Away"
 else{return 'Offline'} //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
}

function saludo(idioma) {
  var idioma// Devuelve un saludo en tres diferentes lenguajes:
if(idioma=="aleman"){return "Guten Tag!"} // Si "idioma" es "aleman", devuelve "Guten Tag!"
else if(idioma=="mandarin"){return "Ni Hao!"} // Si "idioma" es "mandarin", devuelve "Ni Hao!"
else if(idioma=="ingles"){return "Hello!"}// Si "idioma" es "ingles", devuelve "Hello!"
else{return "Hola!"} // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
}

function colors(color) {
  var color//La función recibe un color. Devolver el string correspondiente:
 if(color=='blue'){return 'This is blue'} //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  else if(color=='red'){return 'This is red'}//En caso que el color recibido sea "red", devuleve --> "This is red"
 else if(color=='green'){return 'This is green'} //En caso que el color recibido sea "green", devuleve --> "This is green"
 else if(color=='orange'){return 'This is orange'} //En caso que el color recibido sea "orange", devuleve --> "This is orange"
else{return 'Color not found'}  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
}

function esDiezOCinco(numero) {
 var numero // Devuelve "true" si "numero" es 10 o 5
 if(numero===10 || numero===5){return true}// De lo contrario, devuelve "false"
 else{return false} // Tu código:
}

function estaEnRango(numero) {
 
  var numero// Devuelve "true" si "numero" es menor que 50 y mayor que 20
 if(numero<50&&numero>20){return true} // De lo contrario, devuelve "false"
  else{return false}// Tu código:
}

function esEntero(numero) {
  var numero// Devuelve "true" si "numero" es un entero (int/integer)
 if(numero%1==0){return true} // Ejemplo: 0.8 -> false
  else{return false}// Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
}

function fizzBuzz(numero) {
 if(numero%3==0 && numero%5==0){return 'fizzbuzz'} // Si "numero" es divisible entre 3, devuelve "fizz"
 else if(numero%3==0){return 'fizz'} // Si "numero" es divisible entre 5, devuelve "buzz"
  else if(numero%5===0){return 'buzz'}// Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
 else {return numero} // De lo contrario, devuelve el numero
}

function operadoresLogicos(num1, num2, num3) {
 num1 , num2 , num3 //La función recibe tres números distintos. 
  if(num1<0||num2<0||num3<0){return 'Hay negativos'}//Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
 else if(num1==0||num2==0||num3==0){return 'Error'} //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  else if(num3>num1 && num3>num2){return num3 +1}//Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  else if(num1>num2&&num1>num3&&num1>0){return 'Número 1 es mayor y positivo'}//0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
 else{return false} //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
}

function esPrimo(numero) {
 if(numero<2){return false} // Devuelve "true" si "numero" es primo
if(numero===2){return true} // De lo contrario devuelve "falso"
for(var i=2 ; i<numero ; i++) {if(numero%i===0){return false}} // Pista: un número primo solo es divisible por sí mismo y por 1
return true  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
}

function esVerdadero(valor){
 if(valor){return 'Soy verdadero'} //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
 else{return 'Soy falso'} //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  let arrayTablaDel6 = []
  for (let i = 0; i < 11; i++) {
        arrayTablaDel6.push(6 * i)
  }
  return arrayTablaDel6 //Escribe tu código aquí   

}

function tieneTresDigitos(numero){
if(numero>99 && numero<1000){return true}//Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
else{return false}//Escribe tu código aquí
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  var a = numero;
  var i = 0;
  do {
    i = i + 1;
    a = a + 5;
  }
  while(i < 8);
  return a;
}//Usar el bucle do ... while.



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
