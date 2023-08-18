/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
let string1='bilal';
let string2='rehan';
console.log(string1==string2)
console.log(string1!=string2)
let country1='PAKISTAN'
console.log(country1.toLowerCase()=='pakistan')
console.log(country1.toLowerCase()!='pakistan')
let number1=7;
let number2=8;
console.log(number1==number2)
console.log(number1!=number2)
console.log(number1<number2)
console.log(number1>number2)
console.log(number1>=number2)
console.log(number1<=number2)
console.log(number1>number2&&number2<number1)
console.log(number1<number2&&number2>number1)
console.log(number1>number2||number2<number1)
console.log(number1<number2||number2>number1)