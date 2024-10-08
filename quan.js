import Utils from "./util.js";



// Variable
console.log('\n',Utils.formatTitle('VARIABLES DECLARATION', { padSize: 100, includeBox: true }))
// const a = false; // immutable
// var b;
// let c;

// final int name = 1;              // java or dart
// const A int = 1                 // golang
// const A : number = 1;           // typescript
// const A = 1;                    // javascript
// let A : Int = 1;                // swift
// A: Final[float] = 3.141592654    // python


// ===== differences ======


// const -> immutable
// let, var -> mutable


const b = 1;
// b = 2; // constant error
console.log('b: ', b);



let c = 1;
c = 2
console.log('c: ', c);
// console.log(c);
// let c = 3;


var d = 11000;
var d = 22000;

console.log('d: ', d);







// ===================================================



// Variable types
console.log(Utils.close())
console.log('\n',Utils.formatTitle('VARIABLES TYPES', { padSize: 100, includeBox: true }))
console.log(Utils.formatTitle('string', { padIndicator: '-', padSize: 100 }))
const name = 'jianshangwei';
console.log('name:', name);
console.log('name.length:',name.length);
console.log('name.toUpperCase:',name.toUpperCase());
console.log('name.toLowerCase:',name.toLowerCase());
console.log('name.charAt:',name.charAt(0));
console.log('name.substring(1, 4):',name.substring(1, 4));  // [0, 1, 2, 3, 4]
console.log('name.substr(-5):',name.substr(-5));       // deprecated
console.log('name.substr(5):',name.substr(5));        // deprecated
console.log('name.substr(1, 3):',name.substr(1, 3));     // deprecated [0, 1, 2, 3, 4, 5]

// wapper
const stringWapper = new String('jianshangwei')
console.log('stringWapper:', stringWapper);


console.log(Utils.formatTitle('number', { padIndicator: '-', padSize: 100 }))
const num = 123456789.01;
console.log('num.toFixed: ', num.toFixed(2) * 2);
console.log('num.toExponential: ', num.toExponential(2));
console.log('num.toPrecision: ', num.toPrecision(6));
console.log('num.toLocaleString: ', num.toLocaleString());
console.log('num.toString: ', num.toString());

console.log('parseInt: ', parseInt(num.toFixed(2)) + 2);
console.log('parseFloat: ', parseFloat(num.toFixed(2)) + 2);

// wapper
const numberWapper = new Number(1224)
console.log('numberWapper:', numberWapper);



console.log(Utils.formatTitle('boolean', { padIndicator: '-', padSize: 100 }))
const flag = true;
const flag2 = false;
console.log('flag: ', flag)
console.log('flag2: ', flag2)

// wapper
const booleanWapper = new Boolean(true)
console.log('booleanWapper: ', booleanWapper)




console.log(Utils.formatTitle('array', { padIndicator: '-', padSize: 100 }))
const array = [1, 2, 3, 4, 5];
console.log('flag2: ', flag2)

// wapper
const arrayWapper = new Array([1, 2, 3, 4, 5])
console.log('arrayWapper: ', booleanWapper)





console.log(Utils.close())
console.log('\n',Utils.formatTitle('CONTROL FLOW', { padSize: 100, includeBox: true }))
console.log(Utils.formatTitle('if else', { padIndicator: '-', padSize: 100 }))
if(true){
    console.log('if(true)')
}


if(false){
    console.log('if(true) else')
}else{
    console.log('if(false) else')
}



console.log(Utils.formatTitle('while', { padIndicator: '-', padSize: 100 }))
let i = 0;
while(i < 10){
    console.log('index-i : ', i);
    i++;
}

console.log(Utils.formatTitle('do while', { padIndicator: '-', padSize: 100 }))
let j = 0;
do{
    console.log('index:-j : ', j);
    j++;
}while(j < 10);


console.log(Utils.formatTitle('for', { padIndicator: '-', padSize: 100 }))
for(let i = 0; i < 10; i++) {
    console.log('index: ', i);
}


console.log(Utils.formatTitle('for in', { padIndicator: '-', padSize: 100 }))
const loopArr = [1, 2, 3, 4, 5];
for(let index in loopArr) {
    console.log('index: ', index);
}


