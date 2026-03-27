import { createDomElement } from "./dom.utils.js";
const divRoot = document.getElementById('root');
const fragment = document.createDocumentFragment();
const managementElements = createDomElement({ tagName: 'div', atributes: { className: 'enter' } });
export const btnDeleteAll = createDomElement({ tagName: 'button', atributes: { className: 'button' }, textContent: 'Delete All' });
export const btnDeleteLast = createDomElement({ tagName: 'button', atributes: { className: 'button' }, textContent: 'Delete Last' });
export const inputEnterTodo = createDomElement({ tagName: 'input', atributes: { className: 'input' } })
inputEnterTodo.placeholder = 'Enter todo ...';
export const btnAdd = createDomElement({ tagName: 'button', atributes: { className: 'button' }, textContent: 'Add' });
managementElements.append(btnDeleteAll, btnDeleteLast, inputEnterTodo, btnAdd);

const filterElements = createDomElement({ tagName: 'div', atributes: { className: 'show' } });
const todoAll = createDomElement({ tagName: 'span', atributes: { className: 'spanStats' }, textContent: 'All: ' });
export const allNumber = createDomElement({ tagName: 'span', textContent: '0' });
todoAll.append(allNumber);

const todoCompleted = createDomElement({ tagName: 'span', atributes: { className: 'spanStats' }, textContent: 'Completed: ' });
export const completedNumber = createDomElement({ tagName: 'span', textContent: '0' });
todoCompleted.append(completedNumber);
export const btnShowAll = createDomElement({ tagName: 'button', atributes: { className: 'button show-btn' }, textContent: 'Show All' });
export const btnShowCompleted = createDomElement({ tagName: 'button', atributes: { className: 'button show-btn' }, textContent: 'Show Completed' });
export const inputSearchTodo = createDomElement({ tagName: 'input', atributes: { className: 'input search-input' } });
inputSearchTodo.placeholder = 'Search ...';
filterElements.append(todoAll, todoCompleted, btnShowAll, btnShowCompleted, inputSearchTodo);



export function createTodoItem(textContent, dateContent, idContent) {
   const todoElement = createDomElement({ tagName: 'div', atributes: { className: 'todoElement' } });
   const label = createDomElement({ tagName: 'label', atributes: { className: 'custom-checkbox' } });
   const checkbox = createDomElement({ tagName: 'input' });
   checkbox.type = 'checkbox';
   const checkmark = createDomElement({ tagName: 'span', atributes: { className: 'checkmark' } });
   label.append(checkbox, checkmark);

   const todoText = createDomElement({ tagName: 'div', atributes: { className: 'todoText' } });
   const text = createDomElement({ tagName: 'p', atributes: { className: 'text' }, textContent });
   todoText.append(text);
   const div = createDomElement({ tagName: 'div', atributes: { className: 'closeDiv' } });
   const closeBtn = createDomElement({ tagName: 'button', atributes: { className: 'button close-btn' }, textContent: 'X' });
   const date = createDomElement({ tagName: 'p', atributes: { className: 'date' }, textContent: dateContent });
   todoElement.dataset.id = idContent;
   div.append(closeBtn, date);
   todoElement.append(label, todoText, div);
   return todoElement;
}

export const todoListContainer = createDomElement({ tagName: 'div', atributes: { className: 'todoListContainer' } });
fragment.append(managementElements, filterElements, todoListContainer);
divRoot.append(fragment);