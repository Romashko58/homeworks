const divWrapper = document.getElementById('wrapper');
const posts = [15, 23, 7, 3];
//Promise chaining
const res = posts.reduce((acc, id) => {
   return acc.then(() => {
      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then(response => response.json())
         .then(data => printPost(data))
         .catch(error => console.error(`Ошибка в посте ${id}:`, error));
   })
}, Promise.resolve());

function printPost(post) {
   const div = document.createElement('div');
   const title = document.createElement('h3');
   const paragraph = document.createElement('p');
   title.textContent = `${post.title}`;
   paragraph.textContent = `${post.body}`;
   div.append(title, paragraph);
   divWrapper.append(div);
}
//Async / await
async function getPost(posts) {
   for (const id of posts) {
      try {
         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
         const data = await response.json();
         printPost(data);
      } catch (error) {
         console.error(`Ошибка в посте ${id}`, error);
      }

   }
}
getPost(posts);