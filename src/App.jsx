import { useState } from 'react'
import './App.css'
import BugsTable from './components/BugsTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BugsTable/>
    </>
  )
}

export default App
