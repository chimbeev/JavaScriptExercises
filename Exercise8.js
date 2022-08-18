//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.
let inputMap = new Map([
    ["Daewoo", "Matiz"],
    ["Toyota", "Corolla"],
    ["Subaru", "Outback"],
    ["Mitsubishi", "Outlander"]
]);
for (let producer of inputMap.keys()) 
{ 
     { console.log (`Ключ - ${producer}, значение - ${inputMap.get(producer)}`)};
  
};
