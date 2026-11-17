// import react from 'react';
import { useState,useCallback, useEffect ,useRef} from "react";

export default function Pg() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(8);
    const [number, setnumber] = useState(false);
    const [charector,setcharector] = useState(false);

    const passRef = useRef(null)

    const passwordganrator =  useCallback(() => {
       let pass = ""
       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

       if(number){
        str+= "0123456789"
       }
       if(charector){
        str += "!@#$%&*-+=[]{}`~"
       }
       for(let i = 1; i<= length; i++){
         let char = Math.floor(Math.random() * str.length ) 
         pass += str.charAt(char)
       }
      setPassword(pass)

    },[
        number,charector,setPassword,length
    ])

    const passwordclick = useCallback(() => {
             passRef.current?.select()
             passRef.current?.setSelectionRange(0, 100)
            window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(() => {
        passwordganrator()
    }, [length, number, charector, passwordganrator])
    
    return (
        <div className="bg-gray-800 text-white px-4 rounded-lg shadow-lg my-8 w-full max-w-[600px] mx-auto mb-2 pb-4 py-6">
            <h1 className="text-white text-4xl text-center mx-3">Password Generator</h1>
            <div className="flex flex-row items-center justify-center py-8  gap-2  "> 
        <input type="text"
             value={password} 
             placeholder="password" 
             readOnly className="w-full bg-white text-orange-500 font-bold p-2 rounded-lg mb-1 bg-blue-500 selection:text-black" 
             passRef={passRef}
             />
             <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-3 px-4 rounded h-12 -translate-y-1 focus:ring-4 focus:ring-blue-400 for blue shadow effect"
              onClick={passwordclick} >
                Copy
             </button>
             
             </div>
             <div className="flex items-center gap-2 ">
                <div className="flex items-center gap-1 -mt-4">
                <input type="range" min="8" max="100" value={length} className="cursor-pointer" onChange = {(e) => {setLength(Number(e.target.value))}}/>
                <label>Length {length}</label>
                </div>
            <div className = "flex items-center gap-4">
                <div className = "flex items-center gap-2 -mt-4">
                    <input type="checkbox" checked={number} id="numberinput" onChange = { () => {setnumber((prev) => !prev)}}/>
                    <label htmlFor="numberinput">Include Numbers</label>
                </div>
            <div className = "flex items-center gap-4">
                <div className = "flex items-center gap-2 -mt-4">
                    <input type="checkbox" checked={charector} id="charectorinput" onChange = { () => {setcharector((prev) => !prev)}}/>
                    <label htmlFor="charectorinput">Include Special Characters</label>
                </div>
                </div>

                 </div>
                
             </div>
             
             
        </div>
        
    )
}