import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { Button } from './user/components/button.js'


const users = [
   { id: 101, name: 'Oleg' },
   { id: 102, name: 'Ivan' },
];

function App() {
   const [count, setCount] = useState(0)

   return (
      <>
         <Button onClick={() => setCount(count + 1)}>Click {count}</Button>
         <ul>{users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
      </>
   )
}

export default App
