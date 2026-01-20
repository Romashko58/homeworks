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
let averageSalary = 0;
const salaries = {
   andrey: 500,
   sveta: 413,
   anton: 987,
   igor: 664,
   alexandra: 199
}
for (const key in salaries) {
   averageSalary += salaries[key];
}
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
