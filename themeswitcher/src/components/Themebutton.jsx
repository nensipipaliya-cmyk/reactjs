import React from "react";
import { ThemeContext } from "../context/theme";
import  useTheme from "../context/theme";

function Themebutton() {
  
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const onChange = (e) =>{
    const darkModeStatus = e.currentTarget.checked
    if(darkModeStatus){
      darkTheme()
    }else{
      lightTheme()
    }
  }

  return (
    <div>
      <input type="checbox" 
      value="" 
      className="sr-only peer" 
      onChange={onChange} 
      checked={themeMode==="dark"}/>
      <button
        onClick={darkTheme ? lightTheme : darkTheme}
        className="rounded-xl bg-gray-200 px-5 py-3 font-semibold text-gray-900 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      >
        {darkTheme ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default Themebutton;