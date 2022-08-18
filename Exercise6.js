//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
//Проверить, все ли элементы в массиве одинаковые.

function ifMirror(inputArray) {
    let flagMirror = false;
    for (let i=0; i < inputArray.length - 1; i++) {
        if (inputArray[i] == inputArray[i+1]) flagMirror = true; else flagMirror = false;
        
    } 
    return flagMirror;
}
let inputArray1 = [1, 2, 4, 7, 'gogo', 'for', 'one', 56, 3, 1, 'for'];
let inputArray2 = [1, 1, 1, 1];
let inputArray3 = [5, 'y', 8, 1];
let flagMirror = false; //признак одинаковости текущего члена массива и предыдущего


if (ifMirror(inputArray1) == true) console.log("Все элементы массива одинаковые"); else console.log("Есть неодинаковые элементы");
if (ifMirror(inputArray2) == true) console.log("Все элементы массива одинаковые"); else console.log("Есть неодинаковые элементы");
if (ifMirror(inputArray3) == true) console.log("Все элементы массива одинаковые"); else console.log("Есть неодинаковые элементы");
