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

const todoListContainer = createDomElement('div', { className: 'todoListContainer' });
fragment.append(managementElements, filterElements, todoListContainer);
divRoot.append(fragment);

let todos = [];

function render(arrTodo) {
   todoListContainer.innerHTML = '';
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
   inputEnterTodo.value = '';

})


btnDeleteAll.addEventListener('click', () => {
   todos = [];
   render(todos);
})

todoListContainer.addEventListener('click', (e) => {
   if (e.target.classList.contains('close-btn')) {
      const todoBlock = e.target.closest('.todoElement');
      const deleteId = todoBlock.dataset.id;
      todos = todos.filter(todo => todo.id != deleteId)
      render(todos);
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
   }
});

btnDeleteLast.addEventListener('click', () => {
   todos.pop();
   render(todos);
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
