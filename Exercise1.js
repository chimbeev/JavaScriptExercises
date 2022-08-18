inputVar = prompt();
outVar = inputVar++;
console.log("После инкремента получилось " + outVar);
if (isNaN(outVar))  { console.log ("Упс, кажется вы ошиблись. Вы ввели строку! "); throw new Error('Quit'); }
console.log(" Определил тип введенных данных после сложения: " + typeof outVar);
if (typeof outVar=='number') {
    console.log("Введено число number");
    (outVar % 2 == 0) ? console.log("четное число") : console.log("Нечетное число");
    }
else
    {console.log ("Упс, кажется вы ошиблись")};

