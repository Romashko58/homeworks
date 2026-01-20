//task1
const user = {
   firstName: 'Egor',
   lastName: 'Pupkin'
};
console.log(user);
delete user.firstName;
delete user.lastName;
console.log(user);
//task2
const person = {
   name: 'Elena',
   email: 'elena@gmail.com'
};
if ('name' in person) {
   console.log(true);
}

//task3
const student = {
   name: 'John',
   age: 19,
   isHappy: true
}
let keyStudent = '';
let valueStudent = '';
for (const key in student) {
   keyStudent += key + ' ';
   valueStudent += student[key] + ' ';
}
console.log(keyStudent);
console.log(valueStudent);
