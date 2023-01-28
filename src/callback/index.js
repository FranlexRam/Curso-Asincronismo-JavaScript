// Se tiene como objetivo sumar dos valores.
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
   return callback(num1, num2) 
}

console.log(calc(2, 3, sum));


//Aprendiendo a usar el setTimeOut
setTimeout (function(){
    console.log('Hola JavaScript');
}, 5000);

function greeting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'Franlex');