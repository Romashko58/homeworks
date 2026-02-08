function createElementTodo(tagName, atributes = {}, textContent = '') {
   const element = document.createElement(tagName);
   if (atributes.className) {
      element.className = atributes.className;
   }
   if (textContent) {
      element.textContent = textContent;
   }
   return element;
}


const divRoot = document.getElementById('root');
const fragment = document.createDocumentFragment();
const managementElements = createElementTodo('div', { className: 'enter' });
const btnDeleteAll = createElementTodo('button', { className: 'button' }, 'Delete All');
const btnDeleteLast = createElementTodo('button', { className: 'button' }, 'Delete Last');
const inputEnterTodo = createElementTodo('input', { className: 'input' },)
inputEnterTodo.placeholder = 'Enter todo ...';
const btnAdd = createElementTodo('button', { className: 'button' }, 'Add');
managementElements.append(btnDeleteAll, btnDeleteLast, inputEnterTodo, btnAdd);

const filterElements = createElementTodo('div', { className: 'show' });
const todoAll = createElementTodo('span', { className: 'spanStats' }, 'All: ');
const allNumber = createElementTodo('span', {}, '0');
todoAll.append(allNumber);

const todoCompleted = createElementTodo('span', { className: 'spanStats' }, 'Completed: ');
const completedNumber = createElementTodo('span', {}, '0');
todoCompleted.append(completedNumber);
const btnShowAll = createElementTodo('button', { className: 'button show-btn' }, 'Show All');
const btnShowCompleted = createElementTodo('button', { className: 'button show-btn' }, 'Show Completed');
const inputSearchTodo = createElementTodo('input', { className: 'input search-input' });
inputSearchTodo.placeholder = 'Search ...';
filterElements.append(todoAll, todoCompleted, btnShowAll, btnShowCompleted, inputSearchTodo);



function createTodoItem(textContent, dateContent, idContent) {
   const todoElement = createElementTodo('div', { className: 'todoElement' });
   const label = createElementTodo('label', { className: 'custom-checkbox' });
   const checkbox = createElementTodo('input', {});
   checkbox.type = 'checkbox';
   const checkmark = createElementTodo('span', { className: 'checkmark' });
   label.append(checkbox, checkmark);

   const todoText = createElementTodo('div', { className: 'todoText' });
   const text = createElementTodo('p', { className: 'text' }, textContent);
   todoText.append(text);
   const div = createElementTodo('div', { className: 'closeDiv' });
   const closeBtn = createElementTodo('button', { className: 'button close-btn' }, 'X');
   const date = createElementTodo('p', { className: 'date' }, dateContent);
   todoElement.dataset.id = idContent;
   div.append(closeBtn, date);
   todoElement.append(label, todoText, div);
   return todoElement;
}

const todoListContainer = createElementTodo('div', { className: 'todoListContainer' });
fragment.append(managementElements, filterElements, todoListContainer);
divRoot.append(fragment);
