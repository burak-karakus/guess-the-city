import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Choose from './components/Choose'
import './tailwind.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gradient-to-b from-green-500 to-pink-500'>
       <div>test</div>
       
       <Map/>
    </div>
  )
}

export default App
