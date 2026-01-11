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
//zad4
let a = 1;
let b = 2;
let c = 'белых медведей';
console.log(a.toString() + b.toString() + ' ' + c)
//zad5
let firstWord = 'доступ';
let secondWord = 'морпех';
let thirdWord = 'наледь';
let fourthWord = 'попрек';
let fifthWord = 'рубило';
let lengthWords = firstWord.length + secondWord.length + thirdWord.length + fourthWord.length + fifthWord.length;
console.log(lengthWords);
//zad6
let num = 77;
let und;
let str = 'ggg';
console.log(`Variable: num have type: ${typeof num}`);
console.log(`Variable: und have type: ${typeof und}`);
console.log(`Variable: str have type: ${typeof str}`);
//zad7
let name = prompt('Ваше имя');
let age = prompt('Ваш возраст');
console.log(name);
console.log(age);
//zad2(advanced level)
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);