console.log(Utils.formatTitle('for of', { padIndicator: '-', padSize: 100 }))
for(let item of loopArr) {
    console.log('item: ', item);
}


console.log(Utils.formatTitle('switch case', { padIndicator: '-', padSize: 100 }))
switch(2){
    case 1:{
        console.log('CASE 1');
        break;
    }

    default:{
        console.log('DEFAULT CASE')
    }
}


console.log(Utils.close())
console.log('\n',Utils.formatTitle('ERROR HANDLING', { padSize: 100, includeBox: true }))
console.log(Utils.formatTitle('try catch', { padIndicator: '-', padSize: 100 }))
try{
    throw new Error('test error')
}catch(e){
    console.error(e)
}


console.log(Utils.formatTitle('try catch finally', { padIndicator: '-', padSize: 100 }))
try{
    throw new Error('test error')
}catch(e){
    console.error(e)
}finally{
    console.log('finally')
}




console.log(Utils.close())
console.log('\n',Utils.formatTitle('OBJECT', { padSize: 100, includeBox: true }))
console.log(Utils.formatTitle('Person object', { padIndicator: '-', padSize: 100 }))
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get chineseAge() {
        return this.age + 1;
    }
}
const person = new Person('jianshangwei', 25);
console.log(person)
console.log(person.chineseAge)


// function as a object
console.log(Utils.formatTitle('function as a object', { padIndicator: '-', padSize: 100 }))
function FunctionPerson(name, age){
    this.name = name;
    this.age = age;
}
const n = new FunctionPerson(1, 2);
console.log(n);
console.log(FunctionPerson)



// map
console.log(Utils.formatTitle('Map', { padIndicator: '-', padSize: 100 }))
const map = {
    a: 1,
    b: 2
}
console.log(map)




console.log(Utils.close())
console.log('\n',Utils.formatTitle('FUNCTION', { padSize: 100, includeBox: true }))
function fun(){
    console.log('function fun(){}')
}

const anyonusFun = () => {
    console.log('anyonusFun fun(){}')
}
fun();
anyonusFun();



console.log(Utils.close())
console.log('\n',Utils.formatTitle('ADDITIONAL KNOWNEDGES', { padSize: 100, includeBox: true }))
console.log(Utils.formatTitle('SET and ARRAY', { padIndicator: '-', padSize: 100 }))
const set = new Set([1, 2, 3, 4]);
const arr = new Array(1, 2, 3, 4);
console.log(set);
console.log(arr);


console.log(Utils.formatTitle('typeof keyword', { padIndicator: '-', padSize: 100 }))
console.log('typeof `name` : ', typeof name, typeof name == 'string')
console.log('typeof `num` : ', typeof num)
console.log('typeof `flag` : ', typeof flag)
console.log('typeof `set` : ', typeof set)
console.log('typeof `fun` : ', typeof fun)
console.log('typeof `set` : ', typeof set)
console.log('typeof `arr` : ', typeof arr)


console.log(Utils.formatTitle('Array functions', { padIndicator: '-', padSize: 100 }))
console.log('arr.map() :', arr.map((item) => item * 2))
console.log('arr.flatMap() :', arr.flatMap((item) => [item, 'flat']));
console.log('arr.filter() :', arr.filter((item) => item == 2));
console.log('arr.every() :', arr.every((item) => item == 1));
console.log('arr.some() :', arr.some((item) => item == 1));
console.log('arr.find() :', arr.find((item) => item == 1));
console.log('arr.findIndex() :', arr.findIndex((item) => item == 1));
console.log('arr.concat() :', arr.concat([6, 7, 8, 9, 10]));
console.log('arr.join() :', arr.join('-'));
console.log('arr.slice() :', arr.slice(2, 3));
console.log('arr.shift() :', arr.shift(2));
console.log('arr.fill() :', arr.fill('-'));


// Object Destructuring
console.log(Utils.formatTitle('Object Destructuring', { padIndicator: '-', padSize: 100 }))
const currency = {
    name: 'Kyat', 
    symbol: 'MMK',
};

const { name: currencyName, symbol } = currency;
console.log(currency);
console.log(currencyName, symbol);




console.log('-'.repeat)