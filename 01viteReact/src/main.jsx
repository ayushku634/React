import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type : 'a',
    props: {
        href: 'google.com',
        target: '_blank',
    },
    children: 'Click me to visit Google'
}

const anotherElement = (
    <a href="google.com" target="_blank">
        Click crow
    </a> 
)

const anotherUser = 'Chai aur React'
// this is real syntax of that react element
const realReactElement = React.createElement( // createElement ko automatically inject ho jaata h Babel se
    'a',
    {
        href: 'google.com',
        target: '_blank'
    },
    'Click me to visit Google',
    anotherUser
    // ye anotherUser bss dikhane k liye h ki react mei kaise daalte h hum aise variables jo 
    // main.jsx k return element mei curly braces mei daal dete the
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    {/* ye nhi chalega kyuki hum yaha bss ek custom react element ko render kar rahe hain
    to syntax alag ho skta hai */}
    {/* {reactElement} */} 

    {/* isme hum apna poora HTML tag hi usko react ko de rhe h object bnane k liye */}
    {anotherElement}
    <br />
    {realReactElement}
  </StrictMode>
)
