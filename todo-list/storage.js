
const todoKey = 'todos';
export const storage = {
   get() {
      return JSON.parse(localStorage.getItem(todoKey)) || [];
   },
   set(todos) {
      const json = JSON.stringify(todos);
      localStorage.setItem(todoKey, json);
   }
}