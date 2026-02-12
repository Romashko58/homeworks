function createDomElement(tagName, atributes = {}, textContent = '') {
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
const managementElements = createDomElement('div', { className: 'enter' });
const btnDeleteAll = createDomElement('button', { className: 'button' }, 'Delete All');
const btnDeleteLast = createDomElement('button', { className: 'button' }, 'Delete Last');
const inputEnterTodo = createDomElement('input', { className: 'input' },)
inputEnterTodo.placeholder = 'Enter todo ...';
const btnAdd = createDomElement('button', { className: 'button' }, 'Add');
managementElements.append(btnDeleteAll, btnDeleteLast, inputEnterTodo, btnAdd);

const filterElements = createDomElement('div', { className: 'show' });
const todoAll = createDomElement('span', { className: 'spanStats' }, 'All: ');
const allNumber = createDomElement('span', {}, '0');
todoAll.append(allNumber);

const todoCompleted = createDomElement('span', { className: 'spanStats' }, 'Completed: ');
const completedNumber = createDomElement('span', {}, '0');
todoCompleted.append(completedNumber);
const btnShowAll = createDomElement('button', { className: 'button show-btn' }, 'Show All');
const btnShowCompleted = createDomElement('button', { className: 'button show-btn' }, 'Show Completed');
const inputSearchTodo = createDomElement('input', { className: 'input search-input' });
inputSearchTodo.placeholder = 'Search ...';
filterElements.append(todoAll, todoCompleted, btnShowAll, btnShowCompleted, inputSearchTodo);



function createTodoItem(textContent, dateContent, idContent) {
   const todoElement = createDomElement('div', { className: 'todoElement' });
   const label = createDomElement('label', { className: 'custom-checkbox' });
   const checkbox = createDomElement('input', {});
   checkbox.type = 'checkbox';
   const checkmark = createDomElement('span', { className: 'checkmark' });
   label.append(checkbox, checkmark);

   const todoText = createDomElement('div', { className: 'todoText' });
   const text = createDomElement('p', { className: 'text' }, textContent);
   todoText.append(text);
   const div = createDomElement('div', { className: 'closeDiv' });
   const closeBtn = createDomElement('button', { className: 'button close-btn' }, 'X');
   const date = createDomElement('p', { className: 'date' }, dateContent);
   todoElement.dataset.id = idContent;
   div.append(closeBtn, date);
   todoElement.append(label, todoText, div);
   return todoElement;
}

const todoListContainer = createElementTodo('div', { className: 'todoListContainer' });
fragment.append(managementElements, filterElements, todoListContainer);
divRoot.append(fragment);

let filterTodo = 'all';
let todos = [];

function render() {
   todoListContainer.innerHTML = '';

   let arrTodo = todos;
   if (filterTodo === 'completed') {
      arrTodo = todos.filter(todo => todo.checked === true)
   }
   if (filterTodo === 'search') {
      arrTodo = todos.filter(todo => { return todo.text.toLowerCase().includes(searchTodo) });
   }
   arrTodo.forEach(item => {
      const element = createTodoItem(item.text, item.date, item.id);
      if (item.checked) {
         element.querySelector('input').checked = true;
         element.querySelector('.text').classList.add('completed');
         element.classList.add('completedTodo');
      }
      todoListContainer.append(element);
   });


   allNumber.textContent = todos.length;
   completedNumber.textContent = todos.filter(t => t.checked).length;

}

let maxId = 0;
for (let i = 0; i < todos.length; i++) {
   if (todos[i].id > maxId) {
      maxId = todos[i].id;
   }
}

let id = maxId + 1;
btnAdd.addEventListener('click', () => {

   const text = inputEnterTodo.value;
   if (!text) return;
   todos.push({
      id: id++,
      text,
      date: new Date().toLocaleDateString(),
      checked: false,

   }
   )
   render();
   inputEnterTodo.value = '';

})