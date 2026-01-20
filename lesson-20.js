//task1
const colors = ['red', 'green', 'blue']
console.log(colors.length);
//task2
const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length - 1]);
//task3
const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, numbers.length);
console.log(numbers);
const numbers1 = [5, 43, 63, 23, 90];
numbers1.length = 0;
console.log(numbers1);
//task4
const students = ['Polina', 'Dasha', 'Masha']
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students);
//task5
const cats = ['Gachito', 'Tom', 'Batman']
for (let i = 0; i < cats.length; i++) {
   console.log(cats[i]);
}
for (const cat of cats) {
   console.log(cat);
}
