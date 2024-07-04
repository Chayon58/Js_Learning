/*
*Literals Object
*/

const mobileModel = {
    brand : 'samsung',
    model : 's24 Ultra',
    processor : 'Snapdragon Gen3',
    camera : ['200mp', '12mp', '12mp'],
    hasZoomcamera : true,
    'selfie camera MP': 12,
    brandModel: function() {
        return `Mobile Brand is ${this.brand} and model is ${this.model}`;
    },
};

mobileModel.model = 's25 Ultra';
console.log(mobileModel.model);
Object.freeze(mobileModel);
console.log(mobileModel['brand']);
console.log(mobileModel['selfie camera MP']);
console.log(mobileModel. brandModel);
console.log(mobileModel. brandModel());
console.log(mobileModel.hasOwnProperty('camera'));
console.log(Object.values(mobileModel)); //to check all properties values
console.log(Object.keys(mobileModel)); //to check all properties

//===============================================================================

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};
const obj2 = {
    p: 1,
    q: 2,
    r: 3,
};
const obj3 = {
    x: 1,
    y: 2,
    z: 3,
};

//const objFinal = Object.assign({}, obj1, obj2, obj3); //Best
//const objFinal = {obj1,obj2};
const objFinal = {...obj1, ...obj2};
console.log(objFinal);

//===============================================================================
/*
*Constructor Object
*/
// function Person(){
//     this.firstName = 'Chayon',
//     this.lastName = 'Biswas';
// }
// const person1 = new Person();
// console.log(person1);
function Person(first,last){
    this.firstName = first,
    this.lastName = last;
}
const person1 = new Person('Chayon','Biswas');
const person2 = new Person('Anil','Biswas');
console.log(person1);
console.log(person2);



