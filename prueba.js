function helloWorld(text) {
    return 'hola' + text;
}
// const hellorWord= (text) => {
//     return 'hola' +text;
// ;}
var name = 'Manuel Ortega';
var resul = helloWorld(name);
var label = document.getElementById('container');
label.innerHTML = resul;
//constiable y tipos 
var nameTwo = 'Manu Ortega';
var cualquierCosa = 'Manu Ortega';
var age = 38;
var isProgramer = true;
var langs = ['ES6', 'C#', 'CSS'];
nameTwo = 'letras';
age = 'as';
label.innerHTML = nameTwo + ' - ' + age;
// alert('Hello World');
function returnNumber(num) {
    return 'return number' + num;
}
;
function returnString(text) {
    return 'return number' + text;
}
;
