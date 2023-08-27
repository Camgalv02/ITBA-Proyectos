//Declaracion de variables
var numero = 10;
let nombre = 'Itba';
const num_pi = 3.14;

console.log('numero', numero);
console.log('nombre', nombre);
console.log('PI', num_pi);

//operadores aritmeticos
var suma = 5 + 3;
var multiplicacion = 5 * 2;
var modulo = 7 % 3;
var incre = 3;
incre++;
var disminucion = 8;
disminucion--;

console.log('suma', suma);
console.log('multiplicacion', multiplicacion);
console.log('modulo', modulo);
console.log('incre', incre);
console.log('disminucion', disminucion);

//operadores logicos
var log1= true && false; //AND
var log2= true || false;//OR
var log3= !true;//NOT

console.log('AND', log1);
console.log('OR', log2);
console.log('NOT', log3);

//operadores de comparacion
var num1 = 5;
var num2 = 3;
var resultadoComparacion1 = num1 > num2;
var resultadoComparacion2 = num1 <= num2;
var resultadoComparacion3 = num1 === num2;
var resultadoComparacion4 = num1 !== num2;

console.log('Mayor que', resultadoComparacion1);
console.log('Menor o igual que', resultadoComparacion2);
console.log('Igualdad estricta', resultadoComparacion3);
console.log('Desigualdad estricta', resultadoComparacion4);

let nombreUsuario = prompt('Ingrese su nombre:');
alert('Hola, ' + nombreUsuario);

let confirmacion = confirm('Ese es su nombre?');

if(confirmacion){
    alert('Está ok');
} else{
    alert('No está bien');
}

let edad = prompt('Ingrese su edad');

if(edad >=18){
    alert('Eres mayor de edad');
} else{
    alert('Eres menor de edad');
}

for (var i=0; i<5; i++){
    console.log(i);
}

//estructura 
var contador = 0;

while (contador <3) {
    console.log('Contador', contador);
    contador++;
}

//estructura
var opcion = prompt('Ingrese una opcion:')
 switch (opcion) {
    case 1:
        console.log('Opcion 1 seleccionada');
        break;
    case 2:
        console.log('Opcion 2 seleccionada');
        break;
    default:
        console.log('Opcion no válida')
}