
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  //useState hook
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('')

  //Ref hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => { 
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*()-_+={}[]"

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword])


  useEffect(() => {
    passwordGenerator();
  }, [length, characterAllowed, numberAllowed, passwordGenerator])

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();

    passwordRef.current?.setSelectionRange(0, 19)


    //next js e server side rendering hoi okhane window object hoi na
    window.navigator.clipboard.writeText(password)

  }, [password])

 
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-8 text-orange-500 bg-gray-700 py-3 '>

        <h1 className='text-white text-center text-2xl my-3'>Password generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text" value={password} className='outline-none w-full py-1 px-3 '
            placeholder='password'
            readOnly
            ref={passwordRef} />

          <button
            onClick={copyPasswordToClip}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 active:bg-blue-800 hover:bg-blue-600'>copy</button>
        </div>

        <div className='flex  gap-x-5'>

          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkBox"
              defaultChecked={numberAllowed}
              id='numberInput'
              className='cursor-pointer'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkBox"
              defaultChecked={characterAllowed}
              id='characterInput'
              className='cursor-pointer'
              onChange={() => {
                setCharacterAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='characterInput'>Character</label>
          </div>

        </div>
      </div>


    </>
  )
}

export default App
