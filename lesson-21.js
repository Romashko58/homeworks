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
//task5
const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const numberFind = numbers2.find(num => num % 2 === 0);
console.log(numberFind);

const numberFind1 = numbers2.find(function (num) {
   return num % 2 === 0;
});
//task1(advanced level)
function Student(name, salary, rate) {
   this.name = name;
   this.salary = salary;
   this.rate = rate;

   this.getCreditAmount = function () {
      switch (this.rate) {
         case 'A':
            return this.salary * 12;
         case 'B':
            return this.salary * 9;
         case 'C':
            return this.salary * 6;
         case 'D':
            return 0;
         default:
            return 0;
      }
   };
}
const student1 = new Student('Ivan', 1000, 'A');
const student2 = new Student('Svetlana', 500, 'D');
const student3 = new Student('Sasha', 150, 'C');
const student4 = new Student('Nastya', 1200, 'B');
const student5 = new Student('Pavel', 800, 'D');
const students = [student1, student2, student3, student4, student5];
function getTotalCreditAmount(students) {
   return students.reduce((total, student) => {
      return total + student.getCreditAmount();
   }, 0);
}
const totalCredit = getTotalCreditAmount(students);
console.log(totalCredit);