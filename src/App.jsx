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
  )
}

export default App
