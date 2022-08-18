/*const str = 'Hello!';
let strOut ='';
debugger
length = str.length;
let i=length;
for (i-1; i>=0; i--) {
    strOut=strOut + str[i];
    debugger
} 
console.log(strOut);
*/

const str = 'Hello!';
let strArray = str.split('');
let strArrayReverse = strArray.reverse('');
strOut = strArrayReverse.join('');
console.log(strOut);
