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
