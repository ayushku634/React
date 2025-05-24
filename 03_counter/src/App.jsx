
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useState } from 'react'

function App() {
  const [counter, heh] = useState(5)

  const addValue = () => {
    heh(counter + 1);
    console.log('Counter:', counter);
  }

  const subtractValue = () => {
    if(counter>0) heh(counter - 1); // 0 se neeche na jaaye
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Increment to {counter + 1}</button>
      <br />
      <button onClick={subtractValue}>Decrement to {counter - 1}</button>
    </>
  )
}

export default App
