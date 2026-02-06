const divRoot = document.getElementById('root');
const fragment = document.createDocumentFragment();
const divEnter = document.createElement('div');
divEnter.classList.add('enter');

const btnDeleteAll = document.createElement('button');
btnDeleteAll.classList.add('button');
btnDeleteAll.textContent = 'Delete All';

const btnDeleteLast = document.createElement('button');
btnDeleteLast.classList.add('button');
btnDeleteLast.textContent = 'Delete Last';

const inputEnterTodo = document.createElement('input');
inputEnterTodo.classList.add('input');
inputEnterTodo.placeholder = 'Enter todo ...';

const btnAdd = document.createElement('button');
btnAdd.classList.add('button');
btnAdd.textContent = 'Add';
divEnter.append(btnDeleteAll, btnDeleteLast, inputEnterTodo, btnAdd);

const divShow = document.createElement('div');
divShow.classList.add('show');

const todoAll = document.createElement('span');
todoAll.classList.add('spanStats');
todoAll.textContent = 'All: '
const allNumber = document.createElement('span');
allNumber.textContent = '0';
todoAll.append(allNumber);

const todoCompleted = document.createElement('span');
todoCompleted.classList.add('spanStats');
todoCompleted.textContent = 'Completed: '
const completedNumber = document.createElement('span');
completedNumber.textContent = '0';
todoCompleted.append(completedNumber);

const btnShowAll = document.createElement('button');
btnShowAll.classList.add('button', 'show-btn');
btnShowAll.textContent = 'Show All';

const btnShowCompleted = document.createElement('button');
btnShowCompleted.classList.add('button', 'show-btn');
btnShowCompleted.textContent = 'Show Completed';

const inputSearchTodo = document.createElement('input');
inputSearchTodo.classList.add('input', 'search-input');
inputSearchTodo.placeholder = 'Search ...';
divShow.append(todoAll, todoCompleted, btnShowAll, btnShowCompleted, inputSearchTodo);


function createTodoItem(textContent, dateContent) {
   const todoElement = document.createElement('div');
   todoElement.classList.add('todoElement');

   const label = document.createElement('label');
   label.classList.add('custom-checkbox');

   const checkbox = document.createElement('input');
   checkbox.type = 'checkbox';

   const checkmark = document.createElement('span');
   checkmark.classList.add('checkmark');

   label.append(checkbox, checkmark);

   const todoText = document.createElement('div');
   todoText.classList.add('todoText');
   const text = document.createElement('p');
   text.classList.add('text');
   text.textContent = textContent;
   todoText.append(text);

   const div = document.createElement('div');
   div.classList.add('closeDiv');
   const closeBtn = document.createElement('button');
   closeBtn.classList.add('button', 'close-btn');
   closeBtn.textContent = 'X';
   const divDate = document.createElement('div');
   divDate.classList.add('dateDiv');
   const date = document.createElement('p');
   date.classList.add('date');
   date.textContent = dateContent;
   divDate.append(date);
   div.append(closeBtn, divDate);
   todoElement.append(label, todoText, div);
   return todoElement;
}
const newTodo = createTodoItem('Todo text', '30.01.2026');
const secondTodo = createTodoItem('Todo text', '01.02.2026');

fragment.append(divEnter, divShow, newTodo, secondTodo);
divRoot.append(fragment);
