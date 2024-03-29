import { useState } from 'react'
import './App.css'
function App() {

  const [length, setLength] = useState(8)

  const [numberAllowed, setNumberAllowed] = useState(true)

  const [charAllowed, setCharAllowed] = useState(true)

  const [password, setPassword] = useState("")

  const passwordGenerator = () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"

    if (charAllowed) str += "!@#$%^&*()<>{}[]"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str[char]

    }

    setPassword(pass)

  }

  // passwordGenerator()
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>

      <button onClick={passwordGenerator} className='text-white'>Generate</button>
      <h1 className='text-white text-4xl'>{password}</h1>
    </>
  )
}

export default App
