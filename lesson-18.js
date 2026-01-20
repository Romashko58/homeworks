//task1
function getSum(number) {
   let result = 0;
   for (let i = 0; i <= number; i++) {
      result += i;
   }
   return result;
}
console.log(getSum(100));
//task2
function overpaymentByCredit(sum, percent) {
   const month = 60;
   const paymantMonth = sum / month;
   let res = 0;
   for (let i = 1; i <= month; i++) {
      res += sum * percent / 12;
      sum -= paymantMonth;
   }
   return res;
}
console.log(overpaymentByCredit(6000, 0.17))
//task3
function trimString(string, from, to) {
   let str = '';
   for (let i = 0; i < string.length; i++) {
      if (i >= from & i <= to) {
         str += string[i];
      }
   }
   return str;
}
console.log(trimString('string', 0, 4))
//task4
function getSumNumbers(num) {
   let sumNumbers = 0;
   const numString = num + '';
   for (let i = 0; i < numString.length; i++) {
      sumNumbers += Number(numString[i]);
   }
   return sumNumbers;
}
console.log(getSumNumbers(2021))
//task5
function getSum(a, b) {
   if (a === b) return a;
   let sumNum = 0;
   let minNum = Math.min(a, b);
   let maxNum = Math.max(a, b);
   for (let i = minNum; i <= maxNum; i++) {
      sumNum += i;
   }
   return sumNum;
}
console.log(getSum(-1, 5));
console.log(getSum(1, 1));
console.log(getSum(-2, 2));


