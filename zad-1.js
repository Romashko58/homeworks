//zad1
let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);
//zad2
let secInMin = 60;
let minInHour = 60;
let hourInDay = 24;
let dayInYear = 365;
let myAge = 55;
let myAgeInSeconds = myAge * dayInYear * hourInDay * minInHour * secInMin;
console.log(myAgeInSeconds);
//zad3
let count = 42;
let userName = '42';
let countString = count + '';
let countString2 = count.toString();
console.log(countString, typeof (countString));
console.log(countString2, typeof (countString2));
let userNameNumber = +userName;
let userNameNumber2 = parseInt(userName);
console.log(userNameNumber, typeof (userNameNumber));
console.log(userNameNumber2, typeof (userNameNumber2));

