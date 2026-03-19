const users = [
   {
      name: "Harry Felton",
      phone: "(09) 897 33 33",
      email: "felton@gmail.com",
      animals: ["cat"],
      cars: ["bmw"],
      hasChildren: false,
      hasEducation: true
   },
   {
      name: "May Sender",
      phone: "(09) 117 33 33",
      email: "sender22@gmail.com",
      hasChildren: true,
      hasEducation: true
   },
   {
      name: "Henry Ford",
      phone: "(09) 999 93 23",
      email: "ford0@gmail.com",
      cars: ["bmw", "audi"],
      hasChildren: true,
      hasEducation: false
   }
]
//1
const string: string = users.map(item => item.name).join(', ');
//2
const allCars = users.reduce<number>((acc, item) => {
   acc += (item.cars ? item.cars.length : 0);
   return acc;
}, 0)
//3
function getEducatedUsers<T extends { hasEducation: boolean }>(users: T[]): T[] {
   const hasEducationArr = users.filter(user => user.hasEducation)
   return hasEducationArr;
}
//4
function getUsersWithAnimals<T extends { animals?: string[] }>(users: T[]): T[] {
   const hasAnimal = users.filter(user => {
      return user.animals && user.animals.length > 0;
   })
   return hasAnimal;
}
//5
function getStringCars<T extends { cars?: string[] }>(users: T[]): string {
   const carsStr: string = users.map(item => item.cars || []).flat().join(', ');
   return carsStr;
}