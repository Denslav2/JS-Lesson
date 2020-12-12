"use strict"

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Привет мир!");
console.log(num);

function calc(a, b) {
    return (a * b);
}

console.log(calc(4, 3));
console.log(calc(7, 9));
console.log(calc(13, 18));

function ret () {
    let num = 50;


    return num;
}

const anotherNum = ret();
console.log(anotherNum);


//Функциональное выражение
const logger = function() {
    console.log("Привет!");
};

logger();

//Стрелочная функция
const calc = (a, b) => {
    console.log('1');
    return a + b;
};
console.log(calc);