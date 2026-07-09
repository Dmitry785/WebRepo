import { useState } from 'react'
import './App.css'
import CounterSpace from './components/CounterSpace'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='welcome'>Hello</h1>
      <CounterSpace count={count} setCount={setCount}/>
    </>
  )
}

export default App
