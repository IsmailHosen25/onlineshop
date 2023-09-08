import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import Nav from "./Pages/Global_Components/Nav"
import Explor from './Pages/ExplorPage/Explor'
import NavProvider from './Context/NavContext'
function App() {

  return (
    <>
  <NavProvider>
    <Nav/>
   
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/explore' element={<Explor/>}/>
      </Routes>
    
    </NavProvider>
    </>
  )
}

export default App
