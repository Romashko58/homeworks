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
   constructor(name, website) {
      super(name);
      this.website = website;
   }
   buildWebSite() {
      return `${this.name} start build website ${this.website}`
   }
}
class Backend extends Developer {
   constructor(name) {
      super(name);
   }
   buildServer() {
      return `${this.name} start build server`
   }
}
const firstDeveloper = new Frontend('John', 'Chrome');
const secondDeveloper = new Backend('Nastya');
console.log(firstDeveloper.startWork());
console.log(firstDeveloper.buildWebSite());
console.log(firstDeveloper.endWork());
console.log(secondDeveloper.startWork());
console.log(secondDeveloper.buildServer());
console.log(secondDeveloper.endWork());