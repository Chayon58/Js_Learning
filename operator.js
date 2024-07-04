/*
 * Arithmetic Operator
 */
let a = 10;
let b = 20;
let c = a+b;
console.log(c);

let x = 10;
++x; //Best Practice
console.log(x);

let y = 100;
--y;
console.log(y);

//============================================================

/*
*Comparison Operator
*/
let p = '5';
let q = 5;
console.log(p==q);
console.log(p===q); //Best Practice
console.log(p!==q); //Best Practice
console.log(p<q);
console.log(p>q);
console.log(p<=q);
console.log(p>=q);

//============================================================

/*
 * Logical Operator
 */
// && ---> AND
// || ---> OR
// !(p<q) ---> NOT

//============================================================

/*
 * Assignment operator
 */
let j = 20;
let k = 30;
j+=k;
console.log(j);

j-=k;
console.log(j);

j*=k;
console.log(j);

j/=k;
console.log(j);

//============================================================

/*
 * Conditional(Ternary) Operator
 */
let m = 80;
let n = 50;
let t = m>n ? 'True':'False';
console.log(t);

//============================================================