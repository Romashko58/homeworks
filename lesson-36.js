var users = [
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
];
//1
var string = users.map(function (item) { return item.name; }).join(', ');
//2
var allCars = users.reduce(function (acc, item) {
    acc += (item.cars ? item.cars.length : 0);
    return acc;
}, 0);
//3
function getEducatedUsers(users) {
    var hasEducationArr = users.filter(function (user) { return user.hasEducation; });
    return hasEducationArr;
}
//4
function getUsersWithAnimals(users) {
    var hasAnimal = users.filter(function (user) {
        return user.animals && user.animals.length > 0;
    });
    return hasAnimal;
}
//5
function getStringCars(users) {
    var carsStr = users.map(function (item) { return item.cars || []; }).flat().join(', ');
    return carsStr;
}
