let firstName = 'Chandra';
firstName = 'Chayon';
let fullName = `My name is ${firstName}`;
console.log(fullName);
console.log(typeof fullName);

let age = 30;
let age2 = 35;
let calculation =  age + age2 + firstName;
console.log(calculation);

let age3 = 30;
let age4 = 35;
let calculations =  age3 + age4 + firstName+ age3+ age4;
console.log(calculations);

let numBig = 999999999999999999n;
let numBig2 = 999999999999999999n;
console.log(numBig/numBig2);

let numBig3 = 9n;
let numBig4 = BigInt(5);
console.log(numBig3*numBig4);

let fruits = ['Apple', 'Lemon', 'Orange'];
console.log(fruits);
fruits[1]= 'Mango';
console.log(fruits);

let studets ={
    fullName : 'Chayon Chandra Biswas',
    age : 23,
    DOB : 2002,
}
console.log(studets);
console.log(typeof studets);


