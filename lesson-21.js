//task1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(function (item) {
   console.log(item);
});
fibonacci.forEach(item => {
   console.log(item);
});
//task2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const newUsers = users.map((element, index) => `member ${index + 1}: ${element}`);
console.log(newUsers);

const newUsers2 = users.map(function (element, index) {
   return `member ${index + 1}: ${element}`;

});
console.log(newUsers2);
//task3
const numbers1 = [7, -4, 32, -90, 54, 32, -21];
const newNumbers1 = numbers1.filter(num => num > 0);
console.log(newNumbers1);

const newNumbers2 = numbers1.filter(function (num) {
   return num > 0;
});
console.log(newNumbers2);
//task4
const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const result = fibonacci2.reduce((acc, number) => acc + number, 0);
console.log(result);

const result1 = fibonacci2.reduce(function (acc, number) {
   return acc + number;
}, 0);
console.log(result1);
