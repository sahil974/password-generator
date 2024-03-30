import { useCallback, useEffect, useState, useRef } from 'react'
function App() {

  const [length, setLength] = useState(18)

  const [numberAllowed, setNumberAllowed] = useState(false)

  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState("")

  const passwordRef = useRef()

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    // alert("Passowrd copied to clipboard")
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"

    if (charAllowed) str += "!@#$%^&*()<>{}[]"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str[char]

    }

    // console.log(pass, numberAllowed, str);
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])


  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, passwordGenerator])
  // passwordGenerator()
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            className='outline-none bg-blue-900 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
          >Copy
          </button>
        </div>
        <div className='flex text-sm  gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              value={numberAllowed}
              // className='cursor-pointer'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              value={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='charactorInput'>Special Charactor</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
