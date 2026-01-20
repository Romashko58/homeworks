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

