// Date

const data1 = new Date();
console.log(data1);

const date2 = new Date('March 06 2019 09:30');
console.log(date2);

const date3 = new Date(2022,02,06,9,30);
console.log(date3);

console.log(date3.getDate());
console.log(date3.getDay());

date3.setFullYear(2030);
console.log(date3);

console.log(date2.toDateString());

console.log(date2.toTimeString());

console.log(date2.toISOString());