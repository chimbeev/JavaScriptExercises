//Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
let inputArray = [1, 2, 3, 'rotor', 'mango', 7, 88, 99];
let lengthArray = inputArray.length;
console.log("кол-во элементов массива " + lengthArray);
let result = inputArray.map(function(item, index, array) {
    debugger
    return console.log(item)
});