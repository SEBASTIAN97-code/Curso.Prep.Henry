// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 9;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 == 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 == 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 == 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str// "Return" la string provista: str
  // Tu código:
}

function suma(x, y) {
 x , y // "x" e "y" son números
 var suma=x+y // Suma "x" e "y" juntos y devuelve el valor
 return suma // Tu código:
}

function resta(x, y) {
 var resta=x-y // Resta "y" de "x" y devuelve el valor
 return resta // Tu código:
}

function multiplica(x, y) {
 var multiplicacion=x*y // Multiplica "x" por "y" y devuelve el valor
  return multiplicacion// Tu código:
}

function divide(x, y) {
  var division=x/y // Divide "x" entre "y" y devuelve el valor
 return division // Tu código:
}

function sonIguales(x, y) {
 if(x==y) // Devuelve "true" si "x" e "y" son iguales
 {return true} // De lo contrario, devuelve "false"
 return false // Tu código:
}

function tienenMismaLongitud(str1, str2) {
  if(str1.length==str2.length)// Devuelve "true" si las dos strings tienen la misma longitud
{return true} // De lo contrario, devuelve "false"
return false // Tu código:
}

function menosQueNoventa(num) {
   if(num<90)// Devuelve "true" si el argumento de la función "num" es menor que noventa
 {return true}// De lo contrario, devuelve "false"
  return false// Tu código:
}

function mayorQueCincuenta(num) {
 if(num>50) // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
 {return true }// De lo contrario, devuelve "false"
 return false // Tu código:
}

function obtenerResto(x, y) {
 var modulo=x%y // Obten el resto de la división de "x" entre "y"
 return modulo // Tu código:
}

function esPar(num) {
 if(num%2==0) // Devuelve "true" si "num" es par
 {return true}// De lo contrario, devuelve "false"
 return false // Tu código:
}

function esImpar(num) {
 if(num%2!=0) // Devuelve "true" si "num" es impar
 {return true }// De lo contrario, devuelve "false"
  return false // Tu código:
}

function elevarAlCuadrado(num) {
 var num // Devuelve el valor de "num" elevado al cuadrado
  return Math.pow(num,2)// ojo: No es raiz cuadrada!
  // Tu código:
}

function elevarAlCubo(num) {
  var num// Devuelve el valor de "num" elevado al cubo
 return Math.pow(num,3) // Tu código:
}

function elevar(num, exponent) {
 num , exponent // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  return Math.pow(num,exponent)// Tu código:
}

function redondearNumero(num) {
 var num // Redondea "num" al entero más próximo y devuélvelo
 return Math.round(num) // Tu código:
}

function redondearHaciaArriba(num) {
 var num // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
 return Math.ceil(num) // Tu código:
}

function numeroRandom(num) {
 var num //Generar un número al azar entre 0 y 1 y devolverlo
 return Math.random(num) //Pista: investigá qué hace el método Math.random()
}

function esPositivo(numero) {
 if(numero===0) //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
 {return false} //Si el número es positivo, devolver ---> "Es positivo"
 else if(numero>0) {return "Es positivo"} //Si el número es negativo, devolver ---> "Es negativo"
   else {return "Es negativo"} //Si el número es 0, devuelve false
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  return str + '!'// Tu código:
}

function combinarNombres(nombre, apellido) {
 nombre , apellido // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
 return nombre + ' ' + apellido // Tu código:
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
 return 'Hola' + ' ' + nombre + '!'  // Tu código:
}

function obtenerAreaRectangulo(alto, ancho) {
 area=alto*ancho  // Retornar el area de un rectángulo teniendo su altura y ancho
  return area// Tu código:
}


function retornarPerimetro (lado) { 
perimetro= lado*4//Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
return perimetro//Escribe tu código aquí
}


function areaDelTriangulo(base, altura){
 area=base*altura/2 //Desarrolle una función que calcule el área de un triángulo.
 return area //Escribe tu código aquí

}


function deEuroAdolar(euro){
  cambio=euro*1.20//Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  return cambio//Escribe tu código aquí
  
}


function esVocal(letra){
if(letra=='a'||letra=='e'||letra=='i'||letra=='o'||letra=='u')//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
{return 'Es vocal'} //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
else if(letra.length>1) //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
{return 'Dato incorrecto'}//Escribe tu código aquí
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
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
  esVocal,
};
