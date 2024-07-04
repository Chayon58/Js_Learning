function myFunction(){
    console.log('Hello Function');
}
myFunction();

function myFunction(fullName){
    console.log('Hello '+ fullName);
}
myFunction('Chandra');
myFunction('Chayon');

function myFunction (fullName, age, date0fbirth=1994){
    console.log(fullName + ' I am ' + age + ' my Date of Birth is ' + date0fbirth);
}
myFunction('Chandra', 23, 2002);
myFunction('Chayon', 22, true);

function isSubscribed(){
    console.log('Subscribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);

//self invoke or Automatic Function

(function(){
    console.log('I am self-invoking Function');
})();

let maths = function(x,y) {
    console.log('Testing I am working or not');
    return x*y;
}
console.log(maths(3,4));
console.log(maths(4,4));

let numbers = [4,5,6,7]
let sqNumbers = numbers.map(function(number) {
    return number * number;
});
console.log(sqNumbers);


/*let add = function(x,y){
    return x+y;
};
console.log(add(5,6));
*/

//Arrow Function
let add = (x,y) => x+y;

console.log(add(5,6));

//Nested Function

function greet(firstName){
    function sayHello() {
        alert('Hello ' + firstName)
    }
    return sayHello();
}
greet ('Chayon');