import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from "./Pages/Global_Components/Nav"
import Home from './Pages/HomePage/Home'
import About from './Pages/AboutPage/About'
import Explor from './Pages/ExplorPage/Explor'
import NavProvider from './Context/NavContext'
import Contect from './Pages/ContectPage/Contect'
import Men from './Pages/MenPage/Men'
import Women from './Pages/WomenPage/Women'
import Kid from "./Pages/KidPage/Kid"
function App() {

  return (
    <>
  <NavProvider>
    <Nav/>
   
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/men' element={<Men/>}/>
       <Route path='/women' element={<Women/>}/>
       <Route path='/kid' element={<Kid/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contect' element={<Contect/>}/>
       <Route path='/explore' element={<Explor/>}/>
      </Routes>
    
    </NavProvider>
    </>
  )
}

export default App
