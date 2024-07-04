const myDate = new Date;
console.log(myDate);
console.log(myDate.toString());
console.log(typeof myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString('default',{
    weekday : 'long'
})
);
console.log(myDate.toLocaleString('default',{
    weekday : 'short'
})
);

let updateDate = new Date(2024,3,5);
console.log(updateDate);
let updateDate2 = new Date(2024,3,5,11,34,24,0);
console.log(updateDate2);
let updateDate3 = new Date('01-15-2002');
let myTime = Date.now();
console.log(myTime);

