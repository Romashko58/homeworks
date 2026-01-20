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
//task6
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const allNumbers = evenNumbers.concat(oddNumbers);
const index = allNumbers.indexOf(8);
console.log(index);
//task7
const binary = [0, 0, 0, 0]
const binaryString = binary.join('1');
console.log(binaryString);
//task1(advanced level)
function polindrom(word) {
   let arr = []
   for (let i = 0; i < word.length; i++) {
      arr.push(word[i]);
   }
   const reversArr = arr.slice().reverse();
   if (JSON.stringify(arr) === JSON.stringify(reversArr)) {
      return true;
   }
   else {
      return false;
   }

}
console.log(polindrom('топот'))
