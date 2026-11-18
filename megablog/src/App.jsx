import './App.css'
import {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {login,logout} from './store/authSlice'
import { Footer } from './componets/index.js'
import { Header } from './componets'
import { Outlet } from 'react-router-dom'
import AppService  from './appwrite/auth.js'

function App() {
 const [loading,setLoading] = useState(true)
 const dispatch = useDispatch()

 useEffect(() => {
   AppService.getAccount()
   .then((userData) => {
    if(userData) {
      dispatch(login(userData))
    }else{
      dispatch(logout())
    }
   })
   .finally(() => 
    setLoading(false))
 },[])
 
  return !loading ? (
    <div className = "min-h-screen center bg-gray-400">test
      <div className='w-full block'>
       <Header/>
       <main>
       Todo {/* <Outlet/> */}
       </main>
       <Footer/>
        </div>
    </div>
  ) : null
}

export default App
