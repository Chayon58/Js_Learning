// JavaScript Variable
let FirstName;


let fruits = 'Orange'
console.log(`${fruits} is may favourite, ${fruits} I like to eat`)

/*
*Var Variable
*we can re declare/re assign
*Global scoped
*var is hosted
*/

var a = 10;
var a = 20; //re declare
a = 'Bangladesh'; //re assign
console.log(a);

/*
*let Variable
!we cannot re declare
*we can re assign
?block scoped
!let is not hosted
*/

let b = 10;
b = 11;
{
    console.log(b);
}

/*
*const Variable
!we can not re declare
*we can not re assign
?block scoped
!const is not hosted
*/

const c = 10;
{
    const d = 17;
    console.log(c);
    console.log(d);
}
const person = {
    firstName:'Chayon',
    age: 23,
};
person.country = 'Bangladesh';
person.age= 26;

console.log(person);
