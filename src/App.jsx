import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageUploader from './comp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <ImageUploader/>
    </div>
  )
}

export default App
