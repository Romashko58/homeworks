function getTodos() {
   fetch('https://jsonplaceholder.typicode.com/todos')
      .then(responce => responce.json())
      .then(data => printTodos(data));
}
const divWrapper = document.getElementById('wrapper');
function printTodos(todos) {
   const ul = document.createElement('ul');
   todos.forEach(element => {
      const li = document.createElement('li');
      li.textContent = `${element.id} ${element.title}.`;
      ul.append(li);
   });
   divWrapper.append(ul);
}
getTodos();
