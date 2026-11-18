import { Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './componets/Header/Header.jsx'    
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Leyout from './Leyout.jsx'
import Home from './componets/Home/Home.jsx'
import About from './componets/About/About.jsx'
import Content from './componets/content/Content.jsx'
import User from './componets/User/User.jsx'
import Github from './componets/Github/Github.jsx'


// const router = createBrowserRouter(
//   [
//     {
//       path:"/",
//       element:<Leyout/>,
//       children:[
//         {
//           path:"",
//           element:<Home/>
//         },
//         {
//           path:"about",
//           element:<About/>,
//         },
//         {
//           path: "Content",
//           element: <Content />
//        }

//       ]

//     }
//   ]
// )

const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Leyout/>}>
      <Route path="" element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='content' element={<Content/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route path='github' element={<Github/>}/>

    </Route> 
   ) 
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider 
    router={router} />
  </StrictMode>,
)