class Developer {
   constructor(name) {
      this.name = name;
   }
   startWork() {
      return `${this.name} start work`
   }
   endWork() {
      return `${this.name} end work`
   }

}
class Frontend extends Developer {
   constructor(name) {
      super();
      this.name = name;
   }
   buildWebSite(website) {
      return `${this.name} start build website ${website}`
   }
}
class Backend extends Developer {
   constructor(name) {
      super();
      this.name = name;
   }
   buildServer(website) {
      return `${this.name} start build server`
   }
}
const firstDeveloper = new Frontend('John');
const secondDeveloper = new Backend('Nastya');
console.log(firstDeveloper.startWork());
console.log(firstDeveloper.buildWebSite('Chrome'));
console.log(firstDeveloper.endWork());
console.log(secondDeveloper.startWork());
console.log(secondDeveloper.buildServer());
console.log(secondDeveloper.endWork());