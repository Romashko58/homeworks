import { createTodoItem, todoListContainer, allNumber, completedNumber } from "./ui.js";
import { todos } from "./app.js";

export function createDomElement(parameters) {
   const { tagName, atributes = {}, textContent = '' } = parameters;
   const element = document.createElement(tagName);
   if (atributes.className) {
      element.className = atributes.className;
   }
   if (textContent) {
      element.textContent = textContent;
   }
   return element;
}
export function render(arrTodo) {
   todoListContainer.innerHTML = '';
   const listFragment = document.createDocumentFragment();
   arrTodo.forEach(item => {
      const element = createTodoItem(item.text, item.date, item.id);
      if (item.checked) {
         element.querySelector('input').checked = true;
         element.querySelector('.text').classList.add('completed');
         element.classList.add('completedTodo');
      }
      listFragment.append(element);
   });

   todoListContainer.append(listFragment);
   allNumber.textContent = todos.length;
   completedNumber.textContent = todos.filter(t => t.checked).length;
}
