 HEAD
import React, { useState } from 'react';
import './index.css'
// import Card from './components/Card.jsx';
// import Navbar from './components/navbar.jsx';
import Pg from './components/pg.jsx';
function App() {

  let COUNTER = 15;

  const [Addvalue, setAddvalue] = useState(COUNTER);
  

  const addvalue = () => {
    setAddvalue(Addvalue + 1);
    if(Addvalue >= 20){
      setAddvalue(20);
    }
  }

  const emovevalue = () => {
    setAddvalue(Addvalue - 1);
    if(Addvalue <= 0){
      setAddvalue(0);
    }
  }

  return (
    <>
    {/* <Navbar />
    <div className="flex flex-col items-center justify-center h-screen">
     <h1 className="bg-black-400 rounded-lg p-4 text-center w-580 flex flex-col items-center justify-center font-bold">COUNTER VALUE: {Addvalue}</h1><br></br>
     <button onClick={addvalue} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center align-items-center">
       Add value
     </button><br></br>
     <button onClick={emovevalue} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
       remove value
     </button>    
     <br></br>
     <Card username="John Doe" />
    </div> */}
    <Pg />
     </>
import { useEffect ,useState} from 'react'
import './App.css'
import './index.css'
import Card from './components/card'
import Themebutton from "./components/themebutton";
import { ThemeProvider } from './context/theme'

function App() {
  const [themeMode,setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className='flex flex-wrap min-h-screen itms-center'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            {/* <Themebutton/> */}
          </div>
      <div className='w-full max-w-sm mx-auto'>
          <Card/>
      </div>
      </div>
      </div>
    </ThemeProvider>
>>>>>>> 4f99a56a66948f36bc18f28e512e739bc7111582
  )
}

export default App
