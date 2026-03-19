// 1. Создать строку из названий предметов написанных через запятую
// 2. Подсчитать общее количество студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех предметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на
// факультете от большего к меньшему

const subjects = {
   mathematics: {
      students: 200,
      teachers: 6
   },
   biology: {
      students: 120,
      teachers: 6
   },
   geography: {
      students: 60,
      teachers: 2
   },
   chemistry: {
      students: 100,
      teachers: 3
   }
};

const arrSubjectsObj = [];
const arrSubjects = [];
let count = 0;
let students = 0;
let teachers = 0;
const keys = Object.keys(subjects).length;
for (const key in subjects) {
   count++
   students += subjects[key].students;
   teachers += subjects[key].teachers;
   arrSubjectsObj.push(subjects[key]);
   arrSubjects.push(key);
}
const string = arrSubjects.join(', ')
console.log(string);
console.log(students);
console.log(teachers);
console.log(students / count);
console.log(arrSubjectsObj);
console.log(arrSubjects);

const sortedSubjects = Object.keys(subjects).sort((a, b) => {
   return subjects[b].teachers - subjects[a].teachers;
});
console.log(sortedSubjects); 