import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import Nav from "./Pages/Global_Components/Nav"
import Explor from './Pages/ExplorPage/Explor'
function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/explore' element={<Explor/>}/>
     </Routes>
    </>
  )
}

export default App
