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
for (const key in student) {
   console.log(key + ': ' + student[key]);
}
//task4
const colors = {
   'ru pum pu ru rum': {
      red: 'красный',
      green: 'зеленый',
      blue: 'синий'
   },
}
console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);
//task5
let totalSalary = 0;
let col = 0;
const salaries = {
   andrey: 500,
   sveta: 413,
   anton: 987,
   igor: 664,
   alexandra: 199
}

for (const key in salaries) {
   col++;
   totalSalary += salaries[key];
}
const averageSalary = totalSalary / col;
console.log(averageSalary);
//task6
const login = prompt('Введите логин');
const password = prompt('Введите пароль');
const obj = {
   login: login,
   password: password,
};
const res = confirm(`Если данные верны, нажмите "Ок". 
   Логин: ${obj.login}
   Пароль: ${obj.password}`);
if (res) {
   console.log('Добро пожаловать');
}
//task2(advanced level)
let student1 = {
   name: 'Polina',
   age: 27,
}
let student2 = {
   name: 'Polina',
   age: 27,
}
console.log(JSON.stringify(student1) === JSON.stringify(student2));
//task3(advanced level)
const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   },
}
let birdName;
if (animals.bird) {
   birdName = animals.bird.name;
}
console.log(birdName);
