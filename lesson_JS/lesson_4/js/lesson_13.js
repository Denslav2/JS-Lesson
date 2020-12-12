"use strict"
//Условия
if (4 == 9) {
    console.log('ok!');
} else{
    console.log('error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
}else if (num > 100) {
    console.log('Too big');
} else {
    console.log('ok!');
}

//Тернарный аргумент

const num = 100;

(num === 100) ? console.log('Ok!') : console.log('error!');

//---

const arg = 110;

switch (arg) {
    case 50:
        console.log('Значение не верно');
        break;
    case 100:
        console.log('Значение не верно');
        break;
    case 110:
        console.log('Значение верно');
        break;
    default:
        console.log('Нет верного значения');
        break;            
}