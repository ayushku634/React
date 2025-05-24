import Chai from './chai'

function App() {
  const username = 'chai aur code'

  return (
    // <h1>Chai aur React with Vite | Ayush</h1>
    // <Chai />
    // ye dono saath mei nhi return ho sakte, ek div types bnao aur usme inhe daal do
    <>
      <h1>Chai aur React with Vite | Ayush | {username}</h1> {/* Curly braces */}

      {/* return mei JS nhi likhte, but evaluated values likhte h */}
      <Chai />
    </>
  )
}

export default App
