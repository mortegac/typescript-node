function helloWorld(text){
    return 'hola' +text;
}

// const hellorWord= (text) => {
//     return 'hola' +text;
// ;}

const name = 'Manuel Ortega';
const resul = helloWorld(name); 
const label = <HTMLElement>document.getElementById('container');

label.innerHTML = resul;

//constiable y tipos 

const nameTwo:string = 'Manu Ortega';
const cualquierCosa:any = 'Manu Ortega';
const age:number = 38;
const isProgramer:boolean = true;
const langs:Array<string> = ['ES6','C#','CSS'];

nameTwo='letras';
age= 'as';

label.innerHTML = nameTwo + ' - ' +age;
// alert('Hello World');

function returnNumber(num:number):string{
    return 'return number' + num;
};

function returnString(text:string):number{
    return 'return number' + text;
};


