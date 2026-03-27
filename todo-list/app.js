import { todoListContainer, btnAdd, inputEnterTodo, btnDeleteAll, btnDeleteLast, btnShowAll, btnShowCompleted, inputSearchTodo } from "./ui.js";
import { storage } from "./storage.js";
import { render } from "./dom.utils.js";
export let todos = storage.get();

btnAdd.addEventListener('click', () => {
   const text = inputEnterTodo.value;
   if (!text) return;
   todos.push({
      id: Date.now(),
      text,
      date: new Date().toLocaleDateString(),
      checked: false,
   }
   )
   render(todos);
   storage.set(todos);
   inputEnterTodo.value = '';
})

btnDeleteAll.addEventListener('click', () => {
   todos = [];
   render(todos);
   storage.set(todos);
})

todoListContainer.addEventListener('click', (e) => {
   if (e.target.classList.contains('close-btn')) {
      const todoBlock = e.target.closest('.todoElement');
      const deleteId = todoBlock.dataset.id;
      todos = todos.filter(todo => todo.id != deleteId)
      render(todos);
      storage.set(todos);
   }
});

todoListContainer.addEventListener('change', (e) => {
   if (e.target.type === 'checkbox') {
      const todoBlock = e.target.closest('.todoElement');
      const changeId = todoBlock.dataset.id;
      todos.forEach(todo => {
         if (todo.id == changeId) {
            todo.checked = e.target.checked;

         }
      });

      render(todos);
      storage.set(todos);
   }
});

btnDeleteLast.addEventListener('click', () => {
   todos.pop();
   render(todos);
   storage.set(todos);
});

btnShowAll.addEventListener('click', () => {
   render(todos);
});

btnShowCompleted.addEventListener('click', () => {
   const showCompletedTodo = todos.filter(todo => todo.checked === true)
   render(showCompletedTodo);
});

let searchTodo = '';
inputSearchTodo.addEventListener('input', () => {
   searchTodo = inputSearchTodo.value.toLowerCase();
   const searchArr = todos.filter(todo => { return todo.text.toLowerCase().includes(searchTodo) });
   render(searchArr);

});
render(todos);