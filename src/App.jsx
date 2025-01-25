import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
//let counter = 15

const adValue = ()=>{
  console.log("Clicked", Math.random());
  
  if(counter < 20 ){
    counter = counter + 1
    setCounter(counter)
  }
 
}

const removeValue = ()=>{

  if(counter > 0 ) {
    setCounter(counter-1);
  }
  
}

  return (
    <>
      <h3>Chai our React </h3>
      <h2>Counter Value:{counter}</h2>
      <button
      onClick={adValue}
      >Add Value</button> <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
