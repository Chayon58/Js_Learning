const language =  ['Html', 'Css','JavaScript','PHP'];
language[3] =  'Tailwind Css';
language[4] = 'vue.js';
language.pop(); //delete last item
language.push('Angular.js'); //add last item
language.unshift('Basic Computing'); //add first item
language.shift(); //delete first item
language.splice(2,0,'info','info2');
console.log(language.toString());
console.log(language.join('*'));
console.log(language.length);
console.log(language[language.length-1]); //show last item
console.log(language[0]);
console.log(language);

const person = [];
person['firstName'] = 'Chayon';
person['lastName'] = 'Chandra';
person[2] = 35;
console.log(person.length);
console.log(person);
console.log(person[2]);

const x = [1,2,3,4];
const y = [1,2,3,4];
const p = [2,3,4];
const z = x.concat(y,p);
console.log(z);

const a = [[1,2,3],[2,3,4],[4,5,6]]
console.log(a);
console.log(a.flat());