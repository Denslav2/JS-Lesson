"use strict";

const arr = [1, 12, 31, 44, 5];
arr.sort(compareNumm);
console.log(arr);

function compareNumm(a, b) {
    return a - b;
}

//arr.pop(); //удаляет послдений элемент массива
/*arr.push(6); //добавляет элемент в массив

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

/*for (let value of arr) {
    console.log(value);
}*/

/*arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});*/

/*const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));*/