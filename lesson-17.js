//zad1
const a = 'true';
const b = false;
const c = 17;
const d = undefined;
const e = null;
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));
console.log(typeof (d));
console.log(typeof (e));
//zad2
const height = 15;
const width = 2;
if (height > width) {
   console.log(height);
}
else {
   console.log(width);
}
//zad3
for (let i = 1; i < 20; i++) {
   if (i % 3 === 0) {
      console.log(i);
   }
}
//zad4
const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;
const shouldGoToWork = pen && documents && pen && (apple || orange);
console.log(shouldGoToWork);
//zad5
const chislo = prompt('Введите число');
if (chislo % 5 === 0 && chislo % 3 === 0) {
   alert('FizBuz');
}
else if (chislo % 5 === 0) {
   alert('Fiz');
}
else if (chislo % 3 === 0) {
   alert('Buz');
}
else {
   alert(':(');
}
//zad6
const age = prompt('Ваш возраст');
if (age > 18) {
   alert('попей пивка');
}
else if (age >= 16 && age <= 18) {
   alert('Можешь выкурить сигаретку, только маме не говори');
}
else {
   alert('пей колу');
}

//zad7
let sideOfTheWorld = prompt('Введите сторону света, в который вы хотели побывать?');
switch (sideOfTheWorld) {
   case 'юг':
      console.log('на юг пойдешь счастье найдешь');
      break;
   case 'север':
      console.log('на север пойдешь много денег найдешь');
      break;
   case 'запад':
      console.log('на запад пойдешь верного друга найдешь');
      break;
   case 'восток':
      console.log('на восток пойдешь разработчиком станешь');
      break;
   default:
      console.log("попробуйте ещё раз");
}
//zad3(advanced level)
let steps = 6;
for (let i = 1; i <= steps; i++) {
   let step = "#".repeat(i);
   console.log(step);
}
